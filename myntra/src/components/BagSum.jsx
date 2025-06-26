import { useSelector } from "react-redux";

const BagSum = () => {
  const bag = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);

  var total_price =0;
  var discounted_price =0;
  for (let i = 0; i < items.length; i++) {
  if(bag.includes(items[i].id)){
    total_price+=items[i].original_price;
    discounted_price+=items[i].current_price;
  }
}
  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">
          PRICE DETAILS ({bag.length} Items){" "}
        </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{total_price}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{total_price-discounted_price}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹99</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{discounted_price+99}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
};

export default BagSum;
