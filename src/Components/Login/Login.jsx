import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Input} from './../FormsControl/FormsControl'
import {required} from "./../../validators/validators"
import {Redirect} from 'react-router-dom'
import styleForm from './../FormsControl/formsControl.module.css'

let LoginForm = (props) => {
   return ( <form onSubmit={props.handleSubmit}>
        <div>
           <Field 
              name="email" 
              type="text" 
              placeholder="email" 
              component={Input}
              validate={[required]}
           />
        </div>
        <div>
           <Field 
              name="password" 
              type="password" 
              placeholder="Password" 
              component={Input} 
              validate={[required]}
           />
        </div>
        <div>
           <Field 
              name="rememberMe" 
              type="checkbox" 
              component={Input} 
              validate={[required]}
           />Remember me
        </div>
         {props.error && <div className={styleForm.formError}>
           {props.error}
        </div>}
        <div>
           <button>Submit</button>
        </div>
      </form> 
   )
}

let ReduxLoginForm = reduxForm ({form: 'login'})(LoginForm)

let Login = (props) => {   
   
   const onSubmit = (formData) => {      
      props.loginTC(formData.email, formData.password, formData.rememberMe)
   }
   
   if(props.isAuth) { return <Redirect to={'/showMessages'} />}
   
   return <>
      <h3>Login</h3>
      <ReduxLoginForm onSubmit={onSubmit} />
   </>
}

export default Login
