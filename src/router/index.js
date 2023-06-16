import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: () => import("../views/Home.vue"),
	},
	{
		path: "/electric",
		name: "Electric",
		component: () => import("../views/Electric.vue"),
	},
	{
		path: "/contact",
		name: "Contact",
		component: () => import("../views/Contact.vue"),
	},
	{
		path: "/advance",
		name: "Advance",
		component: () => import("../views/AdvanceSearch.vue"),
	},
	{
		path: "/cartToView",
		name: "CarToView",
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
		name: "JoinUs",
		component: () => import("../views/authentication/joinUs"),
	},
	{
		path: "/dealer-info-form",
		name: "dealer-info-form",
		component: () => import("../views/dealer-views/dealer-info-form"),
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
	linkActiveClass: "active",
});
export default router;
