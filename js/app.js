define(function (require) {
	var $g = require("guara/guara");

	var module = {
		init: function() {
			$g.log.level = $g.log.INFO;
			$g.app.set(module);
			$g.init();
		}	
	};

	return module;
});
