export default function validateForm(values){
  let errors = {}

  if(!values.username){
    errors.username = "Usuário Obrigatório!"
  }

  if(!values.password){
    errors.password = "Password é Obrigatório!"
  } else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i.test(values.password)) {
    errors.password = "Password deve ter pelo menos 8 caracteres sendo letras, números e, caracteres especiais!"
  }

  if(!values.password2){
    errors.password2 = "Password é Obrigatório!"
  } else if(values.password2 !== values.password){
    errors.password2 = "Passwords não são iguais!"
  }
    return errors;
}