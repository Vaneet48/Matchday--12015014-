import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Card from './Card'
export default function First() {
    const [data, setData] = useState([])
    const navigate=useNavigate();
  const handleclick=()=>{
    navigate('/second')
  }

    useEffect(() => {
      (async () => {
        try {
          const rsp = await fetch("https://matchday.ai/referee/champ/fixture/dummy-matches?page=0")
          const rspJson = await rsp.json()
          console.log(rspJson)
          setData(rspJson.fixtures)
        } catch (err) {
          console.log(err)
        }
      })()
    },[]) 
    console.log(data)
  return (
    <div>
        <div className=''>
      <div className='text-3xl flex justify-center mt-6 font-bold text-blue-900'>
        International Matches 
      </div>

      <div className='my-4 flex justify-end mx-8'>
        Search bar
      </div>

      <div className='grid grid-cols-3' onClick={handleclick} >
      {
        data?.map((ele,index) => <Card key={index.toString()} data={ele} />)
      }
      </div>
       
      
   </div>
    </div>
  )
}

// export default First;
