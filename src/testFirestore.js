import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export const testFirestoreConnection = async () => {
  try {
    // 1️⃣ Try writing a test document
    const docRef = await addDoc(collection(db, "testCollection"), {
      message: "Hello Firestore!",
      timestamp: new Date(),
    });
    console.log("✅ Test document written with ID:", docRef.id);

    // 2️⃣ Try reading documents
    const querySnapshot = await getDocs(collection(db, "testCollection"));
    querySnapshot.forEach((doc) => {
      console.log("📄 Document:", doc.id, "=>", doc.data());
    });

    console.log("✅ Firestore connection test completed successfully!");
  } catch (error) {
    console.error("❌ Firestore connection test failed:", error);
  }
};
