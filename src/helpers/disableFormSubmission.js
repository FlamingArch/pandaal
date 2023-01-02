export default function disableFormSubmission(responses) {
  if (responses.length > 0) {
    return responses.filter((response) => response.answer === "").length > 0;
  }

  return false;
}
