export const trimWalletAddress = (
  address: string,
  startChars: number = 8,
  endChars: number = 4
) => {
  if (!address) return "";
  if (address.length <= startChars + endChars) return address;
  const start = address.substring(0, startChars);
  const end = address.substring(address.length - endChars);
  return `${start}...${end}`;
};
