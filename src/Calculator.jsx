import { useState } from "react";

export default function Calculator() {
  const [display, setDisplay] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setDisplay(eval(display).toString());
      } catch {
        setDisplay("Erro");
      }
    } else if (value === "C") {
      setDisplay("");
    } else {
      setDisplay(display + value);
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C"
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg w-72">
      <div className="text-right mb-4 text-2xl border rounded p-2 h-14">
        {display || "0"}
      </div>
      <div className="grid grid-cols-4 gap-3">
        {buttons.map((btn, idx) => (
          <button
            key={idx}
            className="bg-gray-200 hover:bg-gray-300 rounded-xl p-4 text-xl font-semibold"
            onClick={() => handleClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}