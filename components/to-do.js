import React, { useState } from 'react';
import styled from 'styled-components';
import CreateToDo from './create-to-do';
import { observer } from 'mobx-react';
import { useStores } from '../hooks/use-store';

const Title = styled.h1`
  font-size: 3.5em;
  text-align: center;
`;

const Wrapper = styled.section`
  text-align: center;
  font-family: 'monospace';
  background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4"%3E%3Cpath fill="%239C92AC" fill-opacity="0.4" d="M1 3h1v1H1V3zm2-2h1v1H3V1z"%3E%3C/path%3E%3C/svg%3E');
`;

const Button = styled.button`
  background: transparent;
  border: 2px solid black;
  margin: auto;
  padding: 0.25em 1em;
`;

const ToDoWrapper = styled.div`
  display: -webkit-inline-box;
  height: 30px;
  line-height: 30px;
  padding: 5px 0;
`;

const ToDoListWrapper = styled.div`
  display: inline-grid;
`;

const ToDo = styled.div`
  width: max-content;
  padding-right: 75px;
  padding-left: 20px;
`;

const Div = styled.div`
  display: block;
`;

const Task = observer(({ todo }) => {
  const { todosStore } = useStores();
  let avatarGenerator = `https://ui-avatars.com/api/?bold=true&background=000&color=fff&size=30&name=${todo.title}`;

  return (
    <>
      <ToDoWrapper>
        <Div>
          <img src={avatarGenerator}></img>
        </Div>
        <ToDo
          style={{
            textDecoration: todo.completed ? 'line-through' : '',
          }}
        >
          {todo.title}
        </ToDo>

        <Div>
          <Button onClick={() => todosStore.completeToDo(todo)}>Done</Button>
          <Button onClick={() => todosStore.removeToDo(todo)}>x</Button>
        </Div>
      </ToDoWrapper>
    </>
  );
});

const Todo = () => {
  const { todosStore } = useStores();

  return (
    <Wrapper>
      <Title>ToDo</Title>
      <ToDoListWrapper>
        {todosStore.todos.map((todo) => (
          <Task todo={todo} />
        ))}
      </ToDoListWrapper>
      <CreateToDo />
    </Wrapper>
  );
};

export default observer(Todo);
