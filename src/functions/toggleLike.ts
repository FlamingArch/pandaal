import {
  doc,
  increment,
  arrayUnion,
  runTransaction,
  arrayRemove,
} from "firebase/firestore";

export default async function toggleFavourite(
  firestore: any,
  id: string,
  userId: string
) {
  if (!userId) {
    return { count: null, error: `Error Toggling Like: Not Signed In` };
  }
  const ref = doc(firestore, "Events", id);
  try {
    await runTransaction(firestore, async (transaction) => {
      const doc = await transaction.get(ref);
      if (!doc.exists()) throw "Event does not exist!";
      const data = doc.data();

      if (data.likedBy.includes(userId)) {
        transaction.update(ref, {
          likeCount: increment(-1),
          likedBy: arrayRemove(userId),
        });
      } else {
        transaction.update(ref, {
          likeCount: increment(1),
          likedBy: arrayUnion(userId),
        });
      }
      return { count: data.likeCount, error: null };
    });
  } catch (e) {
    return { count: null, error: `Error Toggling Like: ${e}` };
  }
}
