import {
	getFirestore,
	collection,
	doc,
	getDoc,
	getDocs,
	addDoc,
	updateDoc,
	query,
	where,
} from "firebase/firestore";
// import { v4 as uuidv4 } from "uuid";

//initialize service
const db = getFirestore();

export default {
	// async getProfile() {
	//   try {

	//     let data = {}
	//     const colRef = collection(db, "dealer");
	//     const snapshot = await getDocs(colRef)
	//     snapshot.docs.forEach(doc => {
	//       data.push({
	//         id: doc.id,
	//         ...doc.data()
	//       })
	//     })
	//     return data
	//   } catch (error) {
	//     throw error;
	//   }

	// },
	async getProfileById(dealerId) {
		try {
			const carDocRef = doc(db, "dealers", dealerId);

			const carDocSnapshot = await getDoc(carDocRef);

			if (carDocSnapshot.exists()) {
				return {
					id: carDocSnapshot.id,
					...carDocSnapshot.data(),
				};
			} else {
				throw new Error("Profile not found.");
			}
		} catch (error) {
			throw error;
		}
	},
	async getByAuthId(authId) {
		try {
			const colRef = collection(db, "dealers");
			const q = query(colRef, where("auth_id", "==", authId));
			const snapshot = await getDocs(q);
			const data = snapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));

			return data;
		} catch (error) {
			throw error;
		}
	},
	async createProfile(data) {
		try {
			const colRef = collection(db, "dealers");
			const response = await addDoc(colRef, data);

			return response;

			// return profile
		} catch (error) {
			throw error;
		}
	},
	async updateProfile({ dealerId, profileData }) {
		try {
			const colRef = doc(db, "dealers", dealerId);
			await updateDoc(colRef, profileData);
			//updateDoc returns undefined after successfully updating, it s intended behaviour. so i retrieve it to return it for further use.
			const updatedDocSnapshot = await getDoc(colRef);
			const updatedData = updatedDocSnapshot.data();
			return updatedData;
		} catch (error) {
			throw error;
		}
	},

	// async getDealers() {
	//   try {

	//     let dealersData = []
	//     const colRef = collection(db, "dealers");
	//     const snapshot = await getDocs(colRef)
	//     snapshot.docs.forEach(doc => {
	//       dealersData.push({
	//         id: doc.id,
	//         ...doc.data()
	//       })
	//     })
	//     return dealersData
	//   } catch (error) {
	//     throw error;
	//   }

	// },
	// async getDealerById(dealerId) {
	//   console.log(dealerId,'el dealer')
	//   try {
	//     const dealerDocRef = doc(db, "dealers", dealerId);
	//     const dealerDocSnapshot = await getDoc(dealerDocRef);

	//     if (dealerDocSnapshot.exists()) {
	//       return {
	//         id: dealerDocSnapshot.id,
	//         ...dealerDocSnapshot.data()
	//       };
	//     } else {
	//       throw new Error("Dealer not found.");
	//     }
	//   } catch (error) {
	//     throw error;
	//   }
	// }
};
// collection refference
