import React from "react";
import Select from "react-select";
import "./addToDo.css";

const AddToDoModal = ({ toggleModal }) => {
  const options = [
    { value: "Sepehr", label: "Sepehr" },
    { value: "Amin", label: "Amin" },
    { value: "Pedram", label: "Pedram" },
  ];
  return (
    <div className="Add-Todo-Wrap">
      <div className="Overlay" onClick={toggleModal} />
      <div className="Modal-Container">
        <div className="Modal-Main">
          <div className="Modal-Title" onClick={toggleModal}>
            Add To Do
          </div>
          <div className="field">
            <input type="text" className="Add-Todo-Input" placeholder=" " />
            <label>First Name</label>
          </div>
          <div className="field">
            <Select
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: state.isFocused ? "purple" : "grey",
                }),
              }}
              options={options}
              isMulti
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToDoModal;
