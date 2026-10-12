let count = 0;

function addCart() {
  count++;
  document.getElementById("cart").textContent = count;
  alert("Product added to cart!");
}
const method = document.getElementById("method");
const details = document.getElementById("paymentDetails");
const form = document.getElementById("paymentForm");
const message = document.getElementById("message");

method.addEventListener("change", function () {
  if (this.value === "upi") {
    details.innerHTML =
      '<p>Continue to a secure UPI payment provider.</p>';
  } else if (this.value === "card") {
    details.innerHTML =
      '<p>Continue to a secure card payment provider.</p>';
  } else if (this.value === "cod") {
    details.innerHTML =
      '<p>Pay ₹599 when your order is delivered.</p>';
  } else {
    details.innerHTML = "";
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!method.value) {
    alert("Please select a payment method.");
    return;
  }

  if (method.value === "cod") {
    message.textContent =
      "Demo order placed! Pay ₹599 on delivery.";
  } else {
    message.textContent =
      "Demo only: Connect a payment gateway to pay securely.";
  }
});