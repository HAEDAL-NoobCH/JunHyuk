import './App.css';

function App() {
  return (
    <div className="App">
      <form className="new-item-form">

        <div className="form-row">
          <label htmlFor="item">
            New item
          </label>
          <input
          type="text"
          id="item"/>
        </div>

        <button className="btn">
          Add
        </button>
      </form>

      <h1 className="header">
        Todo List
      </h1>

      <ul className="list">

        <li>
          <label>
            <input type="checkbox"></input>
            Item 1
          </label>
          <button className="btn btn-danger">
            Delete
          </button>
        </li>

        <li>
        <label>
            <input type="checkbox"></input>
            Item 2
          </label>
          <button className="btn btn-danger">
            Delete
          </button>
        </li> 

      </ul>

    </div>
  );
}

export default App;