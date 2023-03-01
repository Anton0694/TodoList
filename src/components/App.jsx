import { TodoTable } from './TodoTable/TodoTable';
import { TodoCreateForm } from './TodoCreateForm/TodoCreateForm';
import { Modal } from './Modal/Modal';

import { Component } from "react";
export class App extends Component {
  state = {
    todos: [
      { id: '1.', title: 'Fix bug with...', description: 'What you have to do...', status: false },
      { id: '2.', title: 'Create new fea...', description: 'To create this fea...', status: false },
    ],
    showModal: false,
    selectedTodo: null,
  }

 toggleStatus = todoId => {
    this.setState(prevState => ({
      todos:
        prevState.todos.map(
          todo => todo.id === todoId ? {...todo, status: !todo.status,} : todo,
      ),
    }));
  };

  onSubmitHandler = data => {
    const maxId = this.state.todos.reduce((max, todo) => Math.max(max, todo.id), 0);
    const todo = {
      id: (maxId + 1).toString() + '.',
      title: data.title,
      description: data.description,
      status: false,
      
    }

    this.setState(prevState => ({
      todos: [...prevState.todos, todo]
    }))
    
  }
  toggleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal,
    }));
  };

  selectTodo = (todo) => {
  this.setState({
    selectedTodo: todo,
    showModal: true,
  });
};
  
    render() {
      const { todos, showModal, selectedTodo} = this.state
      return (
        <div>
          <TodoCreateForm onSubmit={this.onSubmitHandler} />
          <TodoTable
            todos={todos}
            onToggleStatus={this.toggleStatus}
          onSelectTodo={this.selectTodo}/>
          {showModal && (
            <Modal onSelectTodo={this.selectTodo}>
              <div>
                {todos.map((todo) => (
                  <div key={todo.id}>
                    <h1>{todo.title}</h1>
                    <h3>{todo.description}</h3>
                    <p>Status:
                    <label>
                        <input type="checkbox"  
                          checked={selectedTodo}
      onChange={() => this.toggleModal(selectedTodo.id)} />
                      </label>
                      </p>
                    <button type='button' onClick={this.toggleModal}>Close</button>
      </div>
    ))}
  </div>

            </Modal>
          )}
        </div>
       
      );
    }
 
  };

