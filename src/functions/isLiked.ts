export default function isLiked(event, userId) {
  if (event.likedBy) return event.likedBy.includes(userId);
  else return false;
}
