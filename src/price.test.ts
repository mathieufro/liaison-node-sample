import { expect, test } from "bun:test"
import { cartTotal } from "./price"

test("no discount", () => {
  expect(cartTotal([{ priceCents: 1000, qty: 2 }])).toBe(2000)
})

test("10% discount", () => {
  expect(cartTotal([{ priceCents: 1000, qty: 2 }], 10)).toBe(1800)
})
