import React, { useContext, useEffect, useRef, useState } from 'react'
import ShimmerCard from '../commonComponents/ShimmerCard'
import Card, { withHederCard } from '../commonComponents/Card'
import { apple } from './util/contaxtPage'


function Body() {
    const [productsData, setProductsData] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const [textInput, setTextInput] = useState('');
    const { dataName, changeData } = useContext(apple)
    const CardEnhanced = withHederCard(Card)
    console.log("textInput", textInput)
    const myData = async () => {
        const data = await fetch("https://dummyjson.com/carts")
        const promiseData = await data.json()
        const cardsData = promiseData.carts.map((ele) => {
            return ele.products
        })
        const actulaData = cardsData.flat();
        setProductsData(actulaData);
        setFilteredData(actulaData);
    }
    useEffect(() => {
        myData();
        console.log("this is from the UseEffect")
    }, [])

    const refVal = useRef(null)
    const [count, setCount] = useState(0)
    const prevCount = useRef(0)

    useEffect(() => {
        prevCount.current = count
    }, [count])
    console.log(prevCount)
    return (
        <div className='body'>
            <div>
                <p className='m-2 text-lg'>use State Count: {count}</p>
                <p className='m-2 text-lg'>Previous Count: {prevCount.current}</p>
                <button onClick={() => {
                    setCount(count + 1)
                }} className='p-2 m-2 bg-lime-400 text-zinc-100'>Click to update the count</button>
            </div>
            <div>
                <input ref={refVal} placeholder='ref Input' type='text' />
                <button className='m-2 p-2 bg-amber-300 text-slate-100 rounded-lg' onClick={(e) => {
                    refVal.current.focus()
                }
                }>Click me to focus</button>
            </div>
            <div>
                <label>This is to update the context value</label>
                <input value={dataName}
                    className='p-2 m-2 border'
                    type='text'
                    onChange={(e) => {
                        changeData(e.target.value)
                    }} />
            </div>
            {console.log("this is from jsx render")}
            <article className='search'>
                <div style={{ display: "flex" }}>
                    <input
                        type='text'
                        value={textInput}
                        onChange={(event) => {
                            setTextInput(event.target.value)
                        }}
                    />
                    <button
                        onClick={() => {
                            const alterData = productsData.filter((ele) => {
                                let title = ele.title.toUpperCase()
                                let serchText = textInput.toUpperCase
                                return ele.title.includes(textInput)
                            })
                            setFilteredData(alterData)
                        }}
                    >Search</button>
                </div>
                <button key="1" onClick={() => {
                    let alteredData = productsData.filter((ele) => {
                        return ele.price < 500
                    })
                    // updating the initial state
                    setFilteredData(alteredData)
                }}>Less than 500/-</button>
                <button key='2'
                    onClick={() => {
                        let alterData = productsData.filter((ele) => {
                            return ele.price < 1000
                        })
                        // updating the initial state
                        setFilteredData(alterData)
                    }}
                >Less than 10000/-</button>
            </article>
            <article className='cardHolder'>
                {(filteredData.length > 0) ? filteredData.map((ele, index) => {
                    return ((index % 2 != 0) ?
                        (<Card data={ele} id={index} key={`${Math.random() * 100}${index}`} />) :
                        (<CardEnhanced data={ele} id={index} key={`${Math.random() * 100}${index}`} />)
                    )
                }) : Array(4).fill().map(() => <ShimmerCard />)
                }
            </article>
        </div >
    )

}






export default Body