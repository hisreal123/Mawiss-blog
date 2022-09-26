import React from "react";
import Button from "./Button";

export default function MoreFromUsCard() {
  return (
    <div className="">
      <Button
        content="health"
        eventClicked=" Banner Button"
        addStyles={buttonStyle}
      />
      <p>
        {" "}
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores at
        facilis obcaecati dolorem dolorum amet. Necessitatibus, eos
        consequuntur. Suscipit est assumenda, modi sunt ipsa reiciendis quod
        provident hic doloribus tempora!s
      </p>
    </div>
  );
}
