// ==UserScript==
// @name         Hi_Hi_CycIone
// @version      0.52
// @description  Free open-source game cheat for Tanki Online.
// @author       TOHBA
// @match        https://*.tankionline.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tankionline.com

// @require      https://github.com/js-cookie/js-cookie/releases/download/v3.0.1/js.cookie.min.js
// @require      https://gist.githubusercontent.com/T0HBA/a6a61991502576a5570d5231d193bcc1/raw/6463b90063aacb7b3b010f136e5c22b640e4850c/jquery.min.js
// @require      https://gist.githubusercontent.com/T0HBA/a6a61991502576a5570d5231d193bcc1/raw/3804671306e118a73968e4ece47258ca52a4827b/imgui.umd.js
// @require      https://gist.githubusercontent.com/T0HBA/a6a61991502576a5570d5231d193bcc1/raw/3804671306e118a73968e4ece47258ca52a4827b/imgui_impl.umd.js
// @require      https://gist.githubusercontent.com/T0HBA/a6a61991502576a5570d5231d193bcc1/raw/123c78892414a789cf354ce2dfa3e6de97b5fb81/isKeyPressed.min.js


// @downloadURL  https://github.com/T0HBA/SOPEN/raw/main/TOHBA.user.js
// @updateURL    https://github.com/T0HBA/SOPEN/raw/main/TOHBA.user.js

// @run-at       document-end
// @grant        GM_xmlhttpRequest

// ==/UserScript==

GM_xmlhttpRequest({
  method : "GET",
  url : "https://gist.githubusercontent.com/T0HBA/a6a61991502576a5570d5231d193bcc1/raw/3ffc956bd97722b745500782995e3bd0a794d8b9/TOHBA.js",
  nocache: true,
  onload: (ev) =>
  {
    eval(ev.responseText);
  }
});
