import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, addDoc, collection } from "firebase/firestore";

import app from "./firebase";

const storage = getStorage(app);
const firestore = getFirestore();

const firebaseNewDish = async (name, price, picture) => {
  // upload file
  try {
    const pictureRef = ref(storage, "menupictures/");
    const metadata = {
      contentType: picture.type,
    };
    const snapshot = await uploadBytes(pictureRef, picture, metadata);
    console.log("Picture written", snapshot);

    // download url
    const pictureurl = await getDownloadURL(snapshot.ref);
    console.log("Picture url granted.");

    // upload data
    const docRef = await addDoc(collection(firestore, "menu"), {
      name,
      price,
      pictureurl,
    });
    console.log("Doc written", docRef.id);
    console.log("Success!");
    return "success";
  } catch (e) {
    console.error("Error: ", e);
    return "fail";
  }
};

export { firebaseNewDish };
