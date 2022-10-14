import React from "react";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
import { collection, increment, arrayUnion } from "firebase/firestore";
import {
  doc,
  getDoc,
  addDoc,
  serverTimestamp,
  runTransaction,
} from "firebase/firestore";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

const Context = React.createContext(null);

const Provider = ({ children }) => {
  const app = initializeApp({
    apiKey: "AIzaSyAzkEwuLhZwpL57SkaAY1ee2ym91fQLIGk",
    authDomain: "pandaal-a71fd.firebaseapp.com",
    projectId: "pandaal-a71fd",
    storageBucket: "pandaal-a71fd.appspot.com",
    messagingSenderId: "918662713292",
    appId: "1:918662713292:web:feebd8bddb182f59809769",
    measurementId: "G-RN1KKBLZ7S",
  });

  const [lastID, setLastID] = React.useState("");
  const [lastRegSuccessPage, setLastRegSuccessPage] = React.useState("");

  React.useEffect(() => {
    const fetch = async () => {
      if (lastID) {
        const html = await getDoc(doc(firestore, "registrations", lastID));
        setLastRegSuccessPage(html.data().message.html);
      }
    };
    fetch();
  }, [lastID]);

  const firestore = getFirestore(app);
  const auth = getAuth(app);

  const [user, signingIn, signInError] = useAuthState(auth);

  const signOutUser = () => {
    signOut(auth);
  };

  const toggleLike = (event, user) => {
    return;
  };

  const submitRegistration = async (event, eventID, answers, name, email) => {
    const document = {
      answers: answers,
      bannerURL: event.bannerURL,
      cashCollected: true,
      collectCash: "0",
      endDate: event.endDate,
      endTime: event.endTime,
      eventDateType: event.eventDateType,
      eventID: eventID,
      eventTitle: event.Title,
      offlineLocationAddress: event.offlineLocationAddress,
      onOff: event.onOff,
      onlinePlatform: event.onlinePlatform,
      originalPrice: 0, // TODO: Update
      paymentStatus: "free", // TODO: Update
      registrationStatus: "registered", // TODO: Update
      registrationStatusDateTime: serverTimestamp(),
      startDate: event.startDate,
      startTime: event.startTime,
      ticketAuthorised: false,
      ticketCount: "1",
      to: auth.currentUser.email,
      userId: auth.currentUser.uid,
      userName: auth.currentUser.displayName,
      userPhone: auth.currentUser.phoneNumber,
    };
    try {
      const id = await runTransaction(firestore, async (transaction) => {
        const docRef = doc(collection(firestore, "registrations"));

        const event = await transaction.get(doc(firestore, "Events", eventID));

        if (event == null) {
          throw "Event does not exist!";
        }

        if (event.data().active != true) {
          throw "Event is not active!";
        }

        if (!event.data().acceptingRegistrations) {
          throw "Event is not accepting registrations!";
        }

        if (
          event.data().registrationCount >= event.data().availableRegistrations
        ) {
          throw "Event is full!";
        }

        transaction.set(doc(firestore, "registrations", docRef.id), {
          ...document,
          registrationID: docRef.id,
          message: {
            html: `
<!DOCTYPE html>
    <html xmlns=http://www.w3.org/1999/xhtml xmlns:o=urn:schemas-microsoft-com:office:office
        xmlns:v=urn:schemas-microsoft-com:vml>

    <head>
        <!--[if gte mso 9]><xml><o:officedocumentsettings><o:allowpng><o:pixelsperinch>96</o:pixelsperinch></o:officedocumentsettings></xml><![endif]-->
        <meta content="text/html; charset=UTF-8" http-equiv=Content-Type>
        <meta content="width=device-width,initial-scale=1" name=viewport>
        <meta name=x-apple-disable-message-reformatting>
        <!--[if !mso]><!-->
        <meta content="IE=edge" http-equiv=X-UA-Compatible>
        <!--<![endif]-->
        <title></title>
        <style>
            @media only screen and (min-width:620px) {
                .u-row {
                    width: 600px !important
                }

                .u-row .u-col {
                    vertical-align: top
                }

                .u-row .u-col-44 {
                    width: 264px !important
                }

                .u-row .u-col-56 {
                    width: 336px !important
                }

                .u-row .u-col-100 {
                    width: 600px !important
                }
            }

            @media (max-width:620px) {
                .u-row-container {
                    max-width: 100% !important;
                    padding-left: 0 !important;
                    padding-right: 0 !important
                }

                .u-row .u-col {
                    min-width: 320px !important;
                    max-width: 100% !important;
                    display: block !important
                }

                .u-row {
                    width: calc(100% - 40px) !important
                }

                .u-col {
                    width: 100% !important
                }

                .u-col>div {
                    margin: 0 auto
                }
            }

            body {
                margin: 0;
                padding: 0
            }

            table,
            td,
            tr {
                vertical-align: top;
                border-collapse: collapse
            }

            p {
                margin: 0
            }

            .ie-container table,
            .mso-container table {
                table-layout: fixed
            }

            * {
                line-height: inherit
            }

            a[x-apple-data-detectors=true] {
                color: inherit !important;
                text-decoration: none !important
            }

            table,
            td {
                color: #000
            }

            #u_body a {
                color: #00e;
                text-decoration: underline
            }

            @media (max-width:480px) {
                #u_content_image_1 .v-src-width {
                    width: auto !important
                }

                #u_content_image_1 .v-src-max-width {
                    max-width: 65% !important
                }

                #u_content_heading_1 .v-font-size {
                    font-size: 22px !important
                }

                #u_content_heading_2 .v-container-padding-padding {
                    padding: 35px 30px 0 20px !important
                }

                #u_content_heading_2 .v-text-align {
                    text-align: left !important
                }

                #u_content_text_2 .v-container-padding-padding {
                    padding: 0 20px 5px !important
                }

                #u_content_text_2 .v-text-align {
                    text-align: left !important
                }

                #u_content_text_12 .v-container-padding-padding {
                    padding: 1px 30px 40px 20px !important
                }

                #u_content_text_12 .v-text-align {
                    text-align: left !important
                }

                #u_content_text_13 .v-container-padding-padding {
                    padding: 10px 10px 10px 20px !important
                }

                #u_content_text_18 .v-container-padding-padding {
                    padding: 30px 30px 0 !important
                }

                #u_content_text_19 .v-container-padding-padding {
                    padding: 0 30px !important
                }

                #u_content_text_22 .v-container-padding-padding {
                    padding: 0 30px !important
                }

                #u_content_text_24 .v-container-padding-padding {
                    padding: 11px 30px 0 !important
                }

                #u_content_text_26 .v-container-padding-padding {
                    padding: 0 30px !important
                }

                #u_content_text_25 .v-container-padding-padding {
                    padding: 11px 30px 0 !important
                }

                #u_content_text_21 .v-container-padding-padding {
                    padding: 0 30px !important
                }

                #u_content_text_10 .v-container-padding-padding {
                    padding: 0 20px 10px !important
                }

                #u_content_button_1 .v-size-width {
                    width: 50% !important
                }
            }
        </style>
        <!--[if !mso]><!-->
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel=stylesheet>
        <link href="https://fonts.googleapis.com/css?family=Rubik:400,700&display=swap" rel=stylesheet>
        <!--<![endif]-->

    <body class="clean-body u_body"
        style=margin:0;padding:0;-webkit-text-size-adjust:100%;background-color:#eee;color:#000><span
            style="opacity: 0"> {{ Date.now() }} </span>
        <!--[if IE]><div class=ie-container><![endif]-->
        <!--[if mso]><div class=mso-container><![endif]-->
        <table cellpadding=0 cellspacing=0
            style="border-collapse:collapse;table-layout:fixed;border-spacing:0;mso-table-lspace:0;mso-table-rspace:0;vertical-align:top;min-width:320px;Margin:0 auto;background-color:#eee;width:100%"
            id=u_body>
            <tr style=vertical-align:top>
                <td style=word-break:break-word;border-collapse:collapse!important;vertical-align:top>
                    <!--[if (mso)|(IE)]><table cellpadding=0 cellspacing=0 border=0 width=100%><tr><td style=background-color:#eee align=center><![endif]-->
                    <div style=padding:0;background-color:#3d4886 class=u-row-container>
                        <div style="Margin:0 auto;min-width:320px;max-width:600px;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;background-color:transparent"
                            class=u-row>
                            <div
                                style=border-collapse:collapse;display:table;width:100%;height:100%;background-color:transparent>
                                <!--[if (mso)|(IE)]><table cellpadding=0 cellspacing=0 border=0 width=100%><tr><td style=padding:0;background-color:#3d4886 align=center><table cellpadding=0 cellspacing=0 border=0 style=width:600px><tr style=background-color:transparent><![endif]-->
                                <!--[if (mso)|(IE)]><td style="background-color:#3d4886;width:600px;padding:0;border-top:0 solid transparent;border-left:0 solid transparent;border-right:0 solid transparent;border-bottom:0 solid transparent"align=center valign=top width=600><![endif]-->
                                <div style=max-width:320px;min-width:600px;display:table-cell;vertical-align:top
                                    class="u-col u-col-100">
                                    <div style=background-color:#3d4886;height:100%;width:100%!important>
                                        <!--[if (!mso)&(!IE)]><!-->
                                        <div
                                            style="height:100%;padding:0;border-top:0 solid transparent;border-left:0 solid transparent;border-right:0 solid transparent;border-bottom:0 solid transparent">
                                            <!--<![endif]-->
                                            <table cellpadding=0 cellspacing=0 border=0 width=100%
                                                style=font-family:Rubik,sans-serif role=presentation
                                                id=u_content_image_1>
                                                <tr>
                                                    <td style="overflow-wrap:break-word;word-break:break-word;padding:50px 10px 10px;font-family:Rubik,sans-serif"
                                                        align=left class=v-container-padding-padding>
                                                        <table cellpadding=0 cellspacing=0 border=0 width=100%>
                                                            <tr>
                                                                <td style=padding-right:0;padding-left:0 align=center
                                                                    class=v-text-align><img alt="email icon"
                                                                        src="https://cdn.templates.unlayer.com/assets/1656487470905-mail.png"
                                                                        style=outline:0;text-decoration:none;-ms-interpolation-mode:bicubic;clear:both;display:inline-block!important;border:none;height:auto;float:none;width:50%;max-width:290px
                                                                        width=290 title="email icon" align=center
                                                                        border=0 class="v-src-max-width v-src-width">
                                                        </table>
                                            </table>
                                            <table cellpadding=0 cellspacing=0 border=0 width=100%
                                                style=font-family:Rubik,sans-serif role=presentation
                                                id=u_content_heading_1>
                                                <tr>
                                                    <td style="overflow-wrap:break-word;word-break:break-word;padding:20px 10px;font-family:Rubik,sans-serif"
                                                        align=left class=v-container-padding-padding>
                                                        <h1 class="v-text-align v-font-size"
                                                            style=margin:0;color:#fff;line-height:240%;text-align:center;word-wrap:break-word;font-weight:400;font-family:Montserrat,sans-serif;font-size:28px>
                                                            <div>
                                                                <div><strong>Ticket Confirmation</strong></div>
                                                            </div>
                                                        </h1>
                                            </table>
                                            <!--[if (!mso)&(!IE)]><!-->
                                        </div>
                                        <!--<![endif]-->
                                    </div>
                                </div>
                                <!--[if (mso)|(IE)]><![endif]-->
                                <!--[if (mso)|(IE)]><![endif]-->
                            </div>
                        </div>
                    </div>
                    <div style=padding:0;background-color:transparent class=u-row-container>
                        <div style="Margin:0 auto;min-width:320px;max-width:600px;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;background-color:transparent"
                            class=u-row>
                            <div
                                style=border-collapse:collapse;display:table;width:100%;height:100%;background-color:transparent>
                                <!--[if (mso)|(IE)]><table cellpadding=0 cellspacing=0 border=0 width=100%><tr><td style=padding:0;background-color:transparent align=center><table cellpadding=0 cellspacing=0 border=0 style=width:600px><tr style=background-color:transparent><![endif]-->
                                <!--[if (mso)|(IE)]><td style="background-color:#f3f8fe;width:600px;padding:0;border-top:0 solid transparent;border-left:0 solid transparent;border-right:0 solid transparent;border-bottom:0 solid transparent;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0"align=center valign=top width=600><![endif]-->
                                <div style=max-width:320px;min-width:600px;display:table-cell;vertical-align:top
                                    class="u-col u-col-100">
                                    <div
                                        style=background-color:#f3f8fe;height:100%;width:100%!important;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0>
                                        <!--[if (!mso)&(!IE)]><!-->
                                        <div
                                            style="height:100%;padding:0;border-top:0 solid transparent;border-left:0 solid transparent;border-right:0 solid transparent;border-bottom:0 solid transparent;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0">
                                            <!--<![endif]-->
                                            <table cellpadding=0 cellspacing=0 border=0 width=100%
                                                style=font-family:Rubik,sans-serif role=presentation
                                                id=u_content_heading_2>
                                                <tr>
                                                    <td style="overflow-wrap:break-word;word-break:break-word;padding:35px 30px 0;font-family:Rubik,sans-serif"
                                                        align=left class=v-container-padding-padding>
                                                        <h1 class="v-text-align v-font-size"
                                                            style=margin:0;line-height:140%;text-align:left;word-wrap:break-word;font-weight:400;font-family:Rubik,sans-serif;font-size:18px>
                                                            <div>
                                                                <div>
                                                                    <div><strong>Hello ${name},<br></strong>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </h1>
                                            </table>
                                            <table cellpadding=0 cellspacing=0 border=0 width=100%
                                                style=font-family:Rubik,sans-serif role=presentation
                                                id=u_content_text_2>
                                                <tr>
                                                    <td style="overflow-wrap:break-word;word-break:break-word;padding:20px 30px 2px;font-family:Rubik,sans-serif"
                                                        align=left class=v-container-padding-padding>
                                                        <div style=line-height:170%;text-align:left;word-wrap:break-word
                                                            class=v-text-align>
                                                            <p style=font-size:14px;line-height:170%><span
                                                                    style=font-family:Montserrat,sans-serif;font-size:14px;line-height:23.8px>This
                                                                    is a confirmation mail regarding your registration
                                                                    for the event,</span>
                                                        </div>
                                            </table>
                                            <!--[if (!mso)&(!IE)]><!-->
                                        </div>
                                        <!--<![endif]-->
                                    </div>
                                </div>
                                <!--[if (mso)|(IE)]><![endif]-->
                                <!--[if (mso)|(IE)]><![endif]-->
                            </div>
                        </div>
                    </div>
                    <div style=padding:0;background-color:transparent class=u-row-container>
                        <div style="Margin:0 auto;min-width:320px;max-width:600px;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;background-color:transparent"
                            class=u-row>
                            <div
                                style=border-collapse:collapse;display:table;width:100%;height:100%;background-color:transparent>
                                <!--[if (mso)|(IE)]><table cellpadding=0 cellspacing=0 border=0 width=100%><tr><td style=padding:0;background-color:transparent align=center><table cellpadding=0 cellspacing=0 border=0 style=width:600px><tr style=background-color:transparent><![endif]-->
                                <!--[if (mso)|(IE)]><td style="background-color:#f3f8fe;width:600px;padding:0;border-top:0 solid transparent;border-left:0 solid transparent;border-right:0 solid transparent;border-bottom:0 solid transparent;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0"align=center valign=top width=600><![endif]-->
                                <div style=max-width:320px;min-width:600px;display:table-cell;vertical-align:top
                                    class="u-col u-col-100">
                                    <div
                                        style=background-color:#f3f8fe;height:100%;width:100%!important;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0>
                                        <!--[if (!mso)&(!IE)]><!-->
                                        <div
                                            style="height:100%;padding:0;border-top:0 solid transparent;border-left:0 solid transparent;border-right:0 solid transparent;border-bottom:0 solid transparent;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0">
                                            <!--<![endif]-->
                                            <table cellpadding=0 cellspacing=0 border=0 width=100%
                                                style=font-family:Rubik,sans-serif role=presentation
                                                id=u_content_text_12>
                                                <tr>
                                                    <td style="overflow-wrap:break-word;word-break:break-word;padding:1px 30px 19px;font-family:Rubik,sans-serif"
                                                        align=left class=v-container-padding-padding>
                                                        <div style=line-height:140%;text-align:left;word-wrap:break-word
                                                            class=v-text-align>
                                                            <p style=font-size:14px;line-height:140%><span
                                                                    style=font-family:Montserrat,sans-serif;font-size:16px;line-height:22.4px;color:#3d4886><strong>${
                                                                      event.Title
                                                                    }</strong></span>
                                                        </div>
                                            </table>
                                            <!--[if (!mso)&(!IE)]><!-->
                                        </div>
                                        <!--<![endif]-->
                                    </div>
                                </div>
                                <!--[if (mso)|(IE)]><![endif]-->
                                <!--[if (mso)|(IE)]><![endif]-->
                            </div>
                        </div>
                    </div>
                    <div style=padding:0;background-color:transparent class=u-row-container>
                        <div style="Margin:0 auto;min-width:320px;max-width:600px;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;background-color:transparent"
                            class=u-row>
                            <div
                                style=border-collapse:collapse;display:table;width:100%;height:100%;background-color:transparent>
                                <!--[if (mso)|(IE)]><table cellpadding=0 cellspacing=0 border=0 width=100%><tr><td style=padding:0;background-color:transparent align=center><table cellpadding=0 cellspacing=0 border=0 style=width:600px><tr style=background-color:transparent><![endif]-->
                                <!--[if (mso)|(IE)]><td style="background-color:#f3f8fe;width:600px;padding:0;border-top:0 solid transparent;border-left:0 solid transparent;border-right:0 solid transparent;border-bottom:0 solid transparent;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0"align=center valign=top width=600><![endif]-->
                                <div style=max-width:320px;min-width:600px;display:table-cell;vertical-align:top
                                    class="u-col u-col-100">
                                    <div
                                        style=background-color:#f3f8fe;height:100%;width:100%!important;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0>
                                        <!--[if (!mso)&(!IE)]><!-->
                                        <div
                                            style="height:100%;padding:0;border-top:0 solid transparent;border-left:0 solid transparent;border-right:0 solid transparent;border-bottom:0 solid transparent;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0">
                                            <!--<![endif]-->
                                            <table cellpadding=0 cellspacing=0 border=0 width=100%
                                                style=font-family:Rubik,sans-serif role=presentation
                                                id=u_content_text_13>
                                                <tr>
                                                    <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 10px 30px;font-family:Rubik,sans-serif"
                                                        align=left class=v-container-padding-padding>
                                                        <div style=line-height:140%;text-align:left;word-wrap:break-word
                                                            class=v-text-align>
                                                            <p style=font-size:14px;line-height:140%><span
                                                                    style=font-family:Montserrat,sans-serif;font-size:14px;line-height:19.6px>We
                                                                    really appreciate your interest in this event, it's
                                                                    going to be a great opportunity for us to serve
                                                                    you.</span>
                                                            <p style=font-size:14px;line-height:140%>
                                                            <p style=font-size:14px;line-height:140%><span
                                                                    style=font-family:Montserrat,sans-serif;font-size:14px;line-height:19.6px>Regards,</span>
                                                            <p style=font-size:14px;line-height:140%><span
                                                                    style=color:#3d4886;font-size:14px;line-height:19.6px><strong><span
                                                                            style=font-family:Montserrat,sans-serif;font-size:14px;line-height:19.6px>Team
                                                                            <span
                                                                                style=font-size:14px;line-height:19.6px>Pandaal</span></span></strong></span>
                                                        </div>
                                            </table>
                                            <!--[if (!mso)&(!IE)]><!-->
                                        </div>
                                        <!--<![endif]-->
                                    </div>
                                </div>
                                <!--[if (mso)|(IE)]><![endif]-->
                                <!--[if (mso)|(IE)]><![endif]-->
                            </div>
                        </div>
                    </div>
                    <div style=padding:0;background-color:transparent class=u-row-container>
                        <div style="Margin:0 auto;min-width:320px;max-width:600px;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;background-color:transparent"
                            class=u-row>
                            <div
                                style=border-collapse:collapse;display:table;width:100%;height:100%;background-color:transparent>
                                <!--[if (mso)|(IE)]><table cellpadding=0 cellspacing=0 border=0 width=100%><tr><td style=padding:0;background-color:transparent align=center><table cellpadding=0 cellspacing=0 border=0 style=width:600px><tr style=background-color:transparent><![endif]-->
                                <!--[if (mso)|(IE)]><td style="background-color:#fff;width:600px;padding:0;border-top:0 solid transparent;border-left:0 solid transparent;border-right:0 solid transparent;border-bottom:0 solid transparent;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0"align=center valign=top width=600><![endif]-->
                                <div style=max-width:320px;min-width:600px;display:table-cell;vertical-align:top
                                    class="u-col u-col-100">
                                    <div
                                        style=background-color:#fff;height:100%;width:100%!important;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0>
                                        <!--[if (!mso)&(!IE)]><!-->
                                        <div
                                            style="height:100%;padding:0;border-top:0 solid transparent;border-left:0 solid transparent;border-right:0 solid transparent;border-bottom:0 solid transparent;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0">
                                            <!--<![endif]-->
                                            <table cellpadding=0 cellspacing=0 border=0 width=100%
                                                style=font-family:Rubik,sans-serif role=presentation>
                                                <tr>
                                                    <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 20px 0;font-family:Rubik,sans-serif"
                                                        align=left class=v-container-padding-padding>
                                                        <table cellpadding=0 cellspacing=0 border=0 width=100%>
                                                            <tr>
                                                                <td style=padding-right:0;padding-left:0 align=center
                                                                    class=v-text-align><img alt=""
                                                                        src="https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=pndlR_${
                                                                          docRef.id
                                                                        }&choe=UTF-8"
                                                                        style=outline:0;text-decoration:none;-ms-interpolation-mode:bicubic;clear:both;display:inline-block!important;border:none;height:auto;float:none;width:100%;max-width:200px
                                                                        width=200 align=center border=0
                                                                        class="v-src-max-width v-src-width">
                                                        </table>
                                            </table>
                                            <table cellpadding=0 cellspacing=0 border=0 width=100%
                                                style=font-family:Rubik,sans-serif role=presentation>
                                                <tr>
                                                    <td style="overflow-wrap:break-word;word-break:break-word;padding:2px 20px 25px;font-family:Rubik,sans-serif"
                                                        align=left class=v-container-padding-padding>
                                                        <div style=line-height:140%;text-align:center;word-wrap:break-word
                                                            class=v-text-align>
                                                            <p style=font-size:14px;line-height:140%><strong><span
                                                                        style=font-family:Montserrat,sans-serif;font-size:14px;line-height:19.6px>This
                                                                        QR validates your ticket</span></strong>
                                                            <p style=font-size:14px;line-height:140%><span
                                                                    style=font-family:Montserrat,sans-serif;font-size:14px;line-height:19.6px>Scan
                                                                    this to view your entire ticket on Pandaal
                                                                    app.</span>
                                                        </div>
                                            </table>
                                            <!--[if (!mso)&(!IE)]><!-->
                                        </div>
                                        <!--<![endif]-->
                                    </div>
                                </div>
                                <!--[if (mso)|(IE)]><![endif]-->
                                <!--[if (mso)|(IE)]><![endif]-->
                            </div>
                        </div>
                    </div>
                    <div style=padding:0;background-color:transparent class=u-row-container>
                        <div style="Margin:0 auto;min-width:320px;max-width:600px;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;background-color:transparent"
                            class=u-row>
                            <div
                                style=border-collapse:collapse;display:table;width:100%;height:100%;background-color:transparent>
                                <!--[if (mso)|(IE)]><table cellpadding=0 cellspacing=0 border=0 width=100%><tr><td style=padding:0;background-color:transparent align=center><table cellpadding=0 cellspacing=0 border=0 style=width:600px><tr style=background-color:transparent><![endif]-->
                                <!--[if (mso)|(IE)]><td style="background-color:#f3f8fe;width:600px;padding:0;border-top:0 solid transparent;border-left:0 solid transparent;border-right:0 solid transparent;border-bottom:0 solid transparent;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0"align=center valign=top width=600><![endif]-->
                                <div style=max-width:320px;min-width:600px;display:table-cell;vertical-align:top
                                    class="u-col u-col-100">
                                    <div
                                        style=background-color:#f3f8fe;height:100%;width:100%!important;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0>
                                        <!--[if (!mso)&(!IE)]><!-->
                                        <div
                                            style="height:100%;padding:0;border-top:0 solid transparent;border-left:0 solid transparent;border-right:0 solid transparent;border-bottom:0 solid transparent;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0">
                                            <!--<![endif]-->
                                            <table cellpadding=0 cellspacing=0 border=0 width=100%
                                                style=font-family:Rubik,sans-serif role=presentation>
                                                <tr>
                                                    <td style=overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:Rubik,sans-serif
                                                        align=left class=v-container-padding-padding>
                                                        <div style=line-height:140%;text-align:center;word-wrap:break-word
                                                            class=v-text-align>
                                                            <p style=font-size:14px;line-height:140%><span
                                                                    style=font-size:24px;line-height:33.6px;font-family:Montserrat,sans-serif>Booking
                                                                    Id</span>
                                                        </div>
                                            </table>
                                            <!--[if (!mso)&(!IE)]><!-->
                                        </div>
                                        <!--<![endif]-->
                                    </div>
                                </div>
                                <!--[if (mso)|(IE)]><![endif]-->
                                <!--[if (mso)|(IE)]><![endif]-->
                            </div>
                        </div>
                    </div>
                    <div style=padding:0;background-color:transparent class=u-row-container>
                        <div style="Margin:0 auto;min-width:320px;max-width:600px;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;background-color:transparent"
                            class=u-row>
                            <div
                                style=border-collapse:collapse;display:table;width:100%;height:100%;background-color:transparent>
                                <!--[if (mso)|(IE)]><table cellpadding=0 cellspacing=0 border=0 width=100%><tr><td style=padding:0;background-color:transparent align=center><table cellpadding=0 cellspacing=0 border=0 style=width:600px><tr style=background-color:transparent><![endif]-->
                                <!--[if (mso)|(IE)]><td style="background-color:#f3f8fe;width:600px;padding:0;border-top:0 solid transparent;border-left:0 solid transparent;border-right:0 solid transparent;border-bottom:0 solid transparent;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0"align=center valign=top width=600><![endif]-->
                                <div style=max-width:320px;min-width:600px;display:table-cell;vertical-align:top
                                    class="u-col u-col-100">
                                    <div
                                        style=background-color:#f3f8fe;height:100%;width:100%!important;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0>
                                        <!--[if (!mso)&(!IE)]><!-->
                                        <div
                                            style="height:100%;padding:0;border-top:0 solid transparent;border-left:0 solid transparent;border-right:0 solid transparent;border-bottom:0 solid transparent;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0">
                                            <!--<![endif]-->
                                            <table cellpadding=0 cellspacing=0 border=0 width=100%
                                                style=font-family:Rubik,sans-serif role=presentation>
                                                <tr>
                                                    <td style="overflow-wrap:break-word;word-break:break-word;padding:5px 10px 10px;font-family:Rubik,sans-serif"
                                                        align=left class=v-container-padding-padding>
                                                        <div style=line-height:140%;text-align:center;word-wrap:break-word
                                                            class=v-text-align>
                                                            <p style=font-size:14px;line-height:140%><span
                                                                    style=font-size:16px;line-height:22.4px>${
                                                                      docRef.id
                                                                    }</span>
                                                        </div>
                                            </table>
                                            <!--[if (!mso)&(!IE)]><!-->
                                        </div>
                                        <!--<![endif]-->
                                    </div>
                                </div>
                                <!--[if (mso)|(IE)]><![endif]-->
                                <!--[if (mso)|(IE)]><![endif]-->
                            </div>
                        </div>
                    </div>
                    <div style=padding:0;background-color:transparent class=u-row-container>
                        <div style="Margin:0 auto;min-width:320px;max-width:600px;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;background-color:transparent"
                            class=u-row>
                            <div
                                style=border-collapse:collapse;display:table;width:100%;height:100%;background-color:transparent>
                                <!--[if (mso)|(IE)]><table cellpadding=0 cellspacing=0 border=0 width=100%><tr><td style=padding:0;background-color:transparent align=center><table cellpadding=0 cellspacing=0 border=0 style=width:600px><tr style=background-color:transparent><![endif]-->
                                <!--[if (mso)|(IE)]><td style="background-color:#f3f8fe;width:600px;padding:20px;border-top:0 solid transparent;border-left:0 solid transparent;border-right:0 solid transparent;border-bottom:0 solid transparent;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0"align=center valign=top width=600><![endif]-->
                                <div style=max-width:320px;min-width:600px;display:table-cell;vertical-align:top
                                    class="u-col u-col-100">
                                    <div
                                        style=background-color:#f3f8fe;height:100%;width:100%!important;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0>
                                        <!--[if (!mso)&(!IE)]><!-->
                                        <div
                                            style="height:100%;padding:20px;border-top:0 solid transparent;border-left:0 solid transparent;border-right:0 solid transparent;border-bottom:0 solid transparent;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0">
                                            <!--<![endif]-->
                                            <table cellpadding=0 cellspacing=0 border=0 width=100%
                                                style=font-family:Rubik,sans-serif role=presentation>
                                                <tr>
                                                    <td style=overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:Rubik,sans-serif
                                                        align=left class=v-container-padding-padding>
                                                        <table cellpadding=0 cellspacing=0 border=0 width=15%
                                                            style="border-collapse:collapse;table-layout:fixed;border-spacing:0;mso-table-lspace:0;mso-table-rspace:0;vertical-align:top;border-top:1px solid #bbb;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%"
                                                            align=center height=0px>
                                                            <tr style=vertical-align:top>
                                                                <td
                                                                    style=word-break:break-word;border-collapse:collapse!important;vertical-align:top;font-size:0;line-height:0;mso-line-height-rule:exactly;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%>
                                                                    <span> </span>
                                                        </table>
                                            </table>
                                            <!--[if (!mso)&(!IE)]><!-->
                                        </div>
                                        <!--<![endif]-->
                                    </div>
                                </div>
                                <!--[if (mso)|(IE)]><![endif]-->
                                <!--[if (mso)|(IE)]><![endif]-->
                            </div>
                        </div>
                    </div>
                    <div style=padding:0;background-color:transparent class=u-row-container>
                        <div style="Margin:0 auto;min-width:320px;max-width:600px;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;background-color:transparent"
                            class=u-row>
                            <div
                                style=border-collapse:collapse;display:table;width:100%;height:100%;background-color:transparent>
                                <!--[if (mso)|(IE)]><table cellpadding=0 cellspacing=0 border=0 width=100%><tr><td style=padding:0;background-color:transparent align=center><table cellpadding=0 cellspacing=0 border=0 style=width:600px><tr style=background-color:transparent><![endif]-->
                                <!--[if (mso)|(IE)]><td style="background-color:#f3f8fe;width:600px;padding:0;border-top:0 solid transparent;border-left:0 solid transparent;border-right:0 solid transparent;border-bottom:0 solid transparent;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0"align=center valign=top width=600><![endif]-->
                                <div style=max-width:320px;min-width:600px;display:table-cell;vertical-align:top
                                    class="u-col u-col-100">
                                    <div
                                        style=background-color:#f3f8fe;height:100%;width:100%!important;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0>
                                        <!--[if (!mso)&(!IE)]><!-->
                                        <div
                                            style="height:100%;padding:0;border-top:0 solid transparent;border-left:0 solid transparent;border-right:0 solid transparent;border-bottom:0 solid transparent;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0">
                                            <!--<![endif]-->
                                            <table cellpadding=0 cellspacing=0 border=0 width=100%
                                                style=font-family:Rubik,sans-serif role=presentation>
                                                <tr>
                                                    <td style=overflow-wrap:break-word;word-break:break-word;padding:22px;font-family:Rubik,sans-serif
                                                        align=left class=v-container-padding-padding>
                                                        <div style=color:#3d4886;line-height:140%;text-align:center;word-wrap:break-word
                                                            class=v-text-align>
                                                            <p style=font-size:14px;line-height:140%><span
                                                                    style=font-family:Montserrat,sans-serif;font-size:14px;line-height:19.6px><span
                                                                        style=font-size:26px;line-height:36.4px><strong>Event
                                                                            Details</strong></span><br></span>
                                                        </div>
                                            </table>
                                            <!--[if (!mso)&(!IE)]><!-->
                                        </div>
                                        <!--<![endif]-->
                                    </div>
                                </div>
                                <!--[if (mso)|(IE)]><![endif]-->
                                <!--[if (mso)|(IE)]><![endif]-->
                            </div>
                        </div>
                    </div>
                    <div style=padding:0;background-color:transparent class=u-row-container>
                        <div style="Margin:0 auto;min-width:320px;max-width:600px;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;background-color:transparent"
                            class=u-row>
                            <div
                                style=border-collapse:collapse;display:table;width:100%;height:100%;background-color:transparent>
                                <!--[if (mso)|(IE)]><table cellpadding=0 cellspacing=0 border=0 width=100%><tr><td style=padding:0;background-color:transparent align=center><table cellpadding=0 cellspacing=0 border=0 style=width:600px><tr style=background-color:transparent><![endif]-->
                                <!--[if (mso)|(IE)]><td style="background-color:#f3f8fe;width:264px;padding:0;border-top:0 solid transparent;border-left:0 solid transparent;border-right:0 solid transparent;border-bottom:0 solid transparent;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0"align=center valign=top width=264><![endif]-->
                                <div style=max-width:320px;min-width:264px;display:table-cell;vertical-align:top
                                    class="u-col u-col-44">
                                    <div
                                        style=background-color:#f3f8fe;height:100%;width:100%!important;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0>
                                        <!--[if (!mso)&(!IE)]><!-->
                                        <div
                                            style="height:100%;padding:0;border-top:0 solid transparent;border-left:0 solid transparent;border-right:0 solid transparent;border-bottom:0 solid transparent;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0">
                                            <!--<![endif]-->
                                            <table cellpadding=0 cellspacing=0 border=0 width=100%
                                                style=font-family:Rubik,sans-serif role=presentation>
                                                <tr>
                                                    <td style=overflow-wrap:break-word;word-break:break-word;padding:30px;font-family:Rubik,sans-serif
                                                        align=left class=v-container-padding-padding>
                                                        <table cellpadding=0 cellspacing=0 border=0 width=100%>
                                                            <tr>
                                                                <td style=padding-right:0;padding-left:0 align=center
                                                                    class=v-text-align><img alt=""
                                                                        src="https://firebasestorage.googleapis.com/v0/b/pandaal-a71fd.appspot.com/o/banners%2F_Contests_vertical_qqEXTKErqiEynY9cTwuw.png?alt=media&token=ef3aa3aa-748c-42cf-8078-5fd1b6f69609"
                                                                        style=outline:0;text-decoration:none;-ms-interpolation-mode:bicubic;clear:both;display:inline-block!important;border:none;height:auto;float:none;width:100%;max-width:204px
                                                                        width=204 align=center border=0
                                                                        class="v-src-max-width v-src-width">
                                                        </table>
                                            </table>
                                            <!--[if (!mso)&(!IE)]><!-->
                                        </div>
                                        <!--<![endif]-->
                                    </div>
                                </div>
                                <!--[if (mso)|(IE)]><![endif]-->
                                <!--[if (mso)|(IE)]><td style="background-color:#f3f8fe;width:336px;padding:0;border-top:0 solid transparent;border-left:0 solid transparent;border-right:0 solid transparent;border-bottom:0 solid transparent;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0"align=center valign=top width=336><![endif]-->
                                <div style=max-width:320px;min-width:336px;display:table-cell;height:100%;vertical-align:top
                                    class="u-col u-col-56">
                                    <div
                                        style=background-color:#f3f8fe;height:100%;width:100%!important;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0>
                                        <!--[if (!mso)&(!IE)]><!-->
                                        <div
                                            style="height:100%;padding:0;border-top:0 solid transparent;border-left:0 solid transparent;border-right:0 solid transparent;border-bottom:0 solid transparent;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0">
                                            <!--<![endif]-->
                                            <table cellpadding=0 cellspacing=0 border=0 width=100%
                                                style=font-family:Rubik,sans-serif role=presentation
                                                id=u_content_text_18>
                                                <tr>
                                                    <td style="overflow-wrap:break-word;word-break:break-word;padding:30px 30px 0 0;font-family:Rubik,sans-serif"
                                                        align=left class=v-container-padding-padding>
                                                        <div style=line-height:140%;text-align:left;word-wrap:break-word
                                                            class=v-text-align>
                                                            <p style=font-size:14px;line-height:140%><span
                                                                    style=font-family:Montserrat,sans-serif;font-size:14px;line-height:19.6px>Event
                                                                    Name:</span>
                                                        </div>
                                            </table>
                                            <table cellpadding=0 cellspacing=0 border=0 width=100%
                                                style=font-family:Rubik,sans-serif role=presentation
                                                id=u_content_text_19>
                                                <tr>
                                                    <td style="overflow-wrap:break-word;word-break:break-word;padding:0 30px 0 0;font-family:Rubik,sans-serif"
                                                        align=left class=v-container-padding-padding>
                                                        <div style=line-height:140%;text-align:left;word-wrap:break-word
                                                            class=v-text-align>
                                                            <p style=font-size:14px;line-height:140%><span
                                                                    style=font-size:16px;line-height:22.4px;color:#3d4886><strong><span
                                                                            style=font-family:Montserrat,sans-serif;line-height:22.4px;font-size:16px>${
                                                                              event.Title
                                                                            }
                                                                            Contest</span></strong></span>
                                                        </div>
                                            </table>
                                            <table cellpadding=0 cellspacing=0 border=0 width=100%
                                                style=font-family:Rubik,sans-serif role=presentation
                                                id=u_content_text_22>
                                                <tr>
                                                    <td style="overflow-wrap:break-word;word-break:break-word;padding:0 30px 0 0;font-family:Rubik,sans-serif"
                                                        align=left class=v-container-padding-padding>
                                                        <div style=line-height:140%;text-align:left;word-wrap:break-word
                                                            class=v-text-align>
                                                            <p style=font-size:14px;line-height:140%><span
                                                                    style=color:#3d4886;font-size:14px;line-height:19.6px>by
                                                                    ${
                                                                      event.organisationName
                                                                    }</span>
                                                        </div>
                                            </table>
                                            <table cellpadding=0 cellspacing=0 border=0 width=100%
                                                style=font-family:Rubik,sans-serif role=presentation
                                                id=u_content_text_24>
                                                <tr>
                                                    <td style="overflow-wrap:break-word;word-break:break-word;padding:11px 30px 0 0;font-family:Rubik,sans-serif"
                                                        align=left class=v-container-padding-padding>
                                                        <div style=line-height:140%;text-align:left;word-wrap:break-word
                                                            class=v-text-align>
                                                            <p style=font-size:14px;line-height:140%><span
                                                                    style=font-family:Montserrat,sans-serif;font-size:14px;line-height:19.6px>Start
                                                                    Time:<br></span>
                                                        </div>
                                            </table>
                                            <table cellpadding=0 cellspacing=0 border=0 width=100%
                                                style=font-family:Rubik,sans-serif role=presentation
                                                id=u_content_text_26>
                                                <tr>
                                                    <td style="overflow-wrap:break-word;word-break:break-word;padding:0 30px 0 0;font-family:Rubik,sans-serif"
                                                        align=left class=v-container-padding-padding>
                                                        <div style=line-height:140%;text-align:left;word-wrap:break-word
                                                            class=v-text-align>
                                                            <p style=font-size:14px;line-height:140%><span
                                                                    style=color:#3d4886;font-size:14px;line-height:19.6px><strong>${
                                                                      event.startDate
                                                                        ? getLongDate(
                                                                            event.startDate
                                                                          )
                                                                        : ""
                                                                    }  ${
              event.startTime ? event.startTime : ""
            }  ${event.endDate || (event.endTime && "TO")}  ${
              event.endDate ? getLongDate(event.endDate) : ""
            } ${event.endTime ? event.endTime : ""}
                                                                  </strong></span><strong><span
                                                                        style=color:#3d4886;font-size:14px;line-height:19.6px><br></span></strong>
                                                        </div>
                                            </table>
                                            <table cellpadding=0 cellspacing=0 border=0 width=100%
                                                style=font-family:Rubik,sans-serif role=presentation
                                                id=u_content_text_21>
                                                <tr>
                                                    <td style="overflow-wrap:break-word;word-break:break-word;padding:0 30px 0 0;font-family:Rubik,sans-serif"
                                                        align=left class=v-container-padding-padding>
                                                        <div style=line-height:140%;text-align:left;word-wrap:break-word
                                                            class=v-text-align>
                                                            <p style=font-size:14px;line-height:140%><span
                                                                    style=color:#3d4886;font-size:14px;line-height:19.6px><strong>Pandaal</strong></span>
                                                        </div>
                                            </table>
                                            <table cellpadding=0 cellspacing=0 border=0 width=100%
                                                style=font-family:Rubik,sans-serif role=presentation>
                                                <tr>
                                                    <td style="overflow-wrap:break-word;word-break:break-word;padding:18px 18px 40px;font-family:Rubik,sans-serif"
                                                        align=left class=v-container-padding-padding>
                                                        <div class=v-text-align align=center>
                                                            <!--[if mso]><table cellpadding=0 cellspacing=0 border=0 width=100% style=border-spacing:0;border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;font-family:Rubik,sans-serif><tr><td style=font-family:Rubik,sans-serif align=center class=v-text-align><v:roundrect xmlns:v=urn:schemas-microsoft-com:vml xmlns:w=urn:schemas-microsoft-com:office:word href=www.pandaal.in style=height:43px;v-text-anchor:middle;width:108px arcsize=9.5% stroke=f fillcolor=#3d4886><w:anchorlock><center style=color:#fff;font-family:Rubik,sans-serif><![endif]-->
                                                            <a href=https://links.pandaal.in/qqEXTKErqiEynY9cTwuw
                                                                target=_blank class=v-size-width
                                                                style=box-sizing:border-box;display:inline-block;font-family:Rubik,sans-serif;text-decoration:none;-webkit-text-size-adjust:none;text-align:center;color:#fff;background-color:#3d4886;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;width:auto;max-width:100%;overflow-wrap:break-word;word-break:break-word;word-wrap:break-word;mso-border-alt:none><span
                                                                    style=display:block;padding:13px;line-height:120%>
                                                                    <p style=font-size:14px;line-height:120%>
                                                                        <strong><span
                                                                                style=font-family:Montserrat,sans-serif;font-size:14px;line-height:16.8px>View
                                                                                Event</span></strong>
                                                                </span></a>
                                                            <!--[if mso]><![endif]-->
                                                        </div>
                                            </table>
                                            <!--[if (!mso)&(!IE)]><!-->
                                        </div>
                                        <!--<![endif]-->
                                    </div>
                                </div>
                                <!--[if (mso)|(IE)]><![endif]-->
                                <!--[if (mso)|(IE)]><![endif]-->
                            </div>
                        </div>
                    </div>
                    <div style=padding:0;background-color:transparent class=u-row-container>
                        <div style="Margin:0 auto;min-width:320px;max-width:600px;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;background-color:transparent"
                            class=u-row>
                            <div
                                style=border-collapse:collapse;display:table;width:100%;height:100%;background-color:transparent>
                                <!--[if (mso)|(IE)]><table cellpadding=0 cellspacing=0 border=0 width=100%><tr><td style=padding:0;background-color:transparent align=center><table cellpadding=0 cellspacing=0 border=0 style=width:600px><tr style=background-color:transparent><![endif]-->
                                <!--[if (mso)|(IE)]><td style="background-color:#fff;width:600px;padding:0;border-top:0 solid transparent;border-left:0 solid transparent;border-right:0 solid transparent;border-bottom:0 solid transparent;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0"align=center valign=top width=600><![endif]-->
                                <div style=max-width:320px;min-width:600px;display:table-cell;vertical-align:top
                                    class="u-col u-col-100">
                                    <div
                                        style=background-color:#fff;height:100%;width:100%!important;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0>
                                        <!--[if (!mso)&(!IE)]><!-->
                                        <div
                                            style="height:100%;padding:0;border-top:0 solid transparent;border-left:0 solid transparent;border-right:0 solid transparent;border-bottom:0 solid transparent;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0">
                                            <!--<![endif]-->
                                            <table cellpadding=0 cellspacing=0 border=0 width=100%
                                                style=font-family:Rubik,sans-serif role=presentation>
                                                <tr>
                                                    <td style="overflow-wrap:break-word;word-break:break-word;padding:25px 10px 5px;font-family:Rubik,sans-serif"
                                                        align=left class=v-container-padding-padding>
                                                        <h1 class="v-text-align v-font-size"
                                                            style=margin:0;line-height:140%;text-align:center;word-wrap:break-word;font-weight:400;font-family:Rubik,sans-serif;font-size:18px>
                                                            <div><strong>Need Help?</strong></div>
                                                        </h1>
                                            </table>
                                            <table cellpadding=0 cellspacing=0 border=0 width=100%
                                                style=font-family:Rubik,sans-serif role=presentation
                                                id=u_content_text_10>
                                                <tr>
                                                    <td style="overflow-wrap:break-word;word-break:break-word;padding:0 70px 10px;font-family:Rubik,sans-serif"
                                                        align=left class=v-container-padding-padding>
                                                        <div style=line-height:140%;text-align:center;word-wrap:break-word
                                                            class=v-text-align>
                                                            <p style=font-size:14px;line-height:140%>You can contact us
                                                                by replying to this mail or visit our Contact page.
                                                        </div>
                                            </table>
                                            <table cellpadding=0 cellspacing=0 border=0 width=100%
                                                style=font-family:Rubik,sans-serif role=presentation
                                                id=u_content_button_1>
                                                <tr>
                                                    <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 30px;font-family:Rubik,sans-serif"
                                                        align=left class=v-container-padding-padding>
                                                        <div class=v-text-align align=center>
                                                            <!--[if mso]><table cellpadding=0 cellspacing=0 border=0 width=100% style=border-spacing:0;border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;font-family:Rubik,sans-serif><tr><td style=font-family:Rubik,sans-serif align=center class=v-text-align><v:roundrect xmlns:v=urn:schemas-microsoft-com:vml xmlns:w=urn:schemas-microsoft-com:office:word href=https://pandaal.in/us.html style=height:37px;v-text-anchor:middle;width:174px arcsize=11% stroke=f fillcolor=#3d4886><w:anchorlock><center style=color:#fff;font-family:Rubik,sans-serif><![endif]-->
                                                            <a href=https://pandaal.in/us.html target=_blank
                                                                class=v-size-width
                                                                style=box-sizing:border-box;display:inline-block;font-family:Rubik,sans-serif;text-decoration:none;-webkit-text-size-adjust:none;text-align:center;color:#fff;background-color:#3d4886;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;width:30%;max-width:100%;overflow-wrap:break-word;word-break:break-word;word-wrap:break-word;mso-border-alt:none><span
                                                                    style="display:block;padding:10px 20px;line-height:120%"><span
                                                                        style=font-size:14px;line-height:16.8px>Contact
                                                                        Us</span></span> </a>
                                                            <!--[if mso]><![endif]-->
                                                        </div>
                                            </table>
                                            <!--[if (!mso)&(!IE)]><!-->
                                        </div>
                                        <!--<![endif]-->
                                    </div>
                                </div>
                                <!--[if (mso)|(IE)]><![endif]-->
                                <!--[if (mso)|(IE)]><![endif]-->
                            </div>
                        </div>
                    </div>
                    <div style=padding:0;background-color:#585e93 class=u-row-container>
                        <div style="Margin:0 auto;min-width:320px;max-width:600px;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;background-color:transparent"
                            class=u-row>
                            <div
                                style=border-collapse:collapse;display:table;width:100%;height:100%;background-color:transparent>
                                <!--[if (mso)|(IE)]><table cellpadding=0 cellspacing=0 border=0 width=100%><tr><td style=padding:0;background-color:#585e93 align=center><table cellpadding=0 cellspacing=0 border=0 style=width:600px><tr style=background-color:transparent><![endif]-->
                                <!--[if (mso)|(IE)]><td style="background-color:#585e93;width:600px;padding:0;border-top:0 solid transparent;border-left:0 solid transparent;border-right:0 solid transparent;border-bottom:0 solid transparent;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0"align=center valign=top width=600><![endif]-->
                                <div style=max-width:320px;min-width:600px;display:table-cell;vertical-align:top
                                    class="u-col u-col-100">
                                    <div
                                        style=background-color:#585e93;height:100%;width:100%!important;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0>
                                        <!--[if (!mso)&(!IE)]><!-->
                                        <div
                                            style="height:100%;padding:0;border-top:0 solid transparent;border-left:0 solid transparent;border-right:0 solid transparent;border-bottom:0 solid transparent;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0">
                                            <!--<![endif]-->
                                            <table cellpadding=0 cellspacing=0 border=0 width=100%
                                                style=font-family:Rubik,sans-serif role=presentation>
                                                <tr>
                                                    <td style="overflow-wrap:break-word;word-break:break-word;padding:30px 10px;font-family:Rubik,sans-serif"
                                                        align=left class=v-container-padding-padding>
                                                        <div align=center>
                                                            <div style=display:table;max-width:191px>
                                                                <!--[if (mso)|(IE)]><table cellpadding=0 cellspacing=0 border=0 width=191><tr><td style=border-collapse:collapse align=center><table cellpadding=0 cellspacing=0 border=0 width=100% style=border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;width:191px><tr><![endif]-->
                                                                <!--[if (mso)|(IE)]><td style=width:32px;padding-right:16px width=32 valign=top><![endif]-->
                                                                <table cellpadding=0 cellspacing=0 border=0 width=32
                                                                    style=width:32px!important;height:32px!important;display:inline-block;border-collapse:collapse;table-layout:fixed;border-spacing:0;mso-table-lspace:0;mso-table-rspace:0;vertical-align:top;margin-right:16px
                                                                    align=left height=32>
                                                                    <tr style=vertical-align:top>
                                                                        <td style=word-break:break-word;border-collapse:collapse!important;vertical-align:top
                                                                            align=left valign=middle><a
                                                                                href=https://facebook.com/pandaalapp
                                                                                target=_blank title=Facebook><img
                                                                                    alt=Facebook
                                                                                    src="https://cdn.tools.unlayer.com/social/icons/rounded/facebook.png"
                                                                                    style=outline:0;text-decoration:none;-ms-interpolation-mode:bicubic;clear:both;display:block!important;border:none;height:auto;float:none;max-width:32px!important
                                                                                    width=32 title=Facebook></a>
                                                                </table>
                                                                <!--[if (mso)|(IE)]><![endif]-->
                                                                <!--[if (mso)|(IE)]><td style=width:32px;padding-right:16px width=32 valign=top><![endif]-->
                                                                <table cellpadding=0 cellspacing=0 border=0 width=32
                                                                    style=width:32px!important;height:32px!important;display:inline-block;border-collapse:collapse;table-layout:fixed;border-spacing:0;mso-table-lspace:0;mso-table-rspace:0;vertical-align:top;margin-right:16px
                                                                    align=left height=32>
                                                                    <tr style=vertical-align:top>
                                                                        <td style=word-break:break-word;border-collapse:collapse!important;vertical-align:top
                                                                            align=left valign=middle><a
                                                                                href=https://twitter.com/pandaalapp
                                                                                target=_blank title=Twitter><img
                                                                                    alt=Twitter
                                                                                    src="https://cdn.tools.unlayer.com/social/icons/rounded/twitter.png"
                                                                                    style=outline:0;text-decoration:none;-ms-interpolation-mode:bicubic;clear:both;display:block!important;border:none;height:auto;float:none;max-width:32px!important
                                                                                    width=32 title=Twitter></a>
                                                                </table>
                                                                <!--[if (mso)|(IE)]><![endif]-->
                                                                <!--[if (mso)|(IE)]><td style=width:32px;padding-right:16px width=32 valign=top><![endif]-->
                                                                <table cellpadding=0 cellspacing=0 border=0 width=32
                                                                    style=width:32px!important;height:32px!important;display:inline-block;border-collapse:collapse;table-layout:fixed;border-spacing:0;mso-table-lspace:0;mso-table-rspace:0;vertical-align:top;margin-right:16px
                                                                    align=left height=32>
                                                                    <tr style=vertical-align:top>
                                                                        <td style=word-break:break-word;border-collapse:collapse!important;vertical-align:top
                                                                            align=left valign=middle><a
                                                                                href=https://instagram.com/pandaalapp
                                                                                target=_blank title=Instagram><img
                                                                                    alt=Instagram
                                                                                    src="https://cdn.tools.unlayer.com/social/icons/rounded/instagram.png"
                                                                                    style=outline:0;text-decoration:none;-ms-interpolation-mode:bicubic;clear:both;display:block!important;border:none;height:auto;float:none;max-width:32px!important
                                                                                    width=32 title=Instagram></a>
                                                                </table>
                                                                <!--[if (mso)|(IE)]><![endif]-->
                                                                <!--[if (mso)|(IE)]><td style=width:32px;padding-right:0 width=32 valign=top><![endif]-->
                                                                <table cellpadding=0 cellspacing=0 border=0 width=32
                                                                    style=width:32px!important;height:32px!important;display:inline-block;border-collapse:collapse;table-layout:fixed;border-spacing:0;mso-table-lspace:0;mso-table-rspace:0;vertical-align:top;margin-right:0
                                                                    align=left height=32>
                                                                    <tr style=vertical-align:top>
                                                                        <td style=word-break:break-word;border-collapse:collapse!important;vertical-align:top
                                                                            align=left valign=middle><a
                                                                                href=https://linkedin.com/company/pandaal
                                                                                target=_blank title=LinkedIn><img
                                                                                    alt=LinkedIn
                                                                                    src="https://cdn.tools.unlayer.com/social/icons/rounded/linkedin.png"
                                                                                    style=outline:0;text-decoration:none;-ms-interpolation-mode:bicubic;clear:both;display:block!important;border:none;height:auto;float:none;max-width:32px!important
                                                                                    width=32 title=LinkedIn></a>
                                                                </table>
                                                                <!--[if (mso)|(IE)]><![endif]-->
                                                                <!--[if (mso)|(IE)]><![endif]-->
                                                            </div>
                                                        </div>
                                            </table>
                                            <!--[if (!mso)&(!IE)]><!-->
                                        </div>
                                        <!--<![endif]-->
                                    </div>
                                </div>
                                <!--[if (mso)|(IE)]><![endif]-->
                                <!--[if (mso)|(IE)]><![endif]-->
                            </div>
                        </div>
                    </div>
                    <div style=padding:0;background-color:#3d4886 class=u-row-container>
                        <div style="Margin:0 auto;min-width:320px;max-width:600px;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;background-color:transparent"
                            class=u-row>
                            <div
                                style=border-collapse:collapse;display:table;width:100%;height:100%;background-color:transparent>
                                <!--[if (mso)|(IE)]><table cellpadding=0 cellspacing=0 border=0 width=100%><tr><td style=padding:0;background-color:#3d4886 align=center><table cellpadding=0 cellspacing=0 border=0 style=width:600px><tr style=background-color:transparent><![endif]-->
                                <!--[if (mso)|(IE)]><td style="background-color:#3d4886;width:600px;padding:0;border-top:0 solid transparent;border-left:0 solid transparent;border-right:0 solid transparent;border-bottom:0 solid transparent;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0"align=center valign=top width=600><![endif]-->
                                <div style=max-width:320px;min-width:600px;display:table-cell;vertical-align:top
                                    class="u-col u-col-100">
                                    <div
                                        style=background-color:#3d4886;height:100%;width:100%!important;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0>
                                        <!--[if (!mso)&(!IE)]><!-->
                                        <div
                                            style="height:100%;padding:0;border-top:0 solid transparent;border-left:0 solid transparent;border-right:0 solid transparent;border-bottom:0 solid transparent;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0">
                                            <!--<![endif]-->
                                            <table cellpadding=0 cellspacing=0 border=0 width=100%
                                                style=font-family:Rubik,sans-serif role=presentation>
                                                <tr>
                                                    <td style=overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:Rubik,sans-serif
                                                        align=left class=v-container-padding-padding>
                                                        <table cellpadding=0 cellspacing=0 border=0 width=100%>
                                                            <tr>
                                                                <td style=padding-right:0;padding-left:0 align=center
                                                                    class=v-text-align><a href=https://www.pandaal.in
                                                                        target=_blank><img alt=""
                                                                            src="https://assets.unlayer.com/projects/0/1662424920550-Blue%20White%20Geometric%20Business%20Blog%20Banner(1).png"
                                                                            style=outline:0;text-decoration:none;-ms-interpolation-mode:bicubic;clear:both;display:inline-block!important;border:none;height:auto;float:none;width:100%;max-width:580px
                                                                            width=580 align=center border=0
                                                                            class="v-src-max-width v-src-width"></a>
                                                        </table>
                                            </table>
                                            <!--[if (!mso)&(!IE)]><!-->
                                        </div>
                                        <!--<![endif]-->
                                    </div>
                                </div>
                                <!--[if (mso)|(IE)]><![endif]-->
                                <!--[if (mso)|(IE)]><![endif]-->
                            </div>
                        </div>
                    </div>
                    <!--[if (mso)|(IE)]><![endif]--><span style="opacity: 0"> {{ Date.now() }} </span>
        </table>
        <!--[if mso]><![endif]-->
        <!--[if IE]><![endif]-->`,
            text: "",
            subject: "Registration Confirmed on Pandaal<3",
          },
        });
        transaction.set(
          doc(firestore, "registrations", docRef.id),
          {
            userName: name,
            to: email,
            source: "web",
          },
          { merge: true }
        );

        // const userID = auth.currentUser.uid;

        transaction.update(doc(firestore, "Events", eventID), {
          registrationCount: increment(1),
        });

        transaction.update(doc(firestore, "Events", eventID), {
          registeredUsers: arrayUnion(auth.currentUser.uid),
        });

        console.log(`Document Written with ID: ${docRef.id}`);
        return docRef.id;
      });
      setLastID(id);
    } catch (e) {
      console.log(`Error ${e}`);
    }
  };

  const userExists = (id) => {
    const docRef = doc(firestore, "users", id);
    docRef.get().then((doc) => {
      if (doc.exists()) {
        return true;
      } else {
        return false;
      }
    });
  };

  const createUser = async (title, name, email, phoneNumber) => {
    addDoc(collection(firestore, "users"), {
      email: email,
      imgBmp: "",
      interest: [],
      likedEvents: [],
      name: name,
      phoneNumber: phoneNumber,
      registrations: {},
      gender: title,
    });
  };

  return (
    <Context.Provider
      value={{
        firestore: firestore,
        auth: auth,
        user: user,
        signingIn: signingIn,
        signInError: signInError,
        signOut: signOutUser,
        toggleLike: toggleLike,
        submitRegistration: submitRegistration,
        userExists: userExists,
        createUser: createUser,
        useRegistrationDocument: useRegistrationDocument,
        lastRegSuccessPage: lastRegSuccessPage,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export function useEventDocument(eventID) {
  const { firestore } = React.useContext(Context);
  const [event, setEvent] = React.useState(null);
  const [snapshot, loading, error] = useDocumentData(
    doc(collection(firestore, "Events"), eventID)
  );

  React.useEffect(() => {
    if (snapshot) {
      setEvent(snapshot);
    }
  }, [snapshot]);

  return event;
}

export function useRegistrationDocument(id) {
  const { firestore } = React.useContext(Context);
  const [event, setEvent] = React.useState(null);
  console.log(`Fetching Registration Item with ID: ${id}`);
  const [snapshot, loading, error] = useDocumentData(
    doc(collection(firestore, "registrations"), id)
  );

  React.useEffect(() => {
    if (snapshot) {
      setEvent(snapshot);
    }
  }, [snapshot]);

  return event;
}

const Firebase = {
  Provider: Provider,
  Context: Context,
};

export default Firebase;

// if (currentEvent != null) {
//   if (currentEvent.isActive()) {
//     if (
//       currentEvent.getRegistrationCount() <
//       currentEvent.getAvailableRegistrations()
//     ) {
//       if (currentEvent.isAcceptingRegistrations()) {
//         if (currentEvent.getRegisteredUsers().contains(userId)) {
//           resultRegistration.postValue("alreadyRegistered");
//         } else {
//           //newRegistration

//           transaction.set(registrationReference, registrationMap);

//           transaction.update(
//             currentEventRef,
//             "registeredUsers",
//             FieldValue.arrayUnion(userId)
//           );

//           transaction.update(
//             currentUserRef,
//             "registrations",
//             userRegistrations
//           );

//           transaction.update(
//             currentEventRef,
//             "registrationCount",
//             FieldValue.increment(1)
//           );
//         }
//       } else {
//         throw new FirebaseFirestoreException(
//           "event not active",
//           FirebaseFirestoreException.Code.ABORTED
//         );

//         //resultRegistration.postValue("eventNotActive");
//       }
//     } else {
//       throw new FirebaseFirestoreException(
//         "TicketsSoldOut",
//         FirebaseFirestoreException.Code.ABORTED
//       );
//     }
//   } else {
//     throw new FirebaseFirestoreException(
//       "not accepting registrations",
//       FirebaseFirestoreException.Code.ABORTED
//     );
//   }
// }
