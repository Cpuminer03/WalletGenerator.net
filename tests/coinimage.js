/* global describe, it */
const assert = require("assert");
const fs = require("fs");
require("./fakedocument");

describe("coin image", function () {
  const janin = require("../src/janin.currency").default;
  const currencies = janin.currencies;
  for (let i of currencies) {
    const name = i.name.toLowerCase();
    it(`${name} has a valid logo`, function () {
      fs.statSync(`logos/${name}.png`);
    });
    it(`${name} has a valid wallet background`, function () {
      fs.statSync(`wallets/${name}.png`);
    });
  }
});
