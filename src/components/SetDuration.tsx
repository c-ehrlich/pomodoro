import React from "react";
import SetDurationUI from "./SetDurationUI";
import useStore from "../store";

const SetDuration = () => {
  const sessionLength = useStore((state) => state.sessionLength);
  const sessionIncrement = useStore((state) => state.sessionIncrement);
  const sessionDecrement = useStore((state) => state.sessionDecrement);
  const breakLength = useStore((state) => state.breakLength);
  const breakIncrement = useStore((state) => state.breakIncrement);
  const breakDecrement = useStore((state) => state.breakDecrement);

  return (
    <>
      <SetDurationUI
        unit="session"
        value={sessionLength}
        increment={sessionIncrement}
        decrement={sessionDecrement}
      />
      <SetDurationUI
        unit="break"
        value={breakLength}
        increment={breakIncrement}
        decrement={breakDecrement}
      />
    </>
  );
};

export default SetDuration;
