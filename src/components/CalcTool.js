import { useState } from 'react';
import { 
  ADD_ACTION, 
  SUBTRACT_ACTION, 
  MULTIPLY_ACTION, 
  DIVIDE_ACTION,
  // CLEAR_ACTION,
  // DELETE_HISTORY_ENTRY_ACTION,
} from '../actions/calcToolActions';
import { useCalcToolStore } from '../hooks/useCalcToolStore';

export const CalcTool = () => {

  const { result, history, count, errorMessage, 
    add, subtract, multiply, divide, 
    clear, deleteHistoryEntry } = useCalcToolStore();

  const [ numInput, setNumInput ] = useState(0);

  const doClear = () => {
    setNumInput(0);
    clear();
  };

  return (
    <div>
      <section>
        Result: {result}
      </section>
      <form>
        {errorMessage && <div style={{ color: 'red', fontWeight: 'bold' }}>{errorMessage}</div>}
        <label>
          Num:
          <input type="number" value={numInput}
            onChange={({ target: { value } }) => 
              setNumInput(parseInt(value,10))} 
          />
        </label>
        <fieldset>
          <button type="button" onClick={() => add(numInput)}>+</button>
          <button type="button" onClick={() => subtract(numInput)}>-</button>
          <button type="button" onClick={() => multiply(numInput)}>*</button>
          <button type="button" onClick={() => divide(numInput)}>/</button>
          {/* function 可以直接这么写 {clear} */}
          <button type="button" onClick={doClear}>clear</button>
        </fieldset>
        
        <section>
          History:
          <ul>
            {history.map(entry => 
              <li key={entry.id}>
                {entry.opName} {entry.opValue}
                <button type="button" onClick={() => deleteHistoryEntry(entry.id)}>X</button>
              </li>
            )}
          </ul>
        </section>
        <br />
        <section>
          Operation count:
          <ul>
            <li>ADD: {count[ADD_ACTION]}</li>
            <li>SUBTRACT: {count[SUBTRACT_ACTION]}</li>
            <li>MULTIPLY: {count[MULTIPLY_ACTION]}</li>
            <li>DIVIDE: {count[DIVIDE_ACTION]}</li>
          </ul>
        </section>
      </form>
    </div>
  );
};