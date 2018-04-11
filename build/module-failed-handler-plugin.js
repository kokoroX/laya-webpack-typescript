class FileChangeHookPlugin {
	constructor(options) {
		this.options = options || {};
	}

	apply(compiler) {
    const { options } = this;

		compiler.plugin("compilation", (compilation) => {
      compilation.plugin('before-module-ids', function(modules){
        const matchList = modules.filter(module => module.id === options.filename)

        if (matchList.length) options.callback(matchList[0]);
      });
		});
	}
}

module.exports = FileChangeHookPlugin
