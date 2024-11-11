import React, { useContext } from 'react'
import { apple } from '../component/util/contaxtPage'

function Card({ data }) {
   
    const { dataName } = useContext(apple)
    return (
        <div className='card'>
            <img src={data.thumbnail} className='cardImage' alt="card Image" />
            <p className='cardTitle'><span>Name:</span>{data.title}</p>
            <p className='cardPrice'><span>price:</span>{data.price}/-</p>
            <p className='cardDisc'><span>Description:</span> a wll maintained vintage car</p>
            <p> <span>User Name:</span>{dataName}</p>
          
        </div>
    )
}


export const withHederCard = (Card) => {
    return (props) => {
        return (
            <div>
                <h1 className='absolute p-2 bg-slate-900 text-slate-50'>Odd Card</h1>
                <Card  {...props} />
            </div>
        )
    }
}


export default Card