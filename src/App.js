import React, {useState, useEffect} from 'react'
import axios from 'axios'       //axios must be imported unlike .fetch()
import Header from './components/ui/Header';
import CharacterGrid from './components/menu/menuGrid'
import Search from './components/ui/Search';
import './App.css';

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState([true])
  const [query, setQuery] = useState('')
  
  // fetch(url, {             //fetch accepts 2 arguments. the url and a second optional argument for an object // default is a GET request
  //   method: 'GET', // other options: POST, PUT, DELETE, etc.
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({}),
  // })


  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://menu-training-api-production.up.railway.app/api/menuItems/${query}`) 
      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])

  return (
    <div className="container">
     <Header/>
     <Search getQuery={(q)=> setQuery(q)}/>
     <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
