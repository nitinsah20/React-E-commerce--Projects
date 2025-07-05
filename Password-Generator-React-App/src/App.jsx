import { use, useState, useCallback, useEffect } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const generatorPassword = useCallback(() => {
    const lower = 'aqwertyuiopsdfghjklzxcvbnm';
    const upper= lower.toUpperCase();
    const numbers = '1234567890';
    const symbols = "!@#$%^&*(){}[]=<>/,.";
    let chars = lower + upper;
    if (includeNumbers) chars += numbers;
    if (includeSymbols) chars += symbols;

    let result = '';
    for (let i = 0; i< length; i++) {
      
      result = result + chars.charAt(Math.floor(Math.random()*chars.length));
    }
    setPassword(result);

  }, [
    length,
    includeNumbers,
    includeSymbols
  ]);
  useEffect(() => {
    generatorPassword();
  }, [generatorPassword]);

  const copyToClipboard = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 p-4">
        <div className="w-full max-w-lg bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl shadow-xl p-6">
          <h1 className="text-2xl md:text-3xl font-semibold text-center text-white mb-4">
            Password Generator
          </h1>

          <div className="flex w-full rounded-lg overflow-hidden border border-white/20">
            <input
              type="text"
              readOnly
              value={password}
              placeholder="Your secure password"
              className="flex-1 px-4 py-3 text-slate-900 bg-white"
            />
            <button
              onClick={copyToClipboard}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3"
            >
              Copy
            </button>
          </div>

          <div className="mt-6 space-y-4 text-white">
            <div className="flex items-center justify-between">
              <label htmlFor="length" className="font-medium">
                Length: <span className="font-semibold"></span>
              </label>
              <input
                id="length"
                type="range"
                min={8}
                max={32}
                value={length}
                onChange={(e) => setLength(+e.target.value)}
                className="w-2/3 accent-indigo-600"
              />
            </div>

            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                id="numbers"
                checked={includeNumbers}
                onChange={() => setIncludeNumbers(!includeNumbers)}
                className="accent-indigo-600"
              />
              <label htmlFor="numbers">Include Numbers</label>
            </div>

            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                id="symbols"
                checked={includeSymbols}
                onChange={() => setIncludeSymbols(!includeSymbols)}
                className="accent-indigo-600"
              />
              <label htmlFor="symbols">Include Symbols</label>
            </div>

            <button
              onClick={generatorPassword}
              className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-medium shadow"
            >
              Generate New Password
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
