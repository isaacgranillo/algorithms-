// masks all the digits of a given credit card number except for the last four
function maskify(cc) {
  if (cc.length > 4) {
    var result = '';
    var part1Length = cc.length - 4;
    for (var i = 0; i < part1Length; i++) {
      result += '#';
    }
    result += cc.slice(-4);
    console.log(result);
  } else {
    console.log(cc);
  }
}



