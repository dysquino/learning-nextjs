import React from 'react';
import TodosStore from '../stores/todo-store';

export const storesContext = React.createContext({
  todosStore: new TodosStore(),
});
