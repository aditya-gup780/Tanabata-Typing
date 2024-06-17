import React, { useState, useRef } from "react";
import Navbar1 from "../../components/Navbar1/Navbar1";
import SideList from "../../components/sidelist/SideList";
import "./Textarea.css";

const TextArea = () => {
  let TIME_LIMIT = 60;
  const [cpm, setCpm] = useState(0);
  const [wpm, setWpm] = useState(0);
  // define quotes to be used
  let quotes_array = [
    "Push yourself, because no one else is going to do it for you.",

    "Failure is the condiment that gives success its flavor.",

    "Wake up with determination. Go to bed with satisfaction.",

    "It's going to be hard, but hard does not mean impossible.",

    "Learning never exhausts the mind.",

    "The only way to do great work is to love what you do.",
  ];

  // selecting required elements

  const timerTextRef = useRef(null);
  const accuracyTextRef = useRef(null);
  const errorTextRef = useRef(null);
  const cpmTextRef = useRef(null);
  const wpmTextRef = useRef(null);
  const quoteTextRef = useRef(null);
  const formControlRef = useRef(null);
  const restartBtnRef = useRef(null);
  const cpmGroupRef = useRef(null);
  const wpmGroupRef = useRef(null);

  let timeLeft = TIME_LIMIT;
  let timeElapsed = 0;
  let total_errors = 0;
  let errors = 0;
  let accuracy = 0;
  let characterTyped = 0;

  let current_quote = "";
  let quoteNo = 0;

  let timer = null;
  function updateQuote() {
    quoteTextRef.current.textContent = null;

    current_quote = quotes_array[quoteNo];

    current_quote.split("").forEach((char) => {
      const charSpan = document.createElement("span");
      charSpan.innerText = char;
      quoteTextRef.current.appendChild(charSpan);
    });

    if (quoteNo < quotes_array.length - 1) quoteNo++;
    else quoteNo = 0;
  }
  function processCurrentText() {
    const curr_input = formControlRef.current.value;
    const curr_input_array = curr_input.split("");

    characterTyped++;
    errors = 0;

    const quoteSpanArray = quoteTextRef.current.querySelectorAll("span");

    quoteSpanArray.forEach((char, index) => {
      let typedChar = curr_input_array[index];

      if (typedChar == null) {
        char.classList.remove("correct_char");
        char.classList.remove("incorrect_char");
      } else if (typedChar === char.innerText) {
        char.classList.add("correct_char");
        char.classList.remove("incorrect_char");
      } else {
        char.classList.add("incorrect_char");
        char.classList.remove("correct_char");
        errors++;
      }
    });

    // display the number of errors

    errorTextRef.current.textContent = total_errors + errors;

    // update accuracy text

    let correctCharacters = characterTyped - (total_errors + errors);

    let accuracyVal = (correctCharacters / characterTyped) * 100;

    accuracyTextRef.current.textContent = Math.round(accuracyVal);

    // if current text is completely typed

    // irrespective of errors

    if (curr_input.length === current_quote.length) {
      updateQuote();

      // update total errors

      total_errors += errors;

      // clear the input area

      formControlRef.current.value = "";
    }
  }

  function startGame() {
    resetValues();

    updateQuote();

    // clear old and start a new timer

    clearInterval(timer);

    timer = setInterval(updateTimer, 1000);
    restartBtnRef.current.style.display = "block";
  }

  function resetValues() {
    timeLeft = TIME_LIMIT;

    timeElapsed = 0;

    errors = 0;

    total_errors = 0;

    accuracy = 0;

    characterTyped = 0;

    quoteNo = 0;

    if (formControlRef.current) {
      formControlRef.current.disabled = false;
      formControlRef.current.value = "";
    }

    if (quoteTextRef.current) {
      quoteTextRef.current.textContent =
        "Click on the area below to start the game.";
    }

    if (accuracyTextRef.current) {
      accuracyTextRef.current.textContent = 100;
    }

    if (timerTextRef.current) {
      timerTextRef.current.textContent = `${timeLeft}s`;
    }

    if (errorTextRef.current) {
      errorTextRef.current.textContent = 0;
    }

    if (restartBtnRef.current) {
      restartBtnRef.current.style.display = "none";
    }

    if (cpmTextRef.current) {
      cpmTextRef.current.textContent = 0;
    }

    if (wpmTextRef.current) {
      wpmTextRef.current.textContent = 0;
    }
    clearInterval(timer);
  }
  function updateTimer() {
    if (timeLeft > 0) {
      timeLeft--;
      timeElapsed++;
      timerTextRef.current.textContent = `${timeLeft}s`;
    } else {
      finishGame();
    }
  }
  function finishGame() {
    clearInterval(timer);

    if (formControlRef.current) {
      formControlRef.current.disabled = true;
    }

    if (quoteTextRef.current) {
      quoteTextRef.current.textContent =
        "Click on restart to start a new game.";
    }

    if (restartBtnRef.current) {
      restartBtnRef.current.style.display = "block";
    }

    const newCpm = Math.round((characterTyped / timeElapsed) * 60);
    const newWpm = Math.round((characterTyped / 5 / timeElapsed) * 60);

    setCpm(newCpm);
    setWpm(newWpm);

    if (cpmTextRef.current && wpmTextRef.current) {
      cpmTextRef.current.textContent = newCpm;
      wpmTextRef.current.textContent = newWpm;
    }

  }
  return (
    <div className="textarea overflow-hidden">
      <Navbar1 />
      <div className="Text">
        <SideList />
        <div className="mb-3">
          <div className="header">
            <div className="wpm">
              <div className="header_text">WPM</div>
              <div ref={wpmTextRef} className="curr_wpm">
                0
              </div>
            </div>

            <div className="cpm">
              <div className="header_text">CPM</div>

              <div ref={cpmTextRef} className="curr_cpm">
                0
              </div>
            </div>

            <div className="errors">
              <div className="header_text">Errors</div>

              <div ref={errorTextRef} className="curr_errors">
                0
              </div>
            </div>

            <div className="timer">
              <div className="header_text">Time</div>

              <div ref={timerTextRef} className="curr_time">
                60s
              </div>
            </div>

            <div className="accuracy">
              <div className="header_text">% Accuracy</div>

              <div ref={accuracyTextRef} className="curr_accuracy">
                100
              </div>
            </div>
          </div>
          <div ref={quoteTextRef} className="quote">
            Click on the area below to start the game.
          </div>
          <textarea
            data-bs-spy="scroll"
            className="form-control combined-textarea"
            id="exampleFormControlTextarea1"
            rows="1"
            onInput={processCurrentText}
            onFocus={startGame}
            ref={formControlRef}
          ></textarea>

          <button
            id="reset"
            type="button"
            className="btn btn-primary"
            onClick={resetValues}
            ref={restartBtnRef}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default TextArea;
