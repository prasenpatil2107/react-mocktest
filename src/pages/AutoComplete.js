import React, { useState } from "react";
import "./AutoComp.css";
export default function AutoComplete() {
  let array = [
    "Prasen",
    "Arati",
    "Urvi",
    "Swajay",
    "Somaji",
    "Ashwin",
    "Lalit",
    "test",
    "Sonya",
    "Abihjit",
  ];
  let suggestion = [];
  const [value, setValue] = useState();
  const [list, setList] = useState();
  const setInputValue = (e, x) => {
    setValue(x);
  };

  const autoComp = (event) => {
    setValue(event.target.value);
    array.forEach((x) => {
      if (
        x.substr(0, event.target.value.length).toUpperCase() ===
        event.target.value.toUpperCase()
      ) {
        suggestion.push(x);
        console.log(suggestion);
        setList(
          suggestion.map((x, index) => {
            return (
              <p key={index} onClick={(e) => setInputValue(e, x)}>
                {x}
              </p>
            );
          })
        );
      }
      if (event.target.value.length === 0) {
        setList("");
      }
    });
  };
  return (
    <div className="containerCenter">
      <input
        className="autoComplete"
        type="text"
        onChange={(e) => autoComp(e)}
        value={value}
      />
      <div>{list}</div>
    </div>
  );
}
