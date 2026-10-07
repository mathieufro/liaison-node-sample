// Total price of a cart, in cents, with an optional percentage discount.
export function cartTotal(items: { priceCents: number; qty: number }[], discountPct = 0): number {
  const subtotal = items.reduce((sum, i) => sum + i.priceCents * i.qty, 0)
  // Bug: the discount is applied as an absolute amount instead of a percentage.
  return Math.max(0, subtotal - discountPct)
}
