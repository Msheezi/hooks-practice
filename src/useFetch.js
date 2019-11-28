
import {useEffect, useState} from 'react'

export const useFetch = (url) => {
    const [state, setState] = useState({data: null, loading: true})// initial values for the state object
    //initially sets the state object to empty, and shows that it is loading the data
    useEffect(() => {
        setState(state => ({data: state.data, loading: true}))
        fetch(url)
        .then(x => x.text())
        .then(y =>  {
            setState({data: y, loading: false})
            //after the data is fetched and the promised fulfilled, set the state to the values, loading is false and return the state object
        })
    }, [url, setState])

    return state
}