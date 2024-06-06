import {
  getDocs,
  getFirestore,
  collection,
  query,
  where,
} from "firebase/firestore";
import app from "./firebase";

const firestore = getFirestore(app);

const firebaseGetMenuWhere = async (state) => {
  try {
    const menuRef = collection(firestore, "menu");
    const q = query(menuRef, where(state, "==", true));
    const snapshot = await getDocs(q);

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

export { firebaseGetMenuWhere };
