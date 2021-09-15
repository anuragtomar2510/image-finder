import React, {useState, useEffect} from 'react'
import './App.css'
import NavBar from './components/NavBar'
import SearchComponent from './components/SearchComponent'
import Images from './components/Images'
import Notification from './components/Notification'
import axios from 'axios'


const API_KEY = `YOUR_API_KEY`
const ENDPOINT = `https://pixabay.com/api/`



function App() {

 

  const [category, setCategory] = useState('mountains')
  const [perPage, setPerPage] = useState('10')
  const [data, setData] = useState([])
  const [showNotification, setShowNotification] = useState(false)

  useEffect(() => {

    const fetchData = async () => {

          if(perPage < 5 || perPage > 200) {

            setShowNotification(true)

            setTimeout(() => {

                setShowNotification(false)
                return;

            }, 5000)              

          }

          try {

              const res = await axios.get(`${ENDPOINT}?key=${API_KEY}&q=${category}&image_type=photo&per_page=${perPage}`)

             
              setData(res.data.hits)

          } catch(err) {

              console.log(err)

          }
    }

    fetchData()


  }, [category, perPage])

  return (
    <>
     <NavBar />
        <SearchComponent category={category} perPage={perPage} setCategory={setCategory} setPerPage={setPerPage} /> 
        <Images data={data} />     
        <Notification  showNotification={showNotification}/>
     </>
    
  );
}

export default App
