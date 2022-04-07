module.exports = {
	chainWebpack: (config) => {
		config.plugin("html").tap((args) => {
			args[0].title = "你想变成的名字";
			return args;
		});
	},
	pwa: {
		iconPaths: {
			favicon32: 'favicon.ico',
			favicon16: 'favicon.ico',
			appleTouchIcon: 'favicon.ico',
			maskIcon: 'favicon.ico',
			msTileImage: 'favicon.ico'
		}
	},
	
};
