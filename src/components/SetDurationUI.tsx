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
      unit: {props.unit}, value: {props.value}
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
    </div>
  )
}

export default SetDurationUI
