import React from "react";
import useId from "../../hooks/useId";

export default function Checkbox() {
    const id: string = useId();
  return (
    <>
      <label htmlFor={id}>Do you like React?</label>
      <input id={id} type="checkbox" name="react"/>
    </>
  );
}