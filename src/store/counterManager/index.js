import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: 'data',
  initialState: {
    showStoredValue: false,
    operationValue: "0",
    displayValue: "0",
    resultValue: 0,
    storedValue: "0",
    storedDisplay: "0",
    operation: ""
  },
  reducers: {
    setOperation(state, action) {
        state.storedValue = state.operationValue;
        state.operation = action.payload;
    },
    updateOperationValue(state, action) {
        state.operationValue==="0"
            ? state.operationValue = action.payload
            : state.operationValue += action.payload;
        state.displayValue==="0"
            ? state.displayValue = action.payload
            : state.displayValue += action.payload;
    },
    saveOperation(state, action) {
        state.displayValue === "0"
            ? state.showStoredValue = false
            : state.showStoredValue = true;
        state.storedDisplay = `${state.displayValue} ${action.payload} `;
        state.storedValue = state.displayValue;
        state.displayValue = "0";
        state.operation = action.payload;
    },
    generateResult(state) {
        switch(state.operation) {
            case "+":
                state.resultValue = Number(state.storedValue) + Number(state.displayValue);
            break;
            case "-":
                state.resultValue = Number(state.storedValue) - Number(state.displayValue);
            break;
            case "*":
                state.resultValue = Number(state.storedValue) * Number(state.displayValue);
            break;
            case "/":
                state.resultValue = Number(state.storedValue) / Number(state.displayValue);
            break;
            default:
            break;
        }
        if(state.operation!=="") {
            state.storedDisplay += `${state.displayValue} = `
            state.displayValue = `${state.resultValue}`;
            state.operation = ""
        }
    },
    deleteLastNumber(state) {
        state.displayValue = state.displayValue.length===1 || state.displayValue==="0"
            ? "0"
            : state.displayValue.slice(0,-1);

        state.operationValue = state.operationValue.length===1 || state.operationValue==="0"
            ? "0"
            : state.operationValue.slice(0,-1);
    },
    clearDisplay(state) {
        state.showStoredValue = false
        state.operationValue = "0"
        state.displayValue = "0"
        state.resultValue = 0
        state.storedValue = "0"
        state.storedDisplay = "0"
        state.operation = ""
    }
  },
});

export const {
    setOperation,
    saveOperation,
    generateResult,
    updateOperationValue,
    deleteLastNumber,
    clearDisplay
} = slice.actions;

export default slice.reducer;
