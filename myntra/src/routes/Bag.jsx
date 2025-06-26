import { useSelector } from "react-redux";
import BagItems from "../components/BagItems";
import BagSum from "../components/BagSum";
import HomeItem from "../components/HomeItem";

const Bag = () => {
  const bag = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);
  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {items.map((item) =>
              bag.includes(item.id) ? (
                <BagItems key={item.id} item={item} />
              ) : null
            )}
          </div>
          <BagSum />
        </div>
      </main>
    </>
  );
};

export default Bag;
