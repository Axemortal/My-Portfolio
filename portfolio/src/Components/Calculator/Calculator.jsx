import React, { useState, useRef } from "react";
import "./Calculator.css";

export default function Calculator() {
  const [currentDisplay, setCurrentDisplay] = useState("0");
  const [prevDisplay, setPrevDisplay] = useState("");
  const setNewValue = useRef(false);
  const numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const operatorArr = ["+", "-", "x", "÷"];

  function updateNumber(number) {
    number = number.toString();
    if (setNewValue.current || currentDisplay === "0") {
      setNewValue.current = false;
      setCurrentDisplay(number);
    } else {
      setCurrentDisplay((prevState) => prevState + number);
    }
  }

  function addOperator(operator) {
    setCurrentDisplay(eval(currentDisplay));
    if (!prevDisplay) {
      setPrevDisplay(`${currentDisplay} ${operator}`);
    } else {
      let temp = prevDisplay;
      temp = replaceOperators(temp);
      setPrevDisplay(eval(temp + currentDisplay) + " " + operator);
    }
    setCurrentDisplay("0");
  }

  function clearAll() {
    setCurrentDisplay("0");
    setPrevDisplay(null);
  }

  function deleteLast() {
    setNewValue.current = false;
    if (currentDisplay !== "0") {
      if (currentDisplay.length === 1) {
        setCurrentDisplay("0");
      } else {
        setCurrentDisplay((prevState) => prevState.slice(0, -1));
      }
    } else if (prevDisplay) {
      setCurrentDisplay(prevDisplay.slice(0, -1).trim());
      setPrevDisplay(null);
    }
  }

  function addDot() {
    if (setNewValue.current) {
      setNewValue.current = false;
      setCurrentDisplay("0.");
    } else if (
      currentDisplay === "0" ||
      (currentDisplay && !currentDisplay.includes("."))
    ) {
      setCurrentDisplay((prevState) => prevState + ".");
    }
  }

  function evaluateExpression() {
    if (prevDisplay) {
      let temp = prevDisplay;
      temp = replaceOperators(temp);
      setCurrentDisplay(eval(temp + currentDisplay).toString());
      setNewValue.current = true;
      setPrevDisplay(null);
    }
  }

  function replaceOperators(value) {
    value = value.replace("x", "*");
    value = value.replace("÷", "/");
    return value;
  }

  return (
    <>
      <div className="container calculator">
        <div className="display">
          <p id="display--previous">{prevDisplay}</p>
          <h1 id="display--current">{currentDisplay}</h1>
        </div>
        <div className="calculator--grid">
          <div className="number--grid">
            {numberArr.map((number) => {
              return (
                <p id={`button--${number}`} key={number}>
                  <span
                    className="button number"
                    onClick={() => {
                      updateNumber(number);
                    }}
                  >
                    {number}
                  </span>
                </p>
              );
            })}
          </div>
          <div className="operator--grid">
            {operatorArr.map((operator) => {
              return (
                <p id={`button--${operator}`} key={operator}>
                  <span
                    className="button operator"
                    onClick={() => {
                      addOperator(operator);
                    }}
                  >
                    {operator}
                  </span>
                </p>
              );
            })}
          </div>
          <p id="button--clear-all">
            <span className="button" onClick={clearAll}>
              Clear All
            </span>
          </p>
          <p id="button--delete">
            <span className="button" onClick={deleteLast}>
              Delete
            </span>
          </p>
          <p id="button--0">
            <span
              className="button number"
              onClick={() => {
                updateNumber(0);
              }}
            >
              0
            </span>
          </p>
          <p id="button--dot">
            <span className="button" onClick={addDot}>
              .
            </span>
          </p>
          <p id="button--equals">
            <span className="button" onClick={evaluateExpression}>
              =
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
