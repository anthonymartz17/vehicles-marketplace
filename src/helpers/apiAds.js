import {
	getFirestore,
	collection,
	doc,
	getDoc,
	getDocs,
	addDoc,
	query,
	where,
} from "firebase/firestore";

//initialize service
const db = getFirestore();

export default {
	async getAds(dealerId = "jRYOADMZlECdVyuGuSbg") {
		try {
			const colRef = collection(db, "cars");
			const q = query(colRef, where("dealerId", "==", dealerId));
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
	async getVehicleById(vehicleId) {
		console.log(vehicleId, "el id");
		try {
			const carDocRef = doc(db, "cars", vehicleId);

			const carDocSnapshot = await getDoc(carDocRef);

			if (carDocSnapshot.exists()) {
				return {
					id: carDocSnapshot.id,
					...carDocSnapshot.data(),
				};
			} else {
				throw new Error("Vehicle not found.");
			}
		} catch (error) {
			throw error;
		}
	},

	async getDealers() {
		try {
			let dealersData = [];
			const colRef = collection(db, "dealers");
			const snapshot = await getDocs(colRef);
			snapshot.docs.forEach((doc) => {
				dealersData.push({
					id: doc.id,
					...doc.data(),
				});
			});
			return dealersData;
		} catch (error) {
			throw error;
		}
	},
	async getDealerById(dealerId) {
		console.log(dealerId, "el dealer");
		try {
			const dealerDocRef = doc(db, "dealers", dealerId);
			const dealerDocSnapshot = await getDoc(dealerDocRef);

			if (dealerDocSnapshot.exists()) {
				return {
					id: dealerDocSnapshot.id,
					...dealerDocSnapshot.data(),
				};
			} else {
				throw new Error("Dealer not found.");
			}
		} catch (error) {
			throw error;
		}
	},
};
// collection refference
