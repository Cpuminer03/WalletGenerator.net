(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[69],{

/***/ "./src/ninja.onload.js":
/*!*****************************!*\
  !*** ./src/ninja.onload.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = async function () {\n  const translator = await __webpack_require__.e(/*! import() */ 9).then(__webpack_require__.t.bind(null, /*! ./ninja.translator.js */ \"./src/ninja.translator.js\", 7));\n  const janin = await __webpack_require__.e(/*! import() */ 13).then(__webpack_require__.t.bind(null, /*! ./janin.currency.js */ \"./src/janin.currency.js\", 7));\n  const {\n    getQueryString,\n    envSecurityCheck,\n    browserSecurityCheck,\n    ev\n  } = await Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(9), __webpack_require__.e(31)]).then(__webpack_require__.t.bind(null, /*! ./ninja.misc.js */ \"./src/ninja.misc.js\", 7));\n  const query = getQueryString();\n  let i, a, x; // change language\n\n  if (query[\"culture\"]) {\n    translator.translate(query[\"culture\"]);\n  } else {\n    translator.autodetectTranslation();\n  }\n\n  if (query[\"showseedpool\"] === \"true\" || query[\"showseedpool\"] === \"1\") {\n    document.getElementById(\"seedpoolarea\").style.display = \"block\";\n  } // change currency\n\n\n  const currency = (query[\"currency\"] || \"bitcoin\").toLowerCase();\n  let coinFound = false,\n      bitcoinIdx = -1;\n\n  for (i = 0; i < janin.currencies.length; i++) {\n    const curName = janin.currencies[i].name.toLowerCase();\n\n    if (curName === currency) {\n      await janin.useCurrency(i);\n      coinFound = true;\n    }\n\n    if (curName === \"bitcoin\") {\n      bitcoinIdx = i;\n    }\n  }\n\n  if (!coinFound) {\n    await janin.useCurrency(bitcoinIdx);\n  } // Reset title if no currency is choosen\n\n\n  if (!query[\"currency\"]) {\n    document.title = translator.get(\"defaultTitle\");\n    document.getElementById(\"siteTitle\").alt = translator.get(\"defaultTitle\");\n  } // populate currency dropdown list\n\n\n  const select = document.getElementById(\"currency\");\n  let options = \"\";\n\n  for (i = 0; i < janin.currencies.length; i++) {\n    const curr = janin.currencies[i];\n    options += \"<option value='\" + i + \"'\";\n    if (curr.name === janin.name()) options += \" selected='selected'\";\n    options += \">\" + curr.name + \"</option>\";\n  }\n\n  select.innerHTML = options; // populate supported currency list\n\n  const supportedcurrencies = document.getElementById(\"supportedcurrencies\");\n  let currencieslist = \"\";\n  let j = 0;\n\n  for (i = 0; i < janin.currencies.length; i++) {\n    const curr = janin.currencies[i];\n    if (!curr.shouldAddCoinList()) continue;\n    currencieslist += \"<a href='?currency=\" + curr.name;\n    if (query[\"culture\"]) currencieslist += \"&culture=\" + query[\"culture\"];\n    currencieslist += \"'>\" + curr.name + \"</a> \";\n    j++;\n  }\n\n  supportedcurrencies.innerHTML = currencieslist;\n  document.getElementById(\"supportedcurrenciescounter\").innerHTML = j.toString() + \" \"; // populate donate list\n\n  document.getElementById(\"donateqrcode\").style.display = \"none\";\n  const donatelist = document.getElementById(\"donatelist\");\n  let list = \"<table>\";\n\n  for (i = 0; i < janin.currencies.length; i++) {\n    if (!janin.currencies[i].donate) continue;\n    list += \"<tr id='currencydonatelink\" + i + \"'>\";\n    list += \"<td class='currencyNameColumn'>\" + janin.currencies[i].name + \"</td>\";\n    list += \"<td class='address'><a href='\" + janin.currencies[i].name.toLowerCase() + \":\" + janin.currencies[i].donate + \"'>\";\n    list += janin.currencies[i].donate + \"</a></td></tr>\";\n  }\n\n  list += \"</table>\";\n  donatelist.innerHTML = list;\n\n  for (i = 0; i < janin.currencies.length; i++) {\n    if (!janin.currencies[i].donate) continue;\n    ev(\"tr#currencydonatelink\" + i, \"mouseover\", async function () {\n      (await __webpack_require__.e(/*! import() */ 30).then(__webpack_require__.t.bind(null, /*! ./ninja.donatetab.js */ \"./src/ninja.donatetab.js\", 7))).displayQrCode(21, this);\n    });\n  } // Extract i18n\n\n\n  if (query[\"i18nextract\"]) {\n    const culture = query[\"i18nextract\"];\n    const div = document.createElement(\"div\");\n    div.innerHTML = \"<h3>i18n</h3>\";\n    div.setAttribute(\"style\", \"text-align: center\");\n    const elem = document.createElement(\"textarea\");\n    elem.setAttribute(\"rows\", \"30\");\n    elem.setAttribute(\"style\", \"width: 99%\");\n    elem.setAttribute(\"wrap\", \"off\");\n    a = document.getElementsByClassName(\"i18n\");\n    const obj = Object.create(null);\n    const cultureData = obj[culture] = Object.create(null);\n\n    for (x = 0; x < a.length; x++) {\n      cultureData[a[x].id] = \"(ENGLISH)\" + cleani18n(a[x].innerHTML);\n    }\n\n    for (x = 0; x < translator.staticID.length; x++) {\n      let value = \"\";\n      if (translator.translations[culture] && translator.translations[culture][translator.staticID[x]]) value += cleani18n(translator.translations[culture][translator.staticID[x]]);else value += \"(ENGLISH)\" + cleani18n(translator.translations[\"en\"][translator.staticID[x]]);\n      cultureData[translator.staticID[x]] = value;\n    }\n\n    elem.innerHTML = JSON.stringify(obj);\n    div.appendChild(elem);\n    document.body.appendChild(div);\n  }\n\n  function cleani18n(string) {\n    return string.replace(/^\\s\\s*/, \"\").replace(/\\s\\s*$/, \"\") // remove leading and trailing space\n    .replace(/\\s*\\n+\\s*/g, \"\\\\n\") // replace new line\n    .replace(/\"/g, '\\\\\"');\n  }\n\n  envSecurityCheck();\n  browserSecurityCheck();\n  (await __webpack_require__.e(/*! import() */ 20).then(__webpack_require__.t.bind(null, /*! ./ninja.singlewallet.js */ \"./src/ninja.singlewallet.js\", 7))).open();\n}();\n\nmodule.exports.__esModule = true;\n\n//# sourceURL=webpack:///./src/ninja.onload.js?");

/***/ })

}]);