import { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CalculatorDisplay from "../CalculatorDisplay/CalculatorDisplay";
import CalculatorButtons from "../CalculatorButtons/CalculatorButtons";
import { sum, sub, mul, div } from "../../utils/calculationMethods";

const btnDataNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const btnDataFun = ["+", "-", "x", "/", "."];

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
    const [calText, setCalText] = useState("");
    const [handleOperations, setHandleOperations] = useState({
        x: "0",
        y: "0",
        result: "0",
        method: "",
        isOn: false
    });

    const handleBtnClick = (evt) => {
        let clickedBtn = evt.target.textContent;
        if (clickedBtn === "ON" || clickedBtn === "OFF") {
            setCalText("");
            setHandleOperations((prevData) => {
                return {
                    ...prevData,
                    x: "0",
                    y: "0",
                    result: "0",
                    method: "",
                    isOn: !prevData.isOn
                }
            });
        }

        if (handleOperations.isOn) {
            if (clickedBtn === "C") {
                if (calText === "Cleared") {
                    setCalText("");
                }
                else {
                    setCalText("Cleared");
                }
            }
            else if (clickedBtn === "Backspace") {
                if (calText === "Cleared" || calText === "") {
                    setCalText("");
                }
                else {
                    setCalText(calText.slice(0, (calText.length - 1)));
                }
            }
            else if (btnDataFun.some(n => n === clickedBtn || clickedBtn === "=")) {
                let tempFunBtn = btnDataFun.filter(n => n === clickedBtn).toString();
                if (calText.length < 15) {
                    if (calText === "Cleared") {
                        let temp = "";
                        setCalText(temp + tempFunBtn);
                    }
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
                    else if (clickedBtn === "=") {
                        const newY = calText.slice(calText.indexOf(handleOperations.method) + 1, calText.length);
                        const newResult = computeData(handleOperations.x, newY, handleOperations.method).toString();
                        setHandleOperations((prevData) => {
                            return {
                                ...prevData,
                                y: newY,
                                result: newResult
                            }
                        });
                        setCalText(newResult);
                    }
                    else {
                        let temp = calText;
                        setHandleOperations((prevData) => {
                            return {
                                ...prevData,
                                x: temp,
                                method: clickedBtn
                            }
                        });
                        setCalText(calText + tempFunBtn);
                    }
                }
            }
            else if (btnDataNum.some(n => n === clickedBtn)) {
                if (calText.length < 15) {
                    if (calText === "Cleared") {
                        let temp = "";
                        setCalText(temp + btnDataNum.filter(n => n === clickedBtn).toString());
                    }
                    else {
                        setCalText(calText + btnDataNum.filter(n => n === clickedBtn).toString());
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
                    <CalculatorDisplay text={calText} />
                    <CalculatorButtons toggleBtn={handleOperations.isOn} handleClick={handleBtnClick} />
                </Container>
            </Container>
        </>
    );
};