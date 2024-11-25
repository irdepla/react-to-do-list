import { useState } from "react";
import Button from "./components/Button";
import "./App.css";

function App() {
  const [vegetables, setVegetables] = useState([]);
  const [text, setText] = useState("");
  const [boughtVegetables, setboughtVegetables] = useState([]);

  function addVegetables(e) {
    e.preventDefault();
    if (vegetables.includes(text)) {
      alert("Bu narsa qo'shilgan")
      setText("");
    } else {
      setVegetables([...vegetables, text]);
      setText(""); 
    }
  }

  function deleteVegetables(index) {
    setVegetables(vegetables.filter((item, i) => i != index));
  }

  function checkVegetables(index) {
    const selectedVegetable = vegetables[index];
    setboughtVegetables([...boughtVegetables, selectedVegetable]);
    setVegetables(vegetables.filter((item, i) => i !== index));
  }

  return (
    <>
      <div className="container">
        <h1 className="main-title">Mevalar ro'yxati</h1>
        <form action="">
          <input
            type="text"
            value={text}
            className="input"
            placeholder="Meva nomini kiriting:"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <Button addVegetables={addVegetables}></Button>
        </form>
        <ul>
          {vegetables.map((item, index) => (
            <li className="tasks__list" key={index}>
            <span>{item}</span>
            <span>
            <button onClick={() => deleteVegetables(index)}>
              <i class="fa-solid fa-trash"></i>
            </button>
            <button onClick={() => checkVegetables(index)}>
              <i class="fa-solid fa-check"></i>
            </button>
            </span>
          </li>
          ))}
        </ul>
        <h2 className="second-title">Sotib olingan mevalar</h2>
        <ul>
          {boughtVegetables.map((item, index) => (
            <li key={index} className="bought__elements">
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
