const THRESHOLDS = {
  TRILLION: 1e12,
  BILLION: 1e9,
  MILLION: 1e6,
  THOUSAND: 1e3,
  QUINTILLION: 1e18,
};

export const formatBigNumbers = (
  bigNumStr: string,
  decimals: number
): string => {
  const formattedBigNum = parseFloat(bigNumStr);

  if (formattedBigNum >= THRESHOLDS.QUINTILLION) {
    const beforeDecimal = bigNumStr.split(".")[0] || bigNumStr;
    const significant = beforeDecimal.slice(0, 5);
    const exponent = beforeDecimal.length - 1;
    return `${significant[0]}.${significant.slice(1)} x 10^${exponent}`;
  } else if (formattedBigNum >= THRESHOLDS.TRILLION) {
    return `${(formattedBigNum / 1e12).toFixed(decimals)} T`;
  } else if (formattedBigNum >= THRESHOLDS.BILLION) {
    return `${(formattedBigNum / 1e9).toFixed(decimals)} B`;
  } else if (formattedBigNum >= THRESHOLDS.MILLION) {
    return `${(formattedBigNum / 1e6).toFixed(decimals)} M`;
  } else if (formattedBigNum >= THRESHOLDS.THOUSAND) {
    return `${(formattedBigNum / 1e3).toFixed(decimals)} K`;
  }

  return formattedBigNum.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
};
