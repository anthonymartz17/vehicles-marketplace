import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index";
Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "home",
		component: () => import("../views/Home.vue"),
	},
	// {
	// 	path: "/electric",
	// 	name: "Electric",
	// 	component: () => import("../views/Electric.vue"),
	// },
	{
		path: "/contact",
		name: "contact",
		component: () => import("../views/Contact.vue"),
	},
	{
		path: "/advance",
		name: "advance",
		component: () => import("../views/AdvanceSearch.vue"),
	},
	{
		path: "/cartToView",
		name: "carToView",
		component: () => import("../views/CarToView.vue"),
	},
	{
		path: "/searchResults",
		name: "searchResults",
		component: () => import("../views/SearchResults"),
	},
	{
		path: "/dealerInventory",
		name: "dealerInventory",
		component: () => import("../views/Dealers"),
	},
	{
		path: "/joinUs",
		name: "joinUs",
		component: () => import("../views/authentication/joinUs"),
	},
	{
		path: "/activationform",
		name: "activationForm",
		component: () => import("../views/authentication/activationform.vue"),
	},
	{
		path: "/dashboard",
		meta: { requiresAuth: true },
		component: () => import("../views/dealer-views/dashboard"),
		children: [
			{
				path: "",
				name: "dashboard",
				component: () => import("../views/dealer-views/created-ads-display"),
			},
		],
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
	linkActiveClass: "active",
});

router.beforeEach((to, _, next) => {
	// Check the authentication status or any other condition
	store.dispatch("auth/autoLogIn");
	const isLoggedIn = store.getters["auth/isLoggedIn"]; // Assuming the auth module is named 'auth'

	if (to.matched.some((record) => record.meta.requiresAuth)) {
		// Route requires authentication
		if (!isLoggedIn) {
			// User is not authenticated, redirect to login or appropriate route
			next("/joinUs");
		} else {
			// User is authenticated, proceed to the route
			next();
		}
	} else {
		// Route does not require authentication
		next();
	}
});
export default router;
