import { Auth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default async function signInGoogle(auth: Auth) {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider);
}
