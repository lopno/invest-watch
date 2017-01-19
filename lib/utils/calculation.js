function previousValue(currentValue, change, isPositive) {
  if (
    currentValue !== null && currentValue !== undefined && change !== null && change !== undefined
    && isPositive !== null && isPositive !== undefined
  ) {
    return isPositive ? currentValue - change : currentValue + change;
  }
  return null;
}

module.exports = {
  previousValue,
};
