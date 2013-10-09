var Categories = ["Website Design & Development", "eCommerce", "Responsive Website", "Content Management System", "Print", "Mobile App", "Branding", "Searching Engine Optimisation"];

var ProjectPlannerModel = function(Categories){

	var self = this;

	this.categories = ko.observableArray(Categories);
	this.name = ko.observable("");
	this.company = ko.observable("");
	this.email = ko.observable("");
	this.phone = ko.observable("");
	this.message = ko.observable("");
	this.selectedCategories = new Array();
	this.errors = ko.observableArray([]);

	this.onSelected = function(element, index){
		
		var $elem = $(element);

		if ($elem.hasClass("active"))
		{
			var index = self.selectedCategories.indexOf(self.categories()[index]);
			if (index > -1) self.selectedCategories.splice(index, 1);

			$(element).removeClass("active");
			$(element).children("i").removeClass("icon-ok").addClass("icon-remove");
		}
		else
		{
			self.selectedCategories.push(self.categories()[index]);

			$(element).addClass("active");
			$(element).children("i").removeClass("icon-remove").addClass("icon-ok");
		}
	}

	this.onSubmited = function()
	{
		var errors = new Array();

		if (self.name().length <= 0) errors.push("Require your name");
		if (self.email().length <= 0) errors.push("Email address can't be empty");
		if (self.phone().length <= 0) errors.push("Phone can't be empty");

		self.errors(errors);

		var result = ko.toJSON(self, function(key, value) { 
			if (key == "categories") 
				return undefined;
			return value;
  	});
      
    $.post("http://s.fridaycreation.com/projectplan", result, function(returnedData) {
        console.log( returnedDate );
    })
	}
}

ko.applyBindings(new ProjectPlannerModel(Categories));
