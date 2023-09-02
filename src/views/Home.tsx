import axios from 'axios'
import { useEffect, useState } from 'react'

type pictures = {
  id: string
  url: string
}

export const Home = () => {
  const [pictures, setPictures] = useState<any>([])

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          'https://jsonplaceholder.typicode.com/photos/'
        )
        setPictures(data.slice(0, 50))
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  return (
    <div className='app'>
      <div className='nav'>
        <ul>
          <li>Home</li>
          <li>Albums</li>
        </ul>
      </div>
      <div className='content'>
        {pictures.map(({ id, url }) => (
          <div key={id}>
            <img src={url} alt={id} />
          </div>
        ))}
      </div>
    </div>
  )
}
