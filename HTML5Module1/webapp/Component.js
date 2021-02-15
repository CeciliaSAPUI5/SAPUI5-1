//@ts-nocheck
sap.ui.define([
    "sap/ui/core/UIComponent",
    "ns_logaligroup/HTML5Module1/model/Models",
    "sap/ui/model/resource/ResourceModel"
],
    /**
     * @param {typeof sap.ui.core.UIComponent} UIComponent 
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     */
    function (UIComponent, Models, ResourceModel) {

        return UIComponent.extend("ns_logaligroup.HTML5Module1.Component", {

            metadata: {
                manifest: "json"
            },
            init: function () {
                //call the init function of the parent
                UIComponent.prototype.init.apply(this, arguments);

                // set data model on the view
                this.setModel(Models.createRecipient());

                // set i18n model on the view
                var i18nModel = new ResourceModel({ bundleName: "ns_logaligroup.HTML5Module1.i18n.i18n" });
                this.setModel(i18nModel, "i18n");
            }
        });
    });