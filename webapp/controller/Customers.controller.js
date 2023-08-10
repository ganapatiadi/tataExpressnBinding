sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("expressionbinding.controller.Customers", {
            onInit: function () {

            },
            onGetPrty : function(slsAmt)
            {
                var prty ;
                if (slsAmt < 300000)
                {
                    prty = "Low";
                }
                else if (slsAmt == 300000)
                {
                  prty = "Medium"
                }
                else if (slsAmt > 300000)
                {
                  prty = "High"
                }
                return prty;
            }
        });
    });
