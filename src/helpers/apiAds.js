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
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
// Create a reference to the storage service
const storage = getStorage();

//initialize service
const db = getFirestore();

export default {
	async getAds(dealerId) {
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
	async createAd(data) {
		try {
			const colRef = collection(db, "cars");
			const response = await addDoc(colRef, data);

			return response;

			// return profile
		} catch (error) {
			throw error;
		}
	},

	async uploadImages({ imgFiles, dealerId }) {
		try {
			// const urlsUploaded = await Promise.all(
			//uploads each image to firebase storage and returns array with url from each one
			const uploadPromises = imgFiles.map(async (file) => {
				//creates unique name id for image
				const imageName = uuidv4();

				//creates refference unique for image
				const storageRef = ref(
					storage,
					`images/cars/${imageName}_${dealerId}_${file.name}`
				);
				console.log(storageRef, "el ref storage");
				//uploads image to firebase
				const snapshot = await uploadBytes(storageRef, file);
				console.log(snapshot, "el snap");

				const downloadURL = await getDownloadURL(snapshot.ref);
				console.log(downloadURL);
				return downloadURL;
			});
			const urlsUploaded = await Promise.all(uploadPromises);
			console.log(urlsUploaded, "api urls");
			return urlsUploaded;
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
