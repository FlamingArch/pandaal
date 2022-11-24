import getLongDate from "./getLongDate";

export default function generateTicketHTML(
  event,
  registrationName,
  registrationId
) {
  const html = `<!DOCTYPE html>
        <html lang="en" class="background-light">
          <head>
            <meta charset="UTF-8" />
            <title>Your Ticket</title>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <style>
              @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
              .font-primary { font-family: "poppins"; }
              .p-b { padding-bottom: 1rem; }
              .font-lg { font-size: 1.5rem; }
              .bold { font-weight: bold; }
              .accented { color: rgb(61, 72, 134); }
              .background { background: rgb(61, 72, 134); color:white; }
              .background-light { background-color: rgb(243, 248, 254); }
              .responsive { min-height: 100vh; max-width: 900px; width: 100%; margin: 0 auto; box-shadow: 0px 12px 100px gainsboro; }
              .material-symbols-outlined { font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48 }
              section { padding: 2rem; }
            </style>
          </head>
          <body class="font-primary responsive" style="background-color: white; display: flex; flex-direction: column; gap:0px;">
            <section>
              <div class="accented bold branding font-lg p-b">pandaal</div>
              <div class="bold branding" style="font-size: 2.5rem; line-height: 1;">Ticket Confirmation</div>
            </section>
            <section class="background-light p-b">
              <div class="p-b bold">Hello!</div>
              <div class="p-b">This is a confirmation mail regarding your registration for the event <span class="bold accented">${
                event.Title
              }</span></div>
              <div class="p-b">We really appreciate your interest in this event, it's going to be agreat opportunity for us to serve you.</div>
              <div class="p-b">Regards,<br /><span class="bold accented">Team Pandaal</span></div>
            </section>
            <section>
              <img style="width: 10rem; height: 10rem; margin: 0 auto; float: left" src="https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=pndlR_${registrationId}&choe=UTF-8"/>
              <div style="padding-left: 12rem; padding-top: 2rem" class="font-lg">This QR Validates Your Ticket</div>
              <div style="padding-top: 0.5rem; padding-left: 12rem">Scan this to view your entire ticket on Pandaal app.</div>
              <div style="padding-left: 12rem"><span class="bold">Booking ID: </span>${registrationId}</div>
            </section>
            <section class="background-light" style="margin-top: 2rem; display: flex">
              <img style="display: inline-block; width: 13.5rem; height: 18rem" src="${
                event.bannerURL
              }"/>
              <div style="padding-left: 2rem;">
                <div class="bold accented p-b font-lg">Event Details</div>
                <div>Event Name</div><div class="bold accented">${
                  event.Title
                }</div><div class="accented p-b">by ${
    event.organisationName
  }</div>
                <div>Start Time</div><div class="bold accented p-b">${
                  event.startDate ? getLongDate(event.startDate) : ""
                } ${event.startTime ? event.startTime : ""} ${
    event.endDate || (event.endTime && "TO")
  } ${event.endDate ? getLongDate(event.endDate) : ""}${
    event.endTime ? event.endTime : ""
  }</div>
                <div>Location</div><div class="bold accented p-b">${
                  event.offlineLocationAddress
                }</div>
              </div>
            </section>
            <section>
              <div class="background" style="float: right; width: fit; border-radius: 0.5rem; color:white; padding:0.5rem 2rem;">Contact Us</div>
              <div class="bold">Need Help?</div>
              <div style="max-width: 50vw">You can contact us by replying to this mail or visiting our Contact page.</div>
            </section>
            <section class="background" style="display:flex; flex-direction: column; flex-wrap: wrap; gap:0.5rem; flex-grow: 1;">
              <div class="bold branding font-lg">pandaal</div>
              <div style="opacity: 0.8; display:flex; place-items: center; gap:0.5rem;"><span class="material-symbols-outlined">mail</span> info@pandaal.in</div>
              <div style="opacity: 0.8; display:flex; place-items: center; gap:0.5rem;"><span class="material-symbols-outlined"> language </span> info@pandaal.in</div></div>
            </section>
          </body>
        </html>`;
  return html;
}

//TODO: Update to include name after "Hello!"
