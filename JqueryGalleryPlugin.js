
// Plugin Functionality
	$.fn.gallery = function(options) {
		
		let setting = $.extend({ // Define Options
			borderwidth: '1px',
			margin: '20px',
			boxShadowColor: '#888888',
			height: '100px'
		}, options);
		
		// Setting css
		this.css("border", setting.borderwidth + " solid");
		this.css("maring", setting.margin);
		this.css("box-shadow", "5px 10px " + setting.boxShadowColor);
		this.css("display", "inline.grid");
		this.css("height", setting.height);
	}
	
	$.fn.galleryContainer = function(options) {
		
		let settings = $.extend({ // Define Options
			height: '100VH',
			flexDirection: 'row'
		}, options);
		
		// Setting css
		this.css("height", settings.height);
		this.css("display", "flex");
		this.css("flex-direction", settings.flexDirection);
		this.css("flex-wrap", "wrap");
		this.css("justify-content", "center");
	}



