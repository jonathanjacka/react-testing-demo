/**
 * @function formatCurrency
 * Format number to USD
 *
 * @param {number} currency
 * @returns {string} value formatted as USD
 *
 * @example
 * formatCurrency(0)
 * // => $0.00
 *
 * @example
 * formatCurrency(1.5)
 * // => $1.50
 */
export const formatCurrency = (currency) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(currency);
