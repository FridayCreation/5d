var types = ["Website Design & Development", "eCommerce", "Responsive Website", "Content Management System", "Print", "Mobile App", "Branding", "Searching Engine Optimisation"];

var ProjectPlannerModel = function(pTypes){
	var self = this;
	this.types = ko.observableArray(pTypes);
	this.name = ko.observable("");
	this.company = ko.observable("");
	this.email = ko.observable("");
	this.phone = ko.observable("");
	this.message = ko.observable("");
	this.selectedTypes = [];

}

ko.bindModelView(new ProjectPlannerModel());