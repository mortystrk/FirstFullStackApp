sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/odata/v2/ODataModel"
], function (Controller, ODataModel) {
	"use strict";

	return Controller.extend("testapp.ui.controller.View1", {
		onInit: function () {
			var oParams = {};
			oParams.json = true;
			oParams.useBatch = true;
			var oModel = new ODataModel("/xsodata/servicef.xsodata", oParams);
			var i = 5;
		}
	});
});