import React, { useState, useReducer } from "react";
import TodoList from "./TodoList";
import {
  Container,
  InputGroup,
  Input,
  Button,
  InputGroupAddon,
  Form,
  FormGroup,
} from "reactstrap";
import reducer from "../reducer/reducer";
import { ACTIONS } from "../reducer/actions";

const TodoInput = () => {
  const [current, setCurrent] = useState("");
  const [allItems, dispatch] = useReducer(reducer, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: current } });
    setCurrent("");
  };
  return (
    <div className="todo-input">
      <Container>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "25px",
          }}
        >
          Simple Todo App using react
        </h2>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <InputGroup>
              <Input
                type="text"
                value={current}
                placeholder="Add your Todo Here.."
                onChange={(e) => {
                  setCurrent(e.target.value);
                }}
              />
              <InputGroupAddon addonType="append">
                <Button color="success">ADD</Button>
              </InputGroupAddon>
            </InputGroup>
          </FormGroup>
        </Form>
      </Container>
      <div
        style={{
          marginTop: "40px",
        }}
      >
        {allItems.map((todo) => {
          return (
            <TodoList
              key={todo.id}
              tid={todo.id}
              todo={todo.todo}
              complete={todo.complete}
              dispatch={dispatch}
            />
          );
        })}
      </div>
      </div>
  );
};

export default TodoInput;
