// Total price of a cart, in cents, with an optional percentage discount.
export function cartTotal(items: { priceCents: number; qty: number }[], discountPct = 0): number {
  const subtotal = items.reduce((sum, i) => sum + i.priceCents * i.qty, 0)
  return Math.max(0, subtotal * (1 - discountPct / 100))
}
