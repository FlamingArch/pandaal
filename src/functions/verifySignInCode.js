export default function verifyCode(code, completion) {
  window.confirmationResult
    .confirm(code)
    .then((result) => {
      completion();
    })
    .catch((e) => console.error(`Error Verifying OTP: ${e}`));
}
