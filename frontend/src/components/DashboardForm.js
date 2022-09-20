import "./DashboardForm.scss";
import { useState } from "react";

import { useSignerHook } from "../Hooks/useSignerHook";

export default function DashboardForm() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const { signer } = useSignerHook();

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log("contract is: ");
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
