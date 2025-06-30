import { useState } from 'react'
import './App.css'
import Message from './components/Message'

function App() {
  const dudes = ['a', 'b', 'c']
  const languages = ['C++', 'Java', 'Python']
  const [selectedItem, setSelectedItem] = useState(0)
  const handleclick = (language:string) => {
    alert(`${language} was clicked!`)
  }
  return (
    <>
      <h1>Hello World!</h1>
      <Message/>
      {/* Illustration for list*/}
      <ul>
        {dudes.map((dude, index) => (
          <li key={index}>{dude}</li>
        ))}
      </ul>
      <ul>
        {languages.map((language, index) => (
          <li 
            onClick={() => setSelectedItem(index)} 
            className={selectedItem === index ? 'py-2 px-3 bg-gray-800 text-white' : 'py-2 px-3'}
            key={index}
          >{language}
          </li>
        ))}
      </ul>
      {/* Illustration for conditional rendering*/}
      {/* {languages.length === 0 ? <p>No languages</p> : null} */}

    </>
  )
}

export default App
