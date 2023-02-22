export default function fetchRegistrationId(userDoc: any, eventId: string) {
  if (!userDoc || !eventId) return null;
  if (!userDoc.registrations) return null;
  return userDoc.registrations[eventId]?.registrationId ?? null;
}
