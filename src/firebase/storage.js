// src/firebase/storage.js
import { storage } from "./firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export async function uploadPdf(file, name) {
  const storageRef = ref(storage, `pdfs/${name}`);
  await uploadBytes(storageRef, file);
  return await getDownloadURL(storageRef);
}
