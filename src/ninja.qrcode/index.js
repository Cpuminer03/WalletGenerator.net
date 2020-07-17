import QRCode from "./../qrcode.js";
import sizeMultiplier_, { calculateFinalSizeMultiplier } from "./sizemultiplier.js";
import svgRenderer from "./renderer/svg.js";
import canvasRenderer from "./renderer/canvas.js";
import tableRenderer from "./renderer/table.js";

const renderers = [svgRenderer, canvasRenderer, tableRenderer];

// determine which type number is big enough for the input text length
export const getTypeNumber = function (text) {
  const lengthCalculation = text.length * 8 + 12; // length as calculated by the QRCode
  if (lengthCalculation < 72) {
    return 1;
  } else if (lengthCalculation < 128) {
    return 2;
  } else if (lengthCalculation < 208) {
    return 3;
  } else if (lengthCalculation < 288) {
    return 4;
  } else if (lengthCalculation < 368) {
    return 5;
  } else if (lengthCalculation < 480) {
    return 6;
  } else if (lengthCalculation < 528) {
    return 7;
  } else if (lengthCalculation < 688) {
    return 8;
  } else if (lengthCalculation < 800) {
    return 9;
  } else if (lengthCalculation < 976) {
    return 10;
  }
  return null;
};

// show QRCodes with canvas OR table (IE8)
// parameter: keyValuePair
// example: { "id1": "string1", "id2": "string2"}
//		"id1" is the id of a div element where you want a QRCode inserted.
//		"string1" is the string you want encoded into the QRCode.
export const showQrCode = function (keyValuePair, sizeMultiplier) {
  for (const key in keyValuePair) {
    if ({}.hasOwnProperty.call(keyValuePair, key)) {
      const value = keyValuePair[key];
      const typeNumber = getTypeNumber(value);
      const qrcode = QRCode(typeNumber, "H");
      qrcode.addData(value);
      qrcode.make();
      const newSizeMultiplier = calculateFinalSizeMultiplier(sizeMultiplier, qrcode.getModuleCount());
      const parent = document.getElementById(key);
      parent.innerHTML = "";
      for (const { render, available } of renderers) {
        if (available) {
          parent.appendChild(render(qrcode, newSizeMultiplier));
          break;
        }
      }
    }
  }
};

export default {
  getTypeNumber,
  showQrCode,
  sizeMultiplier: sizeMultiplier_,
};
