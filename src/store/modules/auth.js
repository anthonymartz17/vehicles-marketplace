import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import apiProfile from "../../helpers/apiProfile";

//global timer for expiration token
let timer;
export default {
	namespaced: true,
	state: {
		user: null,
		alert: {},
	},
	mutations: {
		SET_USER(state, payload) {
			state.user = payload;
		},
		SET_ALERT_MSG(state, payload) {
			state.alert = payload;
		},
		SHOULD_SHOW_NAV(link) {
			let showNav = true;
			if (
				(link == "DASHBOARD" && !this.isLoggedIn) ||
				(link == "JOIN US" && this.isLoggedIn) ||
				(link == "SIGN OUT" && !this.isLoggedIn)
			) {
				showNav = false;
			}
			return showNav;
		},
	},
	actions: {
		async signUp({ commit }, { email, password }) {
			try {
				let response = await createUserWithEmailAndPassword(
					getAuth(),
					email,
					password
				);
				return response.user;
			} catch (error) {
				throw error;
			}
		},
		async signIn({ commit, dispatch }, { email, password }) {
			try {
				let response = await signInWithEmailAndPassword(
					getAuth(),
					email,
					password
				);

				const currentUser = response._tokenResponse.email;
				const token = response._tokenResponse.idToken;
				const expiresIn = response._tokenResponse.expiresIn;
				const userProfile = await apiProfile.getByAuthId(response.user.uid);
				const isActive = userProfile[0].active;

				clearTimeout(timer);
				timer = setTimeout(() => {
					dispatch("singOutUser");
					//expects timer in miliseconds
				}, expiresIn * 1000);

				commit("SET_USER", { currentUser, token, isActive });
				localStorage.setItem(
					"currentUserDealer",
					JSON.stringify({ currentUser, token, isActive })
				);

				return response.user;
			} catch (error) {
				throw error;
			}
		},
		async autoLogIn({ commit }) {
			const currentUserDealer = JSON.parse(
				localStorage.getItem("currentUserDealer")
			);
			if (currentUserDealer)
				if (currentUserDealer.currentUser && currentUserDealer.token) {
					commit("SET_USER", currentUserDealer);
				}
		},
		async signOutUser({ commit }) {
			try {
				await signOut(getAuth());
				localStorage.removeItem("currentUserDealer");
				commit("SET_USER", null);
				clearTimeout(timer);
			} catch (error) {
				throw error;
			}
		},
	},
	getters: {
		isLoggedIn: (state) => !!(state.user && state.user.isActive),
	},
};
