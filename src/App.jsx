import { useState } from "react";
import Input from "./components/Input";

function App() {
  const [password, setPassword] = useState("");
  const [copy, setCopy] = useState("Copiar");
  const [customSize, setCustomSize] = useState(12);
  const [showInput, setShowInput] = useState(false);

  const passwordSize = showInput ? customSize : 8;

  function generate() {
    const characters =
      "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?";
    let newPassword = "";
    for (let i = 0; i < passwordSize; i++) {
      const position = Math.floor(Math.random() * characters.length);
      newPassword += characters[position];
    }
    setPassword(newPassword);
    setCopy("Copiar");
  }

  function copyPassword() {
    if (copy === "Copiar") {
      window.navigator.clipboard.writeText(password);
      setCopy("Copiado!");
    }
  }

  return (
    <div className="app">
      <h1>Gerador de Senhas</h1>
      <div>
        <label htmlFor="showInput">Customizar tamanho:</label>
        <input
          type="checkbox"
          id="showInput"
          value={showInput}
          onChange={() => setShowInput(!showInput)}
        />
      </div>
      {showInput ? (
        <div>
          <label htmlFor="passowordSize">Tamanho:</label>
          <Input passowordSize={customSize} setPasswordSize={setCustomSize} />
        </div>
      ) : null}
      <button onClick={generate}>
        Gerar senha de {passwordSize} caracteres
      </button>
      <button onClick={copyPassword}>{copy}</button>
      <div>{password}</div>
    </div>
  );
}

export default App;
