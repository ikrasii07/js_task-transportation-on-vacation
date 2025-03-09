/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const day = 40;

  if (days < 3) {
    return day * days;
  }

  if (days <= 6) {
    return day * days - 20;
  }

  if (days >= 7) {
    return day * days - 50;
  }
}

module.exports = calculateRentalCost;
