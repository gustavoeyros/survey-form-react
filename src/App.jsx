import "./App.css";
import imageForm from "./assets/imgForm.svg";
import Form from "./components/Form";
function App() {
  return (
    <div className="container">
      <img alt="Boy smiling while using computer" src={imageForm} />
      <Form />
    </div>
  );
}

export default App;
