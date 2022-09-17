import "./DashboardForm.scss";

export default function DashboardForm() {
  return (
    <div className="container dashboard-form">
      <div className="form-container">
        <form>
          <input
            className="name"
            type="text"
            placeholder="Name"
            required
          ></input>
          <input
            className="lastName"
            type="text"
            placeholder="Last Name"
            required
          ></input>
        </form>
        <button className="button-class form-submit-button" type="submit">
          Submit
        </button>
      </div>
    </div>
  );
}
