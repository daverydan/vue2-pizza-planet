import Firebase from 'firebase'

// Initialize Firebase
var config = {
	apiKey: "AIzaSyDdjRP07zibJY1PLA6K_fuEmEZKDhjx9JM",
	authDomain: "pizza-planet-623a3.firebaseapp.com",
	databaseURL: "https://pizza-planet-623a3.firebaseio.com",
	projectId: "pizza-planet-623a3",
	storageBucket: "",
	messagingSenderId: "175844450275"
};

const firebaseApp = Firebase.initializeApp(config);
const db = firebaseApp.database();
export const dbMenuRef = db.ref('menu');