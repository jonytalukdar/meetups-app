import Backdrop from './components/Backdrop';
import Modal from './components/Modal';
import Todo from './components/Todo';

function App() {
  return (
    <div>
      <h2>My Todos</h2>
      <Todo title="Learing React" />
      <Todo title="Mastering React" />
      <Todo title="React is Awesome" />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
