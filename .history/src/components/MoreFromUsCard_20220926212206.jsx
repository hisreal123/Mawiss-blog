import React from "react";
import Button from "./Button";

export default function MoreFromUsCard() {
  return (
    <div>
      <Button
        content="health"
        eventClicked=" Banner Button"
        addStyles={buttonStyle}
      />
    </div>
  );
}
