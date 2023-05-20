import { initializeApp } from "firebase/app";
// import { v4 as uuidv4 } from "uuid";


	// Your Firebase configuration
	const firebaseConfig = {
		apiKey: "AIzaSyAwIN2cWNmZlb_jZBjhHeJVS3UymQAGc4M",
		authDomain: "vehicles-marketplace.firebaseapp.com",
		projectId: "vehicles-marketplace",
		storageBucket: "vehicles-marketplace.appspot.com",
		messagingSenderId: "775154818578",
		appId: "1:775154818578:web:d182643d23d2c6c0d182cb",
		measurementId: "G-5PT2T0VZB5",
	};

	// Initialize Firebase
	export default initializeApp(firebaseConfig);

	


// collection refference
// const colRef = collection(db, "cars");

// function uploadImages() {
// 	const imageContext = require.context(
// 		"../public/images/cars",
// 		false,
// 		/\.(png|jpe?g|gif|svg)$/
// 	);
// 	const imageFiles = imageContext.keys().map((key) => key.replace("./", ""));
// 	let uniqueFilenames = [];
// 	imageFiles.forEach((filename) => {
// 		const uniqueId = uuidv4();
// 		const originalImageName = filename.split('.').shift()
// 		const extension = filename.split(".").pop();

// 		uniqueFilenames.push(`${originalImageName}_${uniqueId}.${extension}`);
// 	});
// 	console.log(uniqueFilenames)
// 	localStorage.setItem('imageId',JSON.stringify(uniqueFilenames))

// }
// uploadImages();

// Now you have an array of file names in the `imageFiles` variable
// You can use this array to upload the images to Firebase Storage

//get collection data

// getDocs(colRef).then((snapshot) => {
// 	snapshot.docs.forEach((one) => {
// 		console.log({ ...one.data(), id: one.id });
// 	});
// });

// Function to add a car document to Firestore

// const addDealer = async (car) => {
// 	try {
// 		const docRef = await addDoc(colRef, car);
// 		console.log("Document written with ID: ", docRef.id);
// 	} catch (error) {
// 		console.error("Error adding document: ", error);
// 	}
// };
// // // Fetch the JSON file
// fetch("http://localhost:3000/cars")
// 	.then((response) => response.json())
// 	.then((dealersData) => {
// 		dealersData.forEach((dealer) => {
// 			addDealer(dealer);
// 		});
// 	})
// 	.catch((error) => {
// 		console.error("Error fetching dealer data:", error);
// 	});
