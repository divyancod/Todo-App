import React from "react";
import { FaCheck, FaTrashAlt, FaTimes } from "react-icons/fa";
import { ACTIONS } from "../reducer/actions";
import { Container } from "reactstrap";

const TodoList = ({ tid, todo, complete, dispatch }) => {
  return (
    <Container>
      <div
        style={{
          marginBottom: "8px",
          display: "flex",
          justifyContent: "space-between",
          color: "#fff",
          backgroundColor: !complete ? "#8D3DAF" : "#1FAA59",
          boxShadow: "2px 2px #000",
          borderRadius: "8px",
        }}
      >
        <div>
          {!complete ? (
            <FaCheck
              className="m-3 mt-2"
              size={20}
              onClick={() => {
                dispatch({ type: ACTIONS.MARK_COMPLETE, payload: { id: tid } });
              }}
            />
          ) : (
            <FaTimes
              className="m-3 mt-2"
              size={20}
              onClick={() => {
                dispatch({ type: ACTIONS.MARK_COMPLETE, payload: { id: tid } });
              }}
            />
          )}
        </div>
        <div
          style={{
            marginLeft: "4px",
            flexGrow: "1",
            fontSize: "22px",
            marginTop: "7px",
            textDecorationLine: complete ? "line-through" : "none",
          }}
        >
          {todo}
        </div>
        <div>
          <FaTrashAlt
            className="m-3 mt-2"
            size={20}
            onClick={() => {
              dispatch({ type: ACTIONS.REMOVE_TODO, payload: { id: tid } });
            }}
          />
        </div>
      </div>
    </Container>
  );
};

export default TodoList;
