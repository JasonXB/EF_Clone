import React from 'react';
import { useAppDispatch, useAppSelector } from '../../src/hooks/ReduxHooks';
import { counterActions } from '../../state-management/ReduxToolkit/slices/testSlice';

export default function ReduxToolkitTest() {
  // View state values from state-management/ReduxToolkit/slices/testSlice
  const counterValue = useAppSelector((state) => state.counter.counterValue); // number
  const showCounter = useAppSelector((state) => state.counter.showCounter); // Boolean

  // Create functions that call the state-editing methods defined inside state-management/ReduxToolkit/slices/testSlice
  const dispatch = useAppDispatch();
  const plus = function () {
    dispatch(counterActions.increment()); // no payload required
  };
  const minus = function () {
    dispatch(counterActions.decrement()); // no payload required
  };
  const plus10 = function () {
    dispatch(counterActions.incrementMore(10)); // incrementMore() requires a payload
    // payload will usually not be hardcoded like it is here
    // but i'm hardcoding it as 10 to keep this example simple
  };
  const counterToggle = function () {
    dispatch(counterActions.toggle());
  };
  return (
    <section className="flex flex-col items-center p-10 gap-4">
      <button
        type="button"
        onClick={counterToggle}
        className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
      >
        Show/hide Counter
      </button>
      <button
        type="button"
        onClick={plus}
        className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
      >
        Plus 1
      </button>
      <button
        type="button"
        onClick={minus}
        className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
      >
        minus 1
      </button>
      <button
        type="button"
        onClick={plus10}
        className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
      >
        Plus 10
      </button>
      {showCounter && <h4>COUNTER VALUE: {counterValue}</h4>}
    </section>
  );
}
