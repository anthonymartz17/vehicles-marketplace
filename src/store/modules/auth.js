import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();

export default {
	namespaced: true,
	state: {
		user: null,
		isSuccessRegistration:true,
	},
	mutations: {
		SET_USER(state, payload) {
			state.user = payload;
			console.log(payload)
		},
		SET_CONFIRMATION_MSG(state, payload) {
			state.isSuccessRegistration = payload;
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
	},
	getters: {},
};
