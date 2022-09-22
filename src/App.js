import React from 'react';
import './App.css';
import { useSelector, useDispatch} from 'react-redux';
import { clearDisplay, deleteLastNumber, generateResult, saveOperation, updateOperationValue } from './store/counterManager';

const App = () => {
  const dispatch = useDispatch();
  const displayValue = useSelector(state=>state.data.displayValue)
  const storedDisplay = useSelector(state=>state.data.storedDisplay)
  const showStoredValue = useSelector(state=>state.data.showStoredValue)

  return (
    <div className="App">
      {showStoredValue && <small>
        {storedDisplay}
      </small>}
      <div>
        {displayValue}
      </div>

      <div>
        <button onClick={()=>dispatch(updateOperationValue("0"))}>0</button>
        <button onClick={()=>dispatch(updateOperationValue("1"))}>1</button>
        <button onClick={()=>dispatch(updateOperationValue("2"))}>2</button>
        <button onClick={()=>dispatch(updateOperationValue("3"))}>3</button>
        <button onClick={()=>dispatch(updateOperationValue("4"))}>4</button>
        <button onClick={()=>dispatch(updateOperationValue("5"))}>5</button>
        <button onClick={()=>dispatch(updateOperationValue("6"))}>6</button>
        <button onClick={()=>dispatch(updateOperationValue("7"))}>7</button>
        <button onClick={()=>dispatch(updateOperationValue("8"))}>8</button>
        <button onClick={()=>dispatch(updateOperationValue("9"))}>9</button>
      </div>
      <div>
        <button onClick={()=>dispatch(saveOperation("+"))}>+</button>
        <button onClick={()=>dispatch(saveOperation("-"))}>-</button>
        <button onClick={()=>dispatch(saveOperation("/"))}>/</button>
        <button onClick={()=>dispatch(saveOperation("*"))}>*</button>
      </div>
      <div>
        <button onClick={()=>dispatch(generateResult())}>=</button>
        <button onClick={()=>dispatch(deleteLastNumber())}>&lt;&lt;</button>
      </div>
      <div>
        <button onClick={()=>dispatch(clearDisplay())}>CE</button>
      </div>
    </div>
  );
}

export default App;
