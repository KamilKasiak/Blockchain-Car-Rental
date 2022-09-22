import { useSelector, useDispatch } from "react-redux";

const Connection = () => {
  const connected = useSelector((state) => state.connector.connected);
  const dispatch = useDispatch();
};
export default Connection;
