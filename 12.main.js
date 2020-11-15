(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./src/coins/coin.js":
/*!***************************!*\
  !*** ./src/coins/coin.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = async function () {\n  const translator = await __webpack_require__.e(/*! import() */ 9).then(__webpack_require__.t.bind(null, /*! ../ninja.translator.js */ \"./src/ninja.translator.js\", 7));\n  const coindex = await __webpack_require__.e(/*! import() */ 34).then(__webpack_require__.t.bind(null, /*! ../autogen/coindex */ \"./src/autogen/coindex.js\", 7)).catch(() => null);\n  return class Coin {\n    constructor(name, donate) {\n      this.name = name;\n      this.donate = donate;\n      this.defaultMode = 0;\n    }\n\n    templateArtisticHtml(i, mode) {\n      const keyelement = \"btcprivwif\";\n      const coinImgUrl = this.getCoinImageUrl();\n      const walletBackgroundUrl = this.getWalletBackgroundUrl();\n      const walletHtml = `\n      <div class='coinIcoin'>\n        <img id='coinImg' src='${coinImgUrl}' alt='currency_logo' />\n      </div>\n      <div class='artwallet' id='artwallet${i}'>\n        <img id='papersvg${i}' class='papersvg' src='${walletBackgroundUrl}' />\n        <div id='qrcode_public${i}' class='qrcode_public'></div>\n        <div id='qrcode_private${i}' class='qrcode_private'></div>\n        <div class='btcaddress' id='btcaddress${i}'></div>\n        <div class='${keyelement}' id='${keyelement}${i}'></div>\n        <div class='paperWalletText'>\n          <img class='backLogo' src='${coinImgUrl}' alt='currency_logo' />\n          ${translator.get(\"paperwalletback\")}\n        </div>\n      </div>\n    `;\n      return walletHtml;\n    }\n\n    getWalletBackgroundUrl() {\n      return coindex[\"wallets/\" + this.name.toLowerCase()]();\n    }\n\n    getCoinImageUrl() {\n      return coindex[\"logos/\" + this.name.toLowerCase()]();\n    }\n\n    isVanitygenPossible(pattern, mode) {\n      return false;\n    }\n\n    testVanitygenMatch(pattern, address, mode) {\n      return address.startsWith(pattern);\n    }\n\n    isUnsure() {\n      // return filename if it's \"unsure\" implementation\n      // false if not\n      return false;\n    }\n\n    withDefaultMode(mode) {\n      const names = this.getAddressFormatNames();\n\n      if (typeof mode === \"string\" && isNaN(mode)) {\n        mode = mode.toLowerCase();\n        const modeNames = names.map(a => a.toLowerCase());\n        mode = modeNames.indexOf(mode);\n\n        if (mode === -1) {\n          mode = 0;\n        }\n      }\n\n      this.defaultMode = +mode;\n      return this;\n    }\n\n    shouldAddCoinList() {\n      return true;\n    }\n\n  };\n}();\n\nmodule.exports.__esModule = true;\n\n//# sourceURL=webpack:///./src/coins/coin.js?");

/***/ })

}]);