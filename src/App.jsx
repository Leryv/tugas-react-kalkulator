import { useState } from "react";
import "./App.css";

function App() {
  const [stateA, setStateA] = useState();
  const [stateB, setStateB] = useState();

  const handlePenjumlahan = (a, b, operasiAritmatika) => {
    const numA = Number(a);
    const numB = Number(b);

    switch (operasiAritmatika) {
      case "tambah":
        setStateA(numA + numB);
        setStateB("");
        break;
      case "kurang":
        setStateA(numA - numB);
        setStateB("");
        break;
      case "kali":
        setStateA(numA * numB);
        setStateB("");
        break;
      case "bagi":
        setStateA(numA / numB);
        setStateB("");
        break;
    }
  };

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="number"
          value={stateA}
          onChange={(e) => setStateA(e.target.value)}
          placeholder="Masukkan angka pertama"
          style={{ padding: "10px", fontSize: "16px", width: "200px" }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="number"
          value={stateB}
          onChange={(e) => setStateB(e.target.value)}
          placeholder="Masukkan angka kedua"
          style={{ padding: "10px", fontSize: "16px", width: "200px" }}
        />
      </div>
      <div>
        <button
          onClick={() => handlePenjumlahan(stateA, stateB, "tambah")}
          style={{ margin: "5px", padding: "10px", fontSize: "16px" }}
        >
          +
        </button>
        <button
          onClick={() => handlePenjumlahan(stateA, stateB, "kurang")}
          style={{ margin: "5px", padding: "10px", fontSize: "16px" }}
        >
          -
        </button>
        <button
          onClick={() => handlePenjumlahan(stateA, stateB, "kali")}
          style={{ margin: "5px", padding: "10px", fontSize: "16px" }}
        >
          *
        </button>
        <button
          onClick={() => handlePenjumlahan(stateA, stateB, "bagi")}
          style={{ margin: "5px", padding: "10px", fontSize: "16px" }}
        >
          :
        </button>
      </div>
    </div>
  );
}

export default App;
