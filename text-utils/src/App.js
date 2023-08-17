import "./App.css";
import NavBar from "./NavBar";
import TextForm from "./TextForm";

function App() {
  return (
    <div className="App">
      <NavBar title="TextUtils" aboutText = "About TextUtils"></NavBar>
      <TextForm heading="Enter the text below to analyze"></TextForm>
    </div>
  );
}

export default App;
