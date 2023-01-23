export default function fetchRegistrationId(userDoc: any, eventId: string) {
  if (!userDoc || !eventId) return null;
  return userDoc.registrations[eventId].registrationId;
}
