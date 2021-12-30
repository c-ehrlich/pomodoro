import React from 'react'

interface Props {
  
}

const Timer = (props: Props) => {
  return (
    <div>
      <div id="timer-label">Session</div>
      <div id="time-left">25:00</div>
    </div>
  )
}

export default Timer
