"use strict";(self["webpackChunkvehicles_marketplace"]=self["webpackChunkvehicles_marketplace"]||[]).push([[481],{9481:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"dashboard-wrapper"},[t("div",{staticClass:"dashboard-container"},[e.isDesktop?e._e():t("div",{staticClass:"menu-btn"},[t("MartzIcons",{attrs:{icon:"downArrow",size:40},nativeOn:{click:function(t){return e.toggleSideBar.apply(null,arguments)}}})],1),e.isDesktop?t("div",{staticClass:"dashboard-sidebar-desktop"},[t("DashboadSidebar")],1):t("div",[e.showSidebar?t("div",{staticClass:"overlay"}):e._e(),t("transition",{attrs:{"enter-active-class":"animate__animated animate__slideInDown animate__faster","leave-active-class":"animate__animated animate__slideOutUp animate__faster"}},[e.showSidebar?t("DashboadSidebar",{staticClass:"mobile-dashboard-sidebar",on:{fireToggleSidebar:e.toggleSideBar}}):e._e()],1)],1),t("div",{staticClass:"dashboard-routerview"},[t("h3",{staticClass:"title"},[e._v(e._s(e.title))]),t("router-view")],1)])])},i=[],r=a(629),n=a(7335),o=a(1148),d=function(){var e=this,t=e._self._c;return t("div",{staticClass:"sidebar-wrapper"},[t("div",{staticClass:"dashboard-sidebar"},[t("div",{staticClass:"button",on:{click:function(t){e.goCreateNew(),e.emitToggle()}}},[e._v(" + Create New ")]),t("div",{staticClass:"link-list"},[t("LoggedInUserLinks",{nativeOn:{click:function(t){return e.emitToggle.apply(null,arguments)}}})],1),t("div",{staticClass:"menu-btn"},[t("MartzIcons",{staticClass:"downArrow",attrs:{icon:"upArrow",size:40},nativeOn:{click:function(t){return e.emitToggle.apply(null,arguments)}}})],1)])])},l=[],c=(a(7658),{components:{LoggedInUserLinks:n.Z,MartzIcons:o.Z},methods:{...(0,r.OI)("auth",["SET_ALERT_MSG"]),emitToggle(){this.$emit("fireToggleSidebar")},goCreateNew(){const e=JSON.parse(localStorage.getItem("vehicle_id"));e?this.SET_ALERT_MSG({title:"WARNING",type:"warning",id:"exit-edit",msg:"Are you sure you want exit editing?"}):"create ad"!=this.$route.name&&this.$router.push({name:"create ad"})}}}),u=c,h=a(1001),b=(0,h.Z)(u,d,l,!1,null,"85876734",null),g=b.exports,p={components:{LoggedInUserLinks:n.Z,MartzIcons:o.Z,DashboadSidebar:g},data(){return{showSidebar:!1}},methods:{toggleSideBar(){this.showSidebar=!this.showSidebar}},computed:{...(0,r.Se)("auth",["isDesktop"]),title(){let e;switch(this.$route.name){case"dashboard":e="My Posts";break;case"profile":e="Profile";break;case"password":e="Password";break;case"create ad":e="Create Post";break}return e}}},v=p,_=(0,h.Z)(v,s,i,!1,null,"2079dcb8",null),m=_.exports}}]);
//# sourceMappingURL=481.8f278677.js.map