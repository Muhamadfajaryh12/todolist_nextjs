import React from "react";
import Button from "./Button";

const Todos = ({ ...props }) => {
  return (
    <div
      className="shadow-md rounded-md w-full p-2 flex justify-between mt-4 border-2 border-gray-50"
      key={props.id}
    >
      <p className={`${props.status == 1 ? "" : "line-through"}`}>
        {props.title}
      </p>
      {props.status == 1 ? (
        <Button
          title="Active"
          type="button"
          className="bg-red-300"
          onClick={props.handlePUT}
        />
      ) : (
        <Button title="Done" type="button" className="bg-green-300" />
      )}
    </div>
  );
};

export default Todos;
