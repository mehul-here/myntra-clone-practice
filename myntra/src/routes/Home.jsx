import { useSelector } from "react-redux";
import HomeItem from "../components/HomeItem";

const Home = () => {
  const items = useSelector(store=>store.items)
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <main>
        <div className="items-container">
          {fetchStatus.currentlyFetching && <p>Loading ...</p>}
          {items.map(item=><HomeItem key={item.id} item={item} />)}
        </div>
      </main>
    </>
  );
};
export default Home;
