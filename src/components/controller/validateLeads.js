export default function validateLeads(values){
  let errors = {}

  if(!values.nome){
    errors.nome = "Nome Obrigatório!"
  }

  if(!values.telefone){
    errors.telefone = "Telefone é Obrigatório!"
  } else if (!/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/i.test(values.telefone)) {
    errors.telefone = "Número de telefone invalido!"
  }

  if(!values.email){
    errors.email = "Email é Obrigatório!"
  }

  if(!values.checkboxes){
    if(values.check1 || values.check2 || values.check3 || values.check4){
    }
    else{
      errors.checkbox = "Selecione ao menos 1 opção!"
    }
  }
  console.log(values)
    return errors;
}