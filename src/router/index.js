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
		meta: { requiresAuth: true },
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
				component: () =>
					import("../views/dealer-views/userListings/listingsDisplay"),
			},
			{
				path: "create-ad",
				// props: (route) => ({ id: route.query.id ? route.query.id : null }),
				// preserveQueryParams: true,
				component: () =>
					import("../views/dealer-views/create-ad-post/create-ad"),
				children: [
					{
						path: "",
						name: "create ad",
						component: () =>
							import("../views/dealer-views/create-ad-post/form/step-1"),
					},
					{
						path: "step-2",
						name: "step-2",
						component: () =>
							import("../views/dealer-views/create-ad-post/form/step-2"),
					},
					{
						path: "step-3",
						name: "step-3",
						component: () =>
							import("../views/dealer-views/create-ad-post/form/step-3"),
					},
					{
						path: "step-4",
						name: "step-4",
						component: () =>
							import("../views/dealer-views/create-ad-post/form/step-4"),
					},
				],
			},
		
			{
				path: "profile",
				name: "profile",
				component: () => import("../views/dealer-views/profile-app"),
			},
			{
				path: "password-app",
				name: "password",
				component: () => import("../views/dealer-views/password-app"),
			},
		],
	},
	{
		path: "/:notFound(.*)",
		component: () => import("../views/Not-found.vue"),
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
	linkActiveClass: "active",
});

router.beforeEach((to, from, next) => {
	// Check the authentication status or any other condition
	store.dispatch("auth/autoLogIn");
	const isLoggedIn = store.getters["auth/isLoggedIn"];
	console.log(isLoggedIn);
	// const isUserActive = store.state["auth"].user.isActive;

	if (to.matched.some((record) => record.meta.requiresAuth)) {
		// Route requires authentication
		if (!isLoggedIn) {
			console.log("not loggedin");
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
