import { observable, action } from 'mobx';
import { v4 as uuidv4 } from 'uuid';

class ToDosStore {
  @observable todos = [];

  @action
  addToDo(title) {
    this.todos.push(new TodoStore(title));
  }

  @action
  removeToDo(todo) {
    this.todos.remove(todo);
  }

  @action
  completeToDo(todo) {
    todo.completed = true;
  }
}

class TodoStore {
  @observable title = '';
  @observable id = '';
  @observable completed = false;

  constructor(title) {
    this.title = title;
    this.id = uuidv4();
  }
}

export default ToDosStore;
