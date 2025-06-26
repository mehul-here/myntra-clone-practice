import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStatusActions } from "../store/fetchStatusSlice";
import { itemsAction } from "../store/itemSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusActions.markFetchingStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({items}) => {
        dispatch(fetchStatusActions.markFetchingFinished());
        dispatch(itemsAction.addInitialItems(items));
        dispatch(fetchStatusActions.markFetchDone());
      });
    return () => {
      controller.abort();
    };
  }, []);
  return <></>;
};

export default FetchItems;
