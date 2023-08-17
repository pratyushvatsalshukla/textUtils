import "./App.css";
import About from "./components/About";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <div className="App">
      <NavBar title="TextUtils" aboutText = "About TextUtils"></NavBar>
      <TextForm heading="Enter the text below to analyze"></TextForm>
      <About></About>
    </div>
  );
}

export default App;
