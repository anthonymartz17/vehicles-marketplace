import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();

export default {
	namespaced: true,
	state: {
		user: null,
		alert:{},
	},
	mutations: {
		SET_USER(state, payload) {
			state.user = payload;
			console.log(payload);
		},
		SET_ALERT_MSG(state, payload) {
			state.alert = payload;
			console.log(state.alert,'el test')
		},
	},
	actions: {
		async signUp({ commit }, { email, password }) {
			try {
				let response = await createUserWithEmailAndPassword(
					auth,
					email,
					password
				);
				console.log(response.user);
			} catch (error) {
				throw error;
			}
		},
		async signIn({ commit }, { email, password }) {
			try {
				let response = await signInWithEmailAndPassword(
					auth,
					email,
					password
				);
				console.log(response.user);
			} catch (error) {
				throw error;
			}
		},
	},
	getters: {},
};
