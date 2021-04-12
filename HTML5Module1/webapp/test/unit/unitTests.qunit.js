// @ts-nocheck
/* eslint-disable no-undef */
/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit( function () {
    "use strict";

    sap.ui.require([
        "ns_logaligroup/HTML5Module1/test/unit/AllTests"
    ],
        function( ){
            QUnit.start();
        })
});