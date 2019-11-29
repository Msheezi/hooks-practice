import { useEffect, useState } from 'react'


export const useFetch1 = (url) => {
    const [state,setState] = useState({ current: null, low: null, hi: null, city: null, loading: true})
        useEffect(()=>{
            fetch(url)
                .then(x => x.json())
                .then(y => {
                    setState({ current: y.main.temp, low: y.main.temp_min, hi: y.main.temp_max, city: y.name,  loading: false})
                
                })
        }, [url, setState])
        
return state
}

// ((-273.15)*1.8)+32



// const [state, setState] = useState({ data: null, loading: true })// initial values for the state object
// //initially sets the state object to empty, and shows that it is loading the data
// useEffect(() => {
//     setState(state => ({ data: state.data, loading: true }))
//     fetch(url)
//         .then(x => x.json())
//         .then(y => {
//             setState({ data: y, loading: false })
//             //after the data is fetched and the promised fulfilled, set the state to the values, loading is false and return the state object
//         })
// }, [url, setState])

// return state