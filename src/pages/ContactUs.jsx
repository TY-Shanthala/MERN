import React, { useEffect, useState } from 'react'

export const ContactUs = () => {

    const [data, setData] = useState({})
    let arr = [1, 3, 5, 6];
    // let obj = {};

    // let promData = arr.map((ele, ind) => {
    //     return new Promise(resolve => {
    //         setTimeout(() => {
    //             obj[ind] = ele;
    //             resolve(); // Resolves after the timeout completes
    //         }, 4000);
    //     });
    // });

    // const fn = async () => {
    //     await Promise.all(promData); // Waits for all promises in promData to complete
    //     console.log(obj); // Logs the filled object after all timeouts are complete
    // }

    function fn() {
        arr.map(i => {
            return setTimeout(() => {
                let tempData = { ...data }
                tempData[i] = i
                setData(tempData)
            }, 2000)
        })
    }

    useEffect(() => {
        fn();
        
    },[])


    console.log(data)

    return (
        <div>ContactUs</div>
    )
}

