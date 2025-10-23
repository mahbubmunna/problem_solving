function findHighestProfit(prices) {
  const lowest = getLowestStockPrice(prices);

  const higestFuturePrice = getHigestStockPrice(prices, lowest);

  if (higestFuturePrice > lowest.lowestPrice) {
    return higestFuturePrice - lowest.lowestPrice;
  }
  return 0;
}

function getLowestStockPrice(prices) {
  const lowestPrice = Math.min(...prices);
  const index = prices.indexOf(lowestPrice);
  return { lowestPrice, index };
}

function getHigestStockPrice(prices, lowest) {
  console.log(lowest);
  const futurePrices = prices.slice(lowest.index);

  console.log(futurePrices);
  const maxFutureStockPrice = futurePrices.length
    ? Math.max(...futurePrices)
    : 0;

  console.log(maxFutureStockPrice);
  return maxFutureStockPrice;
}

console.log(findHighestProfit([1, 2, 3, 4, 5, 6, 7]));
console.log(findHighestProfit([1, 7, 3, 4, 5, 6, 9]));
console.log(findHighestProfit([9, 2, 3, 4, 5, 6, 1]));
