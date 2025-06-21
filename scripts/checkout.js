import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { cart } from "../../data/cart.js";
import '../data/cart-oop.js';
import '../data/backend-practice.js'

function updateCartQuantityInHeader() {
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  document.querySelector('.js-cart-quantity').textContent = totalQuantity;
}

updateCartQuantityInHeader();
renderOrderSummary();
renderPaymentSummary();