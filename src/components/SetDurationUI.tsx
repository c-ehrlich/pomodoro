import React from 'react'

interface Props {
  unit: string;
  value: number;
  increment: () => void;
  decrement: () => void;
}

const SetDurationUI = (props: Props) => {
  return (
    <div>
      <div id={`${props.unit}-label`}>{props.unit} length</div>
      <div id={`${props.unit}-length`}>{props.value}</div>
      <button id={`${props.unit}-increment`} onClick={props.increment}>+</button>
      <button id={`${props.unit}-decrement`} onClick={props.decrement}>-</button>
    </div>
  )
}

export default SetDurationUI
