import { getStorage, ref, getDownloadURL } from "firebase/storage";

// Create a reference to the storage service
const storage = getStorage();

// Retrieve the image URL from Firebase Firestore or Realtime Database

export default {
	async getCarsImages(imagesData) {
		try {
			const carsUrl = await Promise.all(
				imagesData.map((one) => {
					const promisedUrls = one.pics.map((pic) => {
						const imageRef = ref(storage, pic);
						return getDownloadURL(imageRef);
					});
					return Promise.all(promisedUrls).then((urls) => {
						return { id: one.id, imagesUrl: urls };
					});
				})
			);

			return carsUrl;
		} catch (error) {
			console.error("Error fetching images:", error);
			throw error;
		}
		// try {
		// 	let carsUrl = await Promise.all(

		// 	)
		// 	imagesData.map((one) => {
		// 		const promisedUrls = one.pics.map((pic) => {
		// 			const imageRef = ref(storage, pic);
		// 			return getDownloadURL(imageRef);
		// 		});
		// 		return Promise.all(promisedUrls).then(urls => {
		// 			return {id:one.id, imagesUrl:urls}
		// 		})
		// 	});
		//   console.log(carsUrl,'arr')

		// 	return carsUrl;
		// } catch (error) {
		// 	console.error("Error fetching images:", error);
		// 	throw error;
		// }
	},
};
