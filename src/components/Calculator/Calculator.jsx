// Importing necessary React and Material UI components

import { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CalculatorDisplay from "../CalculatorDisplay/CalculatorDisplay";
import CalculatorButtons from "../CalculatorButtons/CalculatorButtons";
import { sum, sub, mul, div } from "../../utils/calculationMethods"; // Importing utility functions for calculations

// Numeric and functional button data arrays

const btnDataNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const btnDataFun = ["+", "-", "x", "/", "."];

// Function to compute result based on selected operator

function computeData(x = 0, y = 0, func = "") {
    if (func === "+") {
        return sum(parseInt(x), parseInt(y));
    }
    else if (func === "-") {
        return sub(parseInt(x), parseInt(y));
    }
    else if (func === "x") {
        return mul(parseInt(x), parseInt(y));
    }
    else if (func === "/") {
        return div(parseInt(x), parseInt(y));
    }
    else if (func === "") {
        return 0;
    }
};

export default function Calculator() {

    // State for the calculator display text
    const [calText, setCalText] = useState("");

    // State to handle the operations (x, y, result, method, and power state)
    const [handleOperations, setHandleOperations] = useState({
        x: "0",
        y: "0",
        result: "0",
        method: "",
        isOn: false
    });

    // Function to handle button clicks
    const handleBtnClick = (evt) => {
        let clickedBtn = evt.target.textContent; // Getting the clicked button's text content

        // Power button handling (ON/OFF)
        if (clickedBtn === "ON" || clickedBtn === "OFF") {
            setCalText(""); // Reset the display
            setHandleOperations((prevData) => {
                return {
                    ...prevData,
                    x: "0",
                    y: "0",
                    result: "0",
                    method: "",
                    isOn: !prevData.isOn // Toggle the calculator power
                }
            });
        }

        // Check if the calculator is turned ON
        if (handleOperations.isOn) {

            // Clear button handling
            if (clickedBtn === "C") {
                if (calText === "Cleared") {
                    setCalText("");
                }
                else {
                    setCalText("Cleared");
                }
            }
            // Backspace button handling
            else if (clickedBtn === "Backspace") {
                if (calText === "Cleared" || calText === "") {
                    setCalText("");
                }
                else {
                    setCalText(calText.slice(0, (calText.length - 1))); // Remove last character
                }
            }
            // Handling function buttons and equal button
            else if (btnDataFun.some(n => n === clickedBtn || clickedBtn === "=")) {
                let tempFunBtn = btnDataFun.filter(n => n === clickedBtn).toString(); // Current function button
                if (calText.length < 15) { // Preventing text overflow
                    if (calText === "Cleared") {
                        let temp = "";
                        setCalText(temp + tempFunBtn);
                    }
                    // Replace last operator if another is clicked
                    else if (btnDataFun.some(n => n === calText.slice(calText.length - 1))) {
                        let temp = calText.slice(0, (calText.length - 1));
                        setHandleOperations((prevData) => {
                            return {
                                ...prevData,
                                x: temp,
                                method: clickedBtn
                            }
                        });
                        setCalText(temp + tempFunBtn);
                    }
                    // Compute the result when "=" is clicked
                    else if (clickedBtn === "=") {
                        const newY = calText.slice(calText.indexOf(handleOperations.method) + 1, calText.length); // Second operand
                        const newResult = computeData(handleOperations.x, newY, handleOperations.method).toString(); // Calculate result
                        setHandleOperations((prevData) => {
                            return {
                                ...prevData,
                                y: newY,
                                result: newResult
                            }
                        });
                        setCalText(newResult); // Display result
                    }
                    else {
                        // Storing operator and first operand
                        let temp = calText;
                        setHandleOperations((prevData) => {
                            return {
                                ...prevData,
                                x: temp,
                                method: clickedBtn
                            }
                        });
                        setCalText(calText + tempFunBtn); // Update display with operator
                    }
                }
            }
            // Handling numeric buttons
            else if (btnDataNum.some(n => n === clickedBtn)) {
                if (calText.length < 15) {  // Preventing text overflow
                    if (calText === "Cleared") {
                        let temp = "";
                        setCalText(temp + btnDataNum.filter(n => n === clickedBtn).toString()); // Set clicked number
                    }
                    else {
                        setCalText(calText + btnDataNum.filter(n => n === clickedBtn).toString()); // Add number to display
                    }
                }
            }
        }
    };

    return (
        <>
            <Container maxWidth="sm" sx={{ marginTop: 15, height: 700 }}>
                <Typography variant="h1" sx={{ fontSize: 90, marginBottom: 5, paddingLeft: 8.6 }}>
                    Calculator!
                </Typography>
                <Container sx={{ width: 430, height: 480, backgroundColor: "#0d6efd", p: 3, border: "3px solid black", borderRadius: "2%" }}>

                    {/* Displaying the current value or result */}
                    <CalculatorDisplay text={calText} />

                    {/* Rendering calculator buttons and handling clicks */}
                    <CalculatorButtons toggleBtn={handleOperations.isOn} handleClick={handleBtnClick} />
                </Container>
            </Container>
        </>
    );
};