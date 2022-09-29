import "./DashboardForm.scss";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../features/register/checkRegistrationSlice";

export default function DashboardForm({ contract, provider }) {
  const currentAddress = useSelector((state) => state.currentAddress.address);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    await contract.addRenter(
      currentAddress,
      name,
      lastName,
      true,
      false,
      0,
      0,
      0,
      0,
      0
    );
  };

  const canRent = async () => {
    const canRentCar = await contract.canRentCar(currentAddress);
    if (canRentCar) {
      dispatch(register());
    }
  };
  canRent();

  return (
    <div className='container dashboard-form'>
      <div className='form-container'>
        <form onSubmit={handleRegisterSubmit}>
          <input
            className='name'
            type='text'
            placeholder='Name'
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          ></input>
          <input
            className='lastName'
            type='text'
            placeholder='Last Name'
            required
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          ></input>
          <button className='button-class form-submit-button' type='submit'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
