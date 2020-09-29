import { useState } from 'react';
import styled from 'styled-components';
import { useStores } from '../hooks/use-store';

const FormWrapper = styled.div`
  text-align: center;
  padding: 50px;
`;

const Input = styled.input`
  background: transparent;
  border-radius: 3px;
  border: 2px solid black;
  font-size: xx-large;
  font-family: monospace;
  text-align: center;
`;

const CreateToDo = () => {
  const [value, setValue] = useState('');
  const { todosStore } = useStores();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;

    todosStore.addToDo(value);
    setValue('');
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          className="input"
          value={value}
          placeholder="Add a new task"
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </FormWrapper>
  );
};

export default CreateToDo;
