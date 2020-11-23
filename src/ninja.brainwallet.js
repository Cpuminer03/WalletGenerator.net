module.exports = (async function () {
  const translator = await import("./ninja.translator.js");
  const privateKey = await import("./ninja.privatekey.js");
  const qrCode = await import("./ninja.qrcode");
  const bitcoin = await import("bitgo-utxo-lib");
  const bigi = (await import("bigi")).default;

  const open = function () {
    document.getElementById("brainarea").style.display = "block";
    document.getElementById("brainpassphrase").focus();
    document.getElementById("brainwarning").textContent = translator.get("brainalertpassphrasewarning");
  };

  const close = function () {
    document.getElementById("brainarea").style.display = "none";
  };

  let publicMode = 0;
  const minPassphraseLength = 15;

  const view = function () {
    document.getElementById("brainerror").textContent = "";

    const key = document
      .getElementById("brainpassphrase")
      .value.toString()
      .replace(/^\s+|\s+$/g, ""); // trim white space
    document.getElementById("brainpassphrase").value = key;
    const keyConfirm = document
      .getElementById("brainpassphraseconfirm")
      .value.toString()
      .replace(/^\s+|\s+$/g, ""); // trim white space
    document.getElementById("brainpassphraseconfirm").value = keyConfirm;

    if (key === keyConfirm || document.getElementById("brainpassphraseshow").checked) {
      // enforce a minimum passphrase length
      if (key.length >= minPassphraseLength) {
        const bytes = bitcoin.crypto.sha256(key);
        const btcKey = privateKey.create(bigi.fromBuffer(bytes), null);
        const bitcoinAddress = privateKey.getAddressWith(btcKey, publicMode);
        const privWif = privateKey.getWIFForAddress(btcKey, publicMode);
        document.getElementById("brainbtcaddress").textContent = bitcoinAddress;
        document.getElementById("brainbtcprivwif").textContent = privWif;
        qrCode.showQrCode({
          brainqrcodepublic: bitcoinAddress,
          brainqrcodeprivate: privWif,
        });
        document.getElementById("brainkeyarea").style.visibility = "visible";
      } else {
        document.getElementById("brainerror").textContent = translator.get("brainalertpassphrasetooshort");
        clear();
      }
    } else {
      document.getElementById("brainerror").textContent = translator.get("brainalertpassphrasedoesnotmatch");
      clear();
    }
  };

  const clear = function () {
    document.getElementById("brainkeyarea").style.visibility = "hidden";
  };

  const showToggle = function (element) {
    if (element.checked) {
      document.getElementById("brainpassphrase").setAttribute("type", "text");
      document.getElementById("brainpassphraseconfirm").style.visibility = "hidden";
      document.getElementById("brainlabelconfirm").style.visibility = "hidden";
    } else {
      document.getElementById("brainpassphrase").setAttribute("type", "password");
      document.getElementById("brainpassphraseconfirm").style.visibility = "visible";
      document.getElementById("brainlabelconfirm").style.visibility = "visible";
    }
  };

  const result = {
    open,
    close,
    view,
    clear,
    showToggle,
  };

  Object.defineProperty(result, "publicMode", {
    enumerable: true,
    get: () => publicMode,
    set: (pm) => {
      publicMode = pm;
    },
  });

  return result;
})();
module.exports.__esModule = true;
