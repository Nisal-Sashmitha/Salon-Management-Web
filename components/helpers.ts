export function getDiscountPercentage(
  originalPrice: number,
  discountedPrice: number
) {
  if (
    originalPrice <= 0 ||
    discountedPrice < 0 ||
    discountedPrice > originalPrice
  ) {
    return "Invalid prices given";
  }

  const discount = ((originalPrice - discountedPrice) / originalPrice) * 100;
  return discount.toFixed(2) + "%";
}
