export function formatNumberWithDollar(number: number) {
  const options: Intl.NumberFormatOptions = {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  };

  const dollarString = new Intl.NumberFormat("en-US", options);

  return dollarString.format(number);
}
