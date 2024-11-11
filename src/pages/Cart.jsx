import React, { useContext } from 'react'
import { apple } from '../component/util/contaxtPage'

function Cart() {
    const { dataName } = useContext(apple)
    return (
        <div>
            <h1>This is the Cart Page</h1>
            <h1>{dataName}</h1>
        </div>
    )
}

export default Cart