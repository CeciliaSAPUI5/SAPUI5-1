// @ts-nocheck
/* eslint-disable no-undef */
sap.ui.define([
    "ns_logaligroup/HTML5Module1/localService/mockserver",
    "sap/ui/test/opaQunit",
    "./pages/HelloPanel"
],
    /**
     * @param {typeof sap.ui.test.opaQunit} opaQunit
     */
    function (mockserver, opaQunit) {
        QUnit.module("Navigation");

        opaQunit("Should open the Hello Dialog", function (Given, When, Then) {

            //Initialize the mock server
            mockserver.init();
            
            //Arrangements
            Given.iStartMyUIComponent({
                componentConfig: {
                    name: "ns_logaligroup.HTML5Module1"
                }
            });

            //Actions
            When.onTheAppPage.iSayHelloDialogButton();

            //Assertions
            Then.onTheAppPage.iSeeTheHelloDialog();

            //Cleanup
            Then.iTeardownMyApp();
        });
    });