
import React, { forwardRef, useRef } from "react";
//@ts-ignore
const MyCustomInput = forwardRef((props, ref) => {
    //@ts-ignore
  return <input ref={ref} {...props} />;
});

export function MyCustomForm() {
  const inputRef = useRef(null);

  function handleInputFocus() {
    //@ts-ignore
    inputRef.current.focus();
  }

  return (
    <>
      <MyCustomInput ref={inputRef} />
      <button onClick={handleInputFocus}>Click Me</button>
    </>
  );
}
