module.exports = {
	css: {
		loaderOptions: {
			sass: {
				additionalData: `
        @import "@/assets/scss/_shared.scss";
        @import "@/assets/scss/_utility-classes.scss";
        
        `,
			},
		},
	},
};
