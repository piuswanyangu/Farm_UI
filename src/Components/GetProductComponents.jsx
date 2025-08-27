import React, { useState } from 'react'

const GetProducts = ()=>{
    const[Produce ,setProduce]=useState([])
    const getProducts=async()=>{
        try{
            const response = await fetch('')
            const data = await response.json()
            setProduce(data)
        }catch(error){
            console.log("error while fetching products",error)
        }
    }
}

const GetProductComponents = () => {
  return (
    <div className='container-fluid row '>
        <h1>Explore Produces</h1>
        {Produce.map((Produce,index)=>(
            <div className='col-md-3 mb-4' key={index}>
                <div className='card shadow'>
                    <img src={Produce.image} className='w-100' height={200} alt='img'/>
                    <div className='card-body'>
                        <h1>{Produce.name}</h1>
                        <p>{Produce.description}</p>
                        <h3>Price {Produce.price}</h3>
                        <button className='btn btn-success'> Add to Cart</button>

                    </div>
                </div>
            </div>
        ))}

    </div>
  )
}

export default GetProductComponents