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
export default App
