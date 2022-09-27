import { useSelector, useDispatch } from "react-redux";

const Register = () => {
  const registered = useSelector((state) => state.registrator.registered);
  const dispatch = useDispatch();
};

export default Register;
