import React from 'react'
import Register from '../view/Register';
import Add from '../view/Add';
import Leads from '../view/Leads';
import {Switch, Route} from 'react-router-dom';
import validateForm from './validateRegister';
import useForm from './useForm';
import useLeadForm from './useLeadForm';
import validateLeads from './validateLeads';

function Routes() {
  return (
    <div>
      <Switch>
      <Route exact path="/"><Register validateForm={validateForm} useForm={useForm}/></Route>
      <Route exact path="/Leads"><Leads /></Route>
      <Route exact path="/Add"><Add useLeadForm={useLeadForm} validateLeads={validateLeads}/></Route>
      </Switch>
    </div>
  )
}

export default Routes
