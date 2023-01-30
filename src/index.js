function coinCounter(amount) {
  var change = {};
  var remaining = amount * 100

  change.quarters = Math.floor(remaining / 25);
  remaining = remaining % 25;

  change.dimes = Math.floor(remaining / 10);
  remaining = remaining % 10;

  change.nickels = Math.floor(remaining /5);
  remaining = remaining % 5

  change.pennies = remaining;

  return change;
}

function coinCounterFunc(amount) {
  const coinTypes = [25, 10, 5, 1]
  const coinNames = ["quarters", "dimes", "nickels", "pennies"]
  const total = amount * 100;
  const output = {};
  function getCoins(numIndex, left) {
    const coinType = Math.floor(left / coinTypes[numIndex]);
    const coinOut = left % coinTypes[numIndex];
    output[coinNames[numIndex]] = coinType;
    if (numIndex < coinTypes.length - 1) {
      getCoins(numIndex + 1, coinOut);
    }
  }
  getCoins(0, total);
  return (output);
}

console.log(coinCounter(4.99));
console.log(coinCounterFunc(4.99));

exports.coinCounter = coinCounter;