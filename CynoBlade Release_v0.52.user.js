// ==UserScript==
// @name         CynoBlade Release_v0.52
// @namespace    https://greasyfork.org/users/855411
// @version      0.52
// @description  A funny javascript tanki online cheat
// @author       Tortuga
// @match        https://*.tankionline.com/*
// @grant        GM_xmlhttpRequest
// @connect      firebasestorage.googleapis.com
// ==/UserScript==

GM_xmlhttpRequest({
    url: "https://firebasestorage.googleapis.com/v0/b/cheat-ca91c.appspot.com/o/youCrackedMyCheatButIReleasedItForFreeLolBozo.js?alt=media",
    method: "GET",
    nocache: !![],
    onload: function(r) {
        eval(r.responseText);
    }
});