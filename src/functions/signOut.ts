import { Auth, signOut as firebaseSignOut } from "firebase/auth";

export default function signOut(auth: Auth) {
  return firebaseSignOut(auth);
}
