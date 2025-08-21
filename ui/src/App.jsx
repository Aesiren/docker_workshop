import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  return (
    <>
      <h1>Authors:</h1><br />
      {data.map((author) => {
        return <AuthorDisplay author={author} />
      })}

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <AddAuthor />
      </div>

    </>
  )
}

function AuthorDisplay({ author }) {

  return (
    <div className='author'>
      <h2>{author.name}</h2><br />
      <h3>Status: {author.status}</h3>
    </div>
  )

}

function AddAuthor() {

  async function ApiCall(formData) {
    const name = formData.get('name');
    const status = formData.get('status');
    const data = { name: name, status: status };
    console.log(data);
    const response = await fetch('http://localhost:8080/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ authors: data })
    })

    console.log(response);

  }

  return (
    <form className='add-author' action={ApiCall}>
      <label>Name:</label>
      <input type='text' name='name' />
      <label>Status:</label>
      <input type='text' name='status' />
      <button type='submit'>Add</button>
    </form>
  )

}
export default App
