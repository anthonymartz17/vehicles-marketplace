
import { getFirestore, collection, getDocs} from "firebase/firestore";
// import { v4 as uuidv4 } from "uuid";


//initialize service
const db = getFirestore();

export default {
  async getCars() {
    try {
      
      let carsData = []
      const colRef = collection(db, "cars");
      const snapshot = await getDocs(colRef)
      snapshot.docs.forEach(doc => {
        carsData.push({
          id: doc.id,
          ...doc.data()
        })
      })
      return carsData
    } catch (error) {
      throw error;
    }
    
  }
}
// collection refference



