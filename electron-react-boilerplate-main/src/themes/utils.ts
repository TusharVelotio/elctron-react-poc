import {
  DEFAULT_BASE_SIZE,
  SCALED_INDEPENDENT_PIXEL,
  DEVICE_INDEPENDENT_PIXEL,
} from './constants';

export const sizeToRem = (
  sourceString: string,
  baseFontSize: number = DEFAULT_BASE_SIZE,
): string => {
  const sourceValue = parseFloat(sourceString);

  if (
    sourceString.trim().endsWith(SCALED_INDEPENDENT_PIXEL) &&
    !isNaN(sourceValue)
  ) {
    const remValue = sourceValue / baseFontSize;
    return `${remValue}rem`;
  }
  if (
    sourceString.trim().endsWith(DEVICE_INDEPENDENT_PIXEL) &&
    !isNaN(sourceValue)
  ) {
    const remValue = sourceValue / baseFontSize;
    return `${remValue}rem`;
  }
  return `${sourceValue}px`;
};
