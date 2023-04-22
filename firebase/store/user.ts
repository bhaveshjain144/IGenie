import { collection, doc, getDocs, limit, query, where } from "firebase/firestore";
import { firestore } from "../client";

export const getUserByID = async (id: string) => {
    const userDocument = doc(firestore, `users/${id}`)
    return new Promise(async (resolve) => {
        const userCollection = collection(firestore, 'users');
        const userQuery = query(userCollection, where('email', '==', id), limit(1));
        const userSnapshot = await getDocs(userQuery);
        if (userSnapshot.docs.length && userSnapshot.docs[0].data().email === id) {
            resolve({
                "success": true,
                "data": userSnapshot.docs[0].data(),
                "error": {}
            });
        } else {
            resolve({
                "success": false,
                "data": {},
                "error": {
                    "msg": "Email or Password doesnot match"
                }
            });
        }
    })



}