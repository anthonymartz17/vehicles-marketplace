import { storage } from "@/firebaseConfig.js";

import { ref, getDownloadURL } from "firebase/storage";

export default {
	async getCarsImages(imagesData) {
		try {
			const carsUrl = await Promise.all(
				imagesData.map(async (one) => {
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
			throw error;
		}
	},
	async getImagesById(imagePaths) {
		try {
			const imageUrls = [];

			for (const imagePath of imagePaths) {
				const imageRef = ref(storage, imagePath);
				const imageUrl = await getDownloadURL(imageRef);
				imageUrls.push(imageUrl);
			}

			return imageUrls;
		} catch (error) {
			throw error;
		}
	},
};
