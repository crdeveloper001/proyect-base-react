import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, getFieldsApi, increment } from "../../redux/Slices/counterReducer";

export const ReduxCounter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  return (
    <div>
      <div>
        <h1>counter value: {counter.value}</h1>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          Incrementar +
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Decrementar -
        </button>
        <button onClick={() =>{
          dispatch(getFieldsApi())
        }}>MAKE API CALL</button>
        <hr />
        <h1>CURRENT ACTIONS FROM REDUX</h1>
        <ul>
          {counter.actions.map((action) =>{
            return(
              <>
                <li>{action}</li>
              </>
            )
          })}
        </ul>
      </div>
    </div>
  );
};
