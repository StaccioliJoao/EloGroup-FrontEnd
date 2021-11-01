import { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router';
const useForm = (validate) =>{
  let history = useHistory();
  const [values, setValues] = useState({
    username: '',
    password: '',
    password2: ''
  })
  const [errors,setErrors] = useState({})
  const [displayErrors,setDisplayErrors] = useState({})
  const firstRender = useRef(true)

  useEffect(() => {
    if(firstRender.current){
      firstRender.current = false;
      return
    }
    setErrors(validate(values));
  },[validate,values])

  const handleChange = e => {
    const {name,value} = e.target
    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = e =>{
    e.preventDefault()
    setDisplayErrors(validate(values));
    if(Object.keys(values.username).length !== 0 && Object.keys(values.password).length !== 0 && Object.keys(values.password2).length !== 0 && Object.keys(errors).length === 0){
      history.push('./Leads')
    }
  }

  return {values, handleChange, handleSubmit, displayErrors}

}

export default useForm;