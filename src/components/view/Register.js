import React from 'react';

function Register({validateForm, useForm}){
  const{handleChange, values, handleSubmit, displayErrors} = useForm(validateForm);
  return(
    <div className="register-container center-screen">
    <div className="text-center"><img src="https://elogroup.com.br/wp-content/uploads/2021/08/Logo-2.svg" alt="EloGroup Logo" /></div>
    <form className="Register" onSubmit={handleSubmit}>
      <div className="infos">
        <label className="userLabel">Usuário *</label>
        <input name='username' type="text" className={displayErrors.username && "error"} value={values.username} onChange={handleChange} />
        {displayErrors.username && <p>{displayErrors.username}</p>}
      </div>
      <div className="infos">
        <label className="passLabel">Password *</label>
        <input name='password' type='password'placeholder="*******" className={displayErrors.password && "error"} value={values.password} onChange={handleChange} />
        {displayErrors.password && <p>{displayErrors.password}</p>}

      </div>
      <div className="infos">
        <label className="confLabel">Confirmação Password *</label>
        <input name='password2' type='password' placeholder="*******" className={displayErrors.password2 && "error"} value={values.password2} onChange={handleChange} />
        {displayErrors.password2 && <p>{displayErrors.password2}</p>}
      </div>
      <div className="text-center">
      <input className='registerButton' type='submit' value='Registrar'/>
      </div>
    </form>
    </div>
  );
}

export default Register;