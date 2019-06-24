var oDialog;

function openDialog() {
	if (oDialog) {
		oDialog.open();
	} else {
		oDialog = new sap.ui.commons.Dialog({
			width: "400px",
			height: "550px",
			title: "Country Details",
			applyContentPadding: true,
			modal: true,
			content: [new sap.ui.commons.form.SimpleForm({
				content: [
					new sap.ui.core.Title({
						text: "Country Name"
					}),
					new sap.ui.commons.Label({
						text: "name"
					}),
					new sap.ui.commons.TextField({
						value: "",
						id: "nsme"
					}),
					new sap.ui.commons.Label({
						text: "continent"
					}),
					new sap.ui.commons.TextField({
						value: "",
						id: "continent"
					})
				]
			})]
		});

		oDialog.addButton(new sap.ui.commons.Button({
			text: "Ok",
			press: function () {
				var name = sap.uigetCore().byId("name").getValue();
				var continent = sap.ui.getCore().byId("continent").getValue();
				var payload = {};
				payload.name = name;
				payload.continent = continent;
				var insertData = JSON.stringify(payload);

				$.ajax({
					type: "POST",
					url: "country/country.xsjs",
					data: insertData,
					dataType: "json",
					crossDomain: true,
					success: function (data) {
						oDialog.close();
						sap.ui.getCore().byId("tinytab").getModel().refresh(true);
						sap.m.MessageToast.show("Data inserted successfully");
					},
					error: function (data) {
						var message = JSON.stringify(data);
						sap.m.MessageToast.show(message);
					}
				});
			}
		}));

		oDialog.open();
	}
}