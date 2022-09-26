import React from "react";
import Button from "./Button";

export default function MoreFromUsCard() {
  return (
    <div className="grid grid">
      <Button
        content="health"
        eventClicked=" Banner Button"
        addStyles={buttonStyle}
      />
    </div>
  );
}
