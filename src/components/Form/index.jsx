import Button from "../Button";
const Form = () => {
  return (
    <form>
      <div className="form-control">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" />
      </div>

      <div className="form-control">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
      </div>

      <div className="form-control">
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" />
      </div>

      <div className="button-container">
        <Button title="Back" />
        <Button title="Submit" />
      </div>
    </form>
  );
};

export default Form;
