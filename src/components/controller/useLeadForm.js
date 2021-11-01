import { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router';

const useLeadForm = (validateLeads) =>{
  let history = useHistory();
  const [values, setValues] = useState({
    nome: '',
    telefone: '',
    email: '',
    check1: '',
    check2: '',
    check3: '',
    check4: '',
    checkboxes: '',
    status: '1'
  })
  const [errors,setErrors] = useState({validateLeads})
  const [displayErrors,setDisplayErrors] = useState({validateLeads})
  const firstRender = useRef(true)

  useEffect(() => {
    if(firstRender.current){
      firstRender.current = false;
      return
    }
    setErrors(validateLeads(values))
  },[validateLeads,values])

  const handleChange = e => {
    const {name,value} = e.target
    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = e =>{
    setDisplayErrors(validateLeads(values));
    e.preventDefault()
    if(Object.keys(values.nome).length !== 0 && Object.keys(values.email).length !== 0 && Object.keys(values.telefone).length !== 0 && Object.keys(errors).length === 0){
      if(localStorage.getItem("Lead")){
        let existing = [localStorage.getItem("Lead")]
        existing = JSON.parse(existing)
        existing.push(values)
        localStorage.setItem('Lead',JSON.stringify(existing))
      }else{
        let data = [values]
        localStorage.setItem('Lead',JSON.stringify(data))
      }
      history.push('./Leads')
      alert('Lead incluído com sucesso!')
    }
  }

  return {values, handleChange, handleSubmit, displayErrors}

}

export default useLeadForm;