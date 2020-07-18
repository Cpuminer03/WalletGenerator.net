const translator = require("./ninja.translator.js");
const privateKey = require("./ninja.privatekey.js");

const open = function () {
  document.getElementById("bulkarea").style.display = "block";
  // show a default CSV list if the text area is empty
  if (document.getElementById("bulktextarea").value === "") {
    // return control of the thread to the browser to render the tab switch UI then build a default CSV list
    setTimeout(function () {
      buildCSV(3, 1);
    }, 50);
  }
};

const close = function () {
  document.getElementById("bulkarea").style.display = "none";
};

// use this function to bulk generate addresses
// rowLimit: number of Bitcoin Addresses to generate
// startIndex: add this number to the row index for output purposes
// returns:
// index,bitcoinAddress,privateKeyWif
const buildCSV = function (rowLimit, startIndex) {
  //const bulkWallet = bulkwallet;
  document.getElementById("bulktextarea").value = translator.get("bulkgeneratingaddresses") + rowLimit;
  csv = [];
  csvRowLimit = rowLimit;
  csvRowsRemaining = rowLimit;
  csvStartIndex = --startIndex;
  setTimeout(batchCSV, 0, publicMode);
};

let csv = [];
let csvRowsRemaining = null; // use to keep track of how many rows are left to process when building a large CSV array
let csvRowLimit = 0;
let csvStartIndex = 0;
let publicMode = 0;

const batchCSV = function () {
  if (csvRowsRemaining > 0) {
    csvRowsRemaining--;
    const key = privateKey.makeRandom();

    csv.push(csvRowLimit - csvRowsRemaining + csvStartIndex + ',"' + privateKey.getAddressWith(key, publicMode) + '","' + privateKey.getWIFForAddress(key, publicMode) + '"');

    document.getElementById("bulktextarea").value = translator.get("bulkgeneratingaddresses") + csvRowsRemaining;

    // release thread to browser to render UI
    setTimeout(batchCSV, 0, publicMode);
  }
  // processing is finished so put CSV in text area
  else if (csvRowsRemaining === 0) {
    document.getElementById("bulktextarea").value = csv.join("\n");
  }
};

const openCloseFaq = function (faqNum) {
  // do close
  if (document.getElementById("bulka" + faqNum).style.display === "block") {
    document.getElementById("bulka" + faqNum).style.display = "none";
    document.getElementById("bulke" + faqNum).setAttribute("class", "more");
  }
  // do open
  else {
    document.getElementById("bulka" + faqNum).style.display = "block";
    document.getElementById("bulke" + faqNum).setAttribute("class", "less");
  }
};

module.exports = {
  open,
  close,
  buildCSV,
  batchCSV,
  openCloseFaq,
};

Object.defineProperty(module.exports, "publicMode", {
  enumerable: true,
  get: () => publicMode,
  set: (pm) => {
    publicMode = pm;
  },
});
