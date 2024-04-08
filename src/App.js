import './App.css';
import { useEffect, useState } from 'react'

// userId
function App() {

  const [todos, setTodos] = useState([]);
  const [userId, setUserId] = useState('1');
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    fetch(`https://dummyjson.com/todos/user/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setTodos(data.todos);
        setFetching(false);
      })
  }, [userId])

  const handleChange = (event) => {
    setUserId(event.target.value);
    console.log('userId', userId);
  }
  return (
    <section>
      <header>
        <h1> TO Dos</h1>
      </header>
      <div>
        <label htmlFor="user"> Please select a user: </label>
        <select id="user" onChange={handleChange}> 
          <option value="1"> Alaa </option>
          <option value="2"> Tasnim </option>
          <option value="3"> Saleh </option>
        </select>
      </div>
      <main>
        {fetching ? (
        <p>Data is loading</p> ) : (
        <ul>
          {todos.map((item) => {
            return <li key={item.id}> {item.todo} </li>
          })}
        </ul>
        )} 
      </main>
    </section>
  );
}

export default App;
