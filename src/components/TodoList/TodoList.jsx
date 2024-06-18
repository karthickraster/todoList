import React, { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import swal from "sweetalert2";
import "./TodoList.css";

const TodoList = (props) => {
  const [contactName, setContactName] = useState(props.dataList);
  const [list, setList] = useState("");

  const contactList = contactName.map((item, key) => {
    return <li key={key}>{item}</li>;
  });

  const hadleChangeInput = (e) => {
    setList(e.target.value);
    console.log("Value Entered");
  };

  const handleSubmitBtn = (e) => {
    e.preventDefault();
    if (list.trim()) {
      if (contactName.includes(list)) {
        swal.fire("Name Already Exist", "", "warning");
      } else {
        setContactName([...contactName, list]);
        swal.fire("Name Added Sucessfully", "", "success");
      }
    } else {
      swal.fire("Oops", "Please Enter Valid contact", "error");
    }
  };

  return (
    <div className="card">
      <div className="image-container">
        <h1>Contact List</h1>
      </div>
      <div className="data-container">
        <form onSubmit={handleSubmitBtn} className="form-container">
          <input
            className="text-field"
            type="text"
            onChange={hadleChangeInput}
            value={list}
            placeholder="Enter List"
          />
          <input type="submit" value="+" className="submit-btn" />
        </form>

        <ul className="contact-ul">{contactList}</ul>
      </div>
    </div>
  );
};

export default TodoList;
