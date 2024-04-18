import ShippingForm from "./ShippingForm";

// eslint-disable-next-line react/prop-types
export default function ProductPage({ productId, referrerId, theme }) {
  const handleSubmit = (orderDetails) => {
    post("/product/" + productId + "/buy", {
      referrerId,
      orderDetails,
    });
  };

  return (
    <div className={theme}>
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  );
}

function post(url, data) {
  // Imagine this sends a request...
  console.log("POST /" + url);
  console.log(data);
}
