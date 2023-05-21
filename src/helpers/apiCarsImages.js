import { getStorage, ref, getDownloadURL } from "firebase/storage";

// Create a reference to the storage service
const storage = getStorage();

// Retrieve the image URL from Firebase Firestore or Realtime Database

export default {
	async getCarsImages(data) {
		try {
			const carsImages = [];

			data.forEach((one) => {
				const { id, pics } = one;
				const urlList = [];
				pics.forEach((pic) => {
					const imageRef = ref(storage, pic);
					getDownloadURL(imageRef)
						.then((url) => {
							urlList.push(url);
						})
						.catch((error) => {
							// Handle any errors that occurred during fetching the image
							console.error("Error fetching image:", error);
						});
				});
				carsImages.push({ carId: id, carImagesUrl: urlList });
			});

			return carsImages;
		} catch (error) {
			throw error;
		}
	},
};
