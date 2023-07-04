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
	async createAd(vehicleData) {
		try {
			console.log(vehicleData, "api");
			const colRef = collection(db, "cars");

			const response = await addDoc(colRef, vehicleData);

			return response;

			// return profile
		} catch (error) {
			throw error;
		}
	},

	async uploadImages({ vehicleImages, vehicleId }) {
		try {
			// const urlsUploaded = await Promise.all(
			//uploads each image to firebase storage and returns array with url from each one
			const imgPathsPromised = vehicleImages.map(async (img) => {
				//creates unique name id for image
				const uniqueId = uuidv4();
				const imageName = `images/cars/${vehicleId}_${uniqueId}_${img.name}`;

				//creates refference unique for image
				const storageRef = ref(storage, imageName);
				//uploads image to firebase
				await uploadBytes(storageRef, img);

				return imageName;
			});
			const imgPaths = await Promise.all(imgPathsPromised);
			console.log(imgPaths,'from api')
			return imgPaths;
		} catch (error) {
			throw error;
		}
	},
	async updateAd({ vehicleData, vehicleId }) {
		try {
			const vehicleDocRef = doc(db, "cars", vehicleId);
			const vehicleDocSnapshot = await getDoc(vehicleDocRef);
			console.log(vehicleDocSnapshot);
			if (vehicleDocSnapshot.exists()) {
				await updateDoc(vehicleDocRef, vehicleData);
				return { id: vehicleDocSnapshot.id, ...vehicleDocSnapshot.data() };
			} else {
				throw new Error("Car not found.");
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
