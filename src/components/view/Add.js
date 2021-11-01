import React from 'react';
function Add({useLeadForm,validateLeads}){
  const{handleChange, values, handleSubmit, displayErrors} = useLeadForm(validateLeads);

  const checkAll = (e) => {
    var checkAllState = document.getElementsByName('checkall');
    var checkboxes = document.getElementsByClassName('checkbox');
    for (var checkbox of checkboxes) {
        checkbox.checked = checkAllState[0].checked;
        values.checkboxes = checkbox.checked
    }
    console.log(values)
}

  return(
    <div className="Registerleads-container center-screen">
      <div className="leads-top">
      <img classname="eloLogo"src="https://elogroup.com.br/wp-content/uploads/2021/08/Logo-2.svg" alt="EloGroup Logo" />
      <span className="leads-top-text">Novo Lead</span>
      </div>
      {displayErrors.checkbox && <p className="opError">{displayErrors.checkbox}</p>}
      <form className="Leads-Register" onSubmit={handleSubmit}>
        <div className="leadInfo">
            <div className="Leadsinfos">
            <label className="userLabel">Nome *</label>
            <input name='nome' type="text" className={displayErrors.nome && "error"} value={values.nome} onChange={handleChange} />
            {displayErrors.nome && <p>{displayErrors.nome}</p>}
          </div>
          <div className="Leadsinfos">
            <label className="passLabel">Telefone *</label>
            <input name='telefone' type='text' className={displayErrors.telefone && "error"} value={values.telefone} onChange={handleChange}/>
            {displayErrors.telefone && <p>{displayErrors.telefone}</p>}
          </div>
          <div className="Leadsinfos">
            <label className="confLabel">Email *</label>
            <input name='email' type='email' className={displayErrors.email && "error"} value={values.email} onChange={handleChange}/>
            {displayErrors.email && <p>{displayErrors.email}</p>}
          </div>
        </div>
        
        <div>
          
            <div className="oportunidades">
              <label className="opLabel">Oportunidades*</label>
              <table className={`NewLeadTable ${displayErrors.checkbox && "error"}`}>
              <thead>
                <tr>
                  <th ><input type="checkbox" name="checkall" onChange={checkAll} value={values.checkboxes} /></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
              <tr>
                <td ><input type="checkbox" name="check1" className="checkbox" value="RPA" onChange={handleChange} /></td>
                <td>RPA</td>
              </tr>
              <tr>
                <td><input type="checkbox" name="check2" className="checkbox" value="Produto Digital" onChange={handleChange} /></td>
                <td>Produto Digital</td>
              </tr>
              <tr>
                <td><input type="checkbox" name="check3" className="checkbox" value="Analytics" onChange={handleChange} /></td>
                <td>Analytics</td>
              </tr>
              <tr>
                <td><input type="checkbox" name="check4" className="checkbox" value="BPM" onChange={handleChange} /></td>
                <td>BPM</td>
              </tr>
              <tr>
                <td className="Invisible"></td>
                <td></td>
              </tr>
              </tbody>
              </table>
            </div>
            <div className="text-center">
              <input className='registerLeadButton' type='submit' value='Salvar'/>
              </div>
        </div>
    </form>
    </div>
  );
}

export default Add;