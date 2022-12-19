import { httpsCallable } from "firebase/functions";

export default async function intiatePayment(
  functionsInstance: any,
  user: any,
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
    amount: order.amount,
    currency: order.currency,
    name: "Pandaal",
    description: "Test Transaction",
    image: "https://example.com/your_logo",
    order_id: order.id,
    handler: completion,
    prefill: {
      name: user.displayName,
      email: user.email,
      contact: user.phoneNumber,
    },
    notes: {
      address: "Razorpay Corporate Office",
    },
    theme: {
      color: "#3F4882",
    },
  };
  var instance = new Razorpay(options);
  instance.open();
  instance.on("payment.failed", completion);
}
