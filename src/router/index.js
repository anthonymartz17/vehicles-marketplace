import Vue from "vue";
import VueRouter from "vue-router";

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
export default router;
