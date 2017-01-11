function previousValue(currentValue, change, isPositive) {
  return isPositive ? currentValue - change : currentValue + change;
}

module.exports = {
  previousValue: previousValue,
};
