import React from 'react';
import {Link} from 'react-router-dom';
function Leads(){
  let leads = JSON.parse(localStorage.getItem('Lead'));
  let padrao = [{
    nome: 'Org. Internacionais',
    status: '1'    
  },
  {
    nome: 'Ind. Farm. LTDA',
    status: '2'
  },
  {
    nome: 'Music. Sound Live Camp',
    status: '1'
  }
  ]
  if(leads){
    
  }else{
    localStorage.setItem('Lead',JSON.stringify(padrao))
    leads = JSON.parse(localStorage.getItem('Lead'));
  }

  const onDragOver = (e)=>{
    e.preventDefault();
  }

  const onDragStart = (e,id,status)=>{
    console.log('DragStart:',id, status)
    e.dataTransfer.setData("id",id)
    e.dataTransfer.setData("status",status)
  }

  const onDrop = (e,cat,key)=>{
    let status = e.dataTransfer.getData('status');
    let id = e.dataTransfer.getData('id');
    leads = JSON.parse(localStorage.getItem('Lead'));
    if(leads[key].nome === id){
      leads[key].status = String(parseInt(status)+1)
      localStorage.setItem('Lead',JSON.stringify(leads))
      window.location.reload();
    }else{
      alert('Não é possível mover o Lead para outra fileira')
    }

  }
  return (
    <div className="leads-container center-screen">
      <div className="leads-top">
      <img classname="eloLogo"src="https://elogroup.com.br/wp-content/uploads/2021/08/Logo-2.svg" alt="EloGroup Logo" />
      <span className="leads-top-text">Painel de Leads</span>
      </div>
      <Link to="/Add">
      <button className="addButton">Novo Lead (+)</button>
      </Link>
      <table className="leadsTable">
      <thead>
        <tr>
          <th>Cliente em Potencial</th>
          <th>Dados Confirmados</th>
          <th>Reunião Agendada</th>
        </tr>
      </thead>
      <tbody>

      {leads.map((leadMap, index) => {
        if(leadMap.status === '1'){
          return (
            <tr>
              <td><div key={index}  onDragStart={(e)=>onDragStart(e,leadMap.nome,leadMap.status)}  draggable>{leadMap.nome}</div></td>
              <td  onDragOver={(e)=>onDragOver(e)}  onDrop={(e)=>onDrop(e,2,index)}></td>
              <td></td>
            </tr>
      );
        }
        if(leadMap.status === '2'){
          return (
            <tr>
              <td></td>
              <td><div key={index} onDragStart={(e)=>onDragStart(e,leadMap.nome,leadMap.status)} draggable>{leadMap.nome}</div></td>
              <td  onDragOver={(e)=>onDragOver(e)} onDrop={(e)=>onDrop(e,3,index)}><div></div></td>
            </tr>
      );
        }else{
          return (
            <tr>
              <td></td>
              <td></td>
              <td><div key={index}>{leadMap.nome}</div></td>
            </tr>
      );
        }
        })}

      </tbody>
      </table>
    </div>
  );
}

export default Leads;