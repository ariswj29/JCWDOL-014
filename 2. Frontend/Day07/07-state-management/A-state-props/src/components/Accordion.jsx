import { useState } from "react";

import Panel from "./Panel";

function Accordion() {
  const [activeIndex, setIsActiveIndex] = useState(null);

  return (
    <>
      <h1>The Accordion</h1>
      <Panel
        title="Item 1"
        isActive={activeIndex === 0}
        onShow={() => setIsActiveIndex(0)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum cum ut
        obcaecati facere asperiores, id nemo ipsum magnam, assumenda esse
        excepturi dolore molestias consequuntur animi, quo nihil? Illo,
        distinctio nisi.
      </Panel>
      <Panel
        title="Item 2"
        isActive={activeIndex === 1}
        onShow={() => setIsActiveIndex(1)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Panel>
    </>
  );
}

export default Accordion;
