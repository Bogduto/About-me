import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "@/configs/firebase.config";
import { notFound } from "@/node_modules/next/navigation";

export const getDocumentByName = async (documentName: string) => {
  const q = query(collection(db, "works"), where("name", "==", documentName));

  try {
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const docData = querySnapshot.docs[0].data();
      const docId = querySnapshot.docs[0].id;

      return {
        id: docId,
        data: docData,
      };
    } else {
      console.log(
        "No documents found with the specified field value.",
        documentName
      );
      notFound();
    }
  } catch (error) {
    console.error("Error getting documents:", error);
    throw error;
  }
};

export const getDocuments = async () => {
  const querySnapshot = await getDocs(collection(db, "works"));

  const docRes = await querySnapshot.docs.map((doc: any) => ({
    id: doc.id,
    data: doc.data(),
  }));

  return docRes;
};
