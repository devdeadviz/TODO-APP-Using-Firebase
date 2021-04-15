import "./App.css";
import { useState } from "react";
import firebase, { auth, firestore } from "./firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";

const Todos = () => {
  const [todo, setTodo] = useState("");
  const todosRef = firestore.collection(`users/${auth.currentUser.uid}/todos`);
  const [todos] = useCollectionData(todosRef, { idField: "id" });

  const signOut = () => auth.signOut();

  const onSubmitTodo = (event) => {
    event.preventDefault();

    setTodo("");
    todosRef.add({
      text: todo,
      complete: false,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  return (
    <>
      <section className="hero">
        <nav>
          <h2>Welcome</h2>
        <button onClick={signOut}>Sign Out</button>
        </nav>
      <div className="heading">TODO APP</div>
        <form onSubmit={onSubmitTodo}>
          <input
            required
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="What's Next?" className="input"
          />
          <button type="submit" className="button-add">Add</button>
        </form>
        {todos && todos.map((todo) => <Todo key={todo.id} {...todo} />)}
        </section>
    </>
  );
};

const Todo = ({ id, complete, text }) => {
  const todosRef = firestore.collection(`users/${auth.currentUser.uid}/todos`);
  const onCompleteTodo = (id, complete) =>
    todosRef.doc(id).set({ complete: !complete }, { merge: true });

  const onDeleteTodo = (id) => todosRef.doc(id).delete();

  return (
    <div key={id} className="todo">
      <button
        className={`todo-item ${complete ? "complete" : ""}`}
        tabIndex="0"
        onClick={() => onCompleteTodo(id, complete)}
      >
        {text}
      </button>
      <button className="btn-delete" onClick={() => onDeleteTodo(id)}>x</button>
    </div>
  );
};

export default Todos;