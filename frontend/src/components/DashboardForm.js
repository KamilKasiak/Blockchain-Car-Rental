import "./DashboardForm.scss";
import { useState } from "react";
import { useContractHook } from "../Hooks/useContractHook";
import { useSignerHook } from "../Hooks/useSignerHook";

export default function DashboardForm() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const { newContract } = useContractHook();

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    // await newContract.addRenter(
    //   address,
    //   name,
    //   lastName,
    //   false,
    //   false,
    //   0,
    //   0,
    //   0,
    //   0,
    //   0
    // );
  };

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
