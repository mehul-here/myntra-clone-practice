import { useDispatch, useSelector } from "react-redux";
import { bagAction } from "../store/BagSlice";
import { IoBagAdd } from "react-icons/io5";
import { IoBagRemove } from "react-icons/io5";
const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleAddToBag = () => {
    dispatch(bagAction.addToBag(item.id));
  };
  const handleRemoveFromBag = () => {
    dispatch(bagAction.removeFromBag(item.id));
  };
  const bag = useSelector((store) => store.bag)
  return (
    <>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
        {!bag.includes(item.id) ? (
          <button
            className="btn btn-add-bag btn-success"
            onClick={handleAddToBag}
          >
            <IoBagAdd />
          </button>
        ) : (
          <button
            className="btn btn-add-bag btn-danger"
            onClick={handleRemoveFromBag}
          >
            <IoBagRemove />
          </button>
        )}
      </div>
    </>
  );
};

export default HomeItem;
