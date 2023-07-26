# Vehicle Marketplace Web App

Welcome to the Vehicle Marketplace Web App! This dynamic platform empowers dealers to register and create accounts, enabling them to showcase, manage, and update their vehicle inventories. Buyers can seamlessly explore and filter a diverse range of vehicles, efficiently finding their desired cars based on various criteria.

## Technologies Used

- Vue.js: Provides a reactive and component-based approach to building the app.
- Vuex: Enables centralized state management and predictable data flow.
- Vuelidate: Simplifies form validation for a seamless user input experience.
- Vue Router: Facilitates smooth page navigation and a pleasant user journey.
- Sass: Handles the styles and responsiveness of the app for a consistent experience on different screen sizes.
- Firebase: Leverages Firebase for hosting, authentication, and database management, resulting in an intuitive interface and seamless user experience.

## Development Challenges and Solutions

During the development of the app, one of the most significant challenges I faced was updating specific vehicle listing images due to data distribution between Firebase Storage and Firebase Database. To overcome this, I ingeniously utilized UUIDs to create unique IDs for each image, concatenating them with the listing ID to ensure vehicle listing association. In Firebase Database, I maintained an array of relative path references for efficient image tracking.

To handle image updates during editing, I categorized images into recently added ones (those without a listing ID yet), existing ones, and deleted ones. This approach facilitated the removal, retention, and addition of images in Firebase Storage, ensuring a seamless experience for users updating their vehicle listings.

## Installation and Local Setup

1. Clone this repository to your local machine.
2. Install the necessary dependencies using `npm install`.
3. Run the development server with `npm run serve`.
4. Open your web browser and visit `http://localhost:8080` to access the app locally.

## Feedback and Collaboration

I'm continuously working to improve the Vehicle Marketplace Web App. Your feedback and suggestions are highly appreciated. If you have any questions, encounter any issues, or want to collaborate on enhancing the app, feel free to reach out to me via [email](mailto:antonio.fr.martinezc@hotmail.com) or any other contact method provided in the app.

Thank you for exploring the Vehicle Marketplace Web App! I hope you find it user-friendly.

---

### Further Suggestions

- Expand the filtering options for buyers to search for vehicles based on additional criteria, such as price range, mileage, and location.
- Optimize the app's performance by lazy-loading images and implementing pagination for large vehicle inventories.
- Consider integrating real-time messaging or notifications to improve communication between buyers and sellers.
- Regularly update and maintain the app to ensure it stays up-to-date with the latest technologies and security measures.
