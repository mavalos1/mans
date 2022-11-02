export const currencyFormatter = (amount: number, fallback = "--") => {
  return amount ? `$${amount.toFixed(2)}` : fallback;
};

export { currencyFormatter as cf };
