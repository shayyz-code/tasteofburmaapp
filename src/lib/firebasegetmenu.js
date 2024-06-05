import { getDocs, getFirestore, collection } from "firebase/firestore";
import app from "./firebase";

const firestore = getFirestore(app);

const firebaseGetMenu = async () => {
  try {
    const snapshot = await getDocs(collection(firestore, "menu"));

    const docs = [];
    snapshot.forEach((doc) => {
      docs.push({ id: doc.id, ...doc.data() });
    });

    console.log("Read data success");

    return { docs, fail: false };
  } catch (e) {
    console.error("Error read data", e);
    return { docs: [], fail: true };
  }
};

export { firebaseGetMenu };
