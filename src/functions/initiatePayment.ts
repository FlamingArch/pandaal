import React from "react";
import { httpsCallable } from "firebase/functions";

export default async function intiatePayment(
  functionsInstance: any,
  user: any,
  userDoc: any,
  data: {
    uid: string;
    razorId: string;
    eventId: string;
    registrationId: string;
    ticketCount: number;
  },
  completion: (response: any) => void
) {
  const fetchOrderId = httpsCallable(functionsInstance, "fetchOrderId");
  const paymentSuccess = httpsCallable(functionsInstance, "paymentSuccess");
  const paymentFailure = httpsCallable(functionsInstance, "paymentFailure");

  const orderDetails = await fetchOrderId(data);
  const order = JSON.parse(orderDetails.data as any);
  console.debug(orderDetails);

  var options = {
    key: "rzp_live_SLrlOO8OxclkKl",
    order_id: order.id,
    currency: order.currency,
    amount: order.amount,
    name: "Pandaal",
    image: "https://example.com/your_logo",
    description: "Test Transaction", // TODO: Change this to event name
    handler: (response) => {
      paymentSuccess({
        orderId: order.id,
        paymentId: response.razorpay_payment_id,
        signature: response.razorpay_signature,
        registrationId: data.registrationId,
      });
      completion(response);
    },
    prefill: {
      name: userDoc.name,
      email: userDoc.email, // TODO: Check
      contact: user.phoneNumber,
    },
    retry: {
      enabled: false,
    },
    notes: {
      registrationId: data.registrationId,
      userId: data.uid,
      eventId: data.eventId,
      ticketCount: data.ticketCount,
      refundPrice: order.amount,
      source: "web",
    },
    send_sms_hash: true,
    readonly: {
      name: true,
      contact: true,
      email: true,
    },
    timeout: 600,

    customer_id: userDoc.razorId,
    remember_customer: true,

    theme: {
      color: "#3F4882",
    },
    modal: {
      ondismiss: function (response) {
        paymentFailure({
          userId: data.uid,
          registrationId: data.registrationId,
          eventId: data.eventId,
          ticketCount: data.ticketCount,
          errorCode: "PAYMENT_CANCELED",
          errorDescription: "The user canceled the payment.",
          errorResponse: `{"error":{"code":"BAD_REQUEST_ERROR","description":"Payment processing cancelled by user","source":"customer","step":"payment_authentication","reason":"payment_cancelled","metadata":{}}}`,
        });
      },
    },
  };

  var instance = new Razorpay(options);
  instance.on("payment.failed", (response) => {
    paymentFailure({
      userId: userDoc.uid,
      registrationId: data.registrationId,
      eventId: data.eventId,
      ticketCount: data.ticketCount,
      errorCode: response.error.code,
      errorDescription: response.error.description,
      errorResponse: response.error.reason,
    });
    completion(response);
  });

  instance.open();
}
