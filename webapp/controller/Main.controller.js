sap.ui.define(["./BaseController", "sap/m/MessageBox"], function (BaseController, MessageBox) {
	"use strict";

	return BaseController.extend("test.controller.Main", {
	    onShowName: function () {
      const oView = this.getView();
      const sNombre = oView.byId("nombre").getValue();
      const sApellido = oView.byId("apellido").getValue();

      if (sNombre && sApellido) {
        const sNombreCompleto = sNombre + " " + sApellido;
        MessageBox.success("Tu nombre completo es: " + sNombreCompleto);
      } else {
        MessageBox.error("Por favor, llena ambos campos.");
      }
    },

    onOpenLink: function () {
      const sUrl = "https://www.youtube.com"; // URL predeterminada
      window.open(sUrl, "_blank");
    }
	});
});
