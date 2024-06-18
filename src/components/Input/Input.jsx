import React, { useState } from "react";

function Input() {
  return (
    <input
      type="text"
      onChange={hadleChangeInput}
      value={list}
      placeholder="Enter List"
    />
  );
}

export default Input;
