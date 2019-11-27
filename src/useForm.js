import {useState} from 'react'
export const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues)
    
    return [values, e => {
        setValues({
            ...values, 
            [e.target.name]: e.target.value
            //update the name of the update field on the name of the field.
        })
    } ]
}
