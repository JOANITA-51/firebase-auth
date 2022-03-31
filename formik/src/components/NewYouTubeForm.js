import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'


const initialValues = {
  name:'Anita',
  email:'',
  channel:'',
  comment:''
}

const onSubmit =  values =>{
  console.log('Form data', values)
}

const validationSchema = Yup.object({
  name: Yup.string().required('Required!'),
  email:Yup.string().email('Invalid email format').required('Required!'),
  channel:Yup.string().required('Required!')
})

function NewYouTubeForm() {
 
  console.log('formik values', formik.values)
  return (
    <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}>
        <Form >
          <div className='form-control'>
            <label htmlFor="name">Name</label>
            <Field type="text" id='name' name='name'/>
            <ErrorMessage name='name'/>
          </div>

          <div  className='form-control'>
            <label htmlFor="channel">Email</label>
            <Field type="email" id='email' name='email'/>
            <ErrorMessage name='email'/>
          </div>
            
          <div  className='form-control'>
            <label htmlFor="channel">Channel</label>
            <Field type="text" id='channel' name='channel' placeholder='YouTube channel name'/>
            <ErrorMessage name='email'/>
          </div>  

            <div className="form-control">
                <label htmlFor="comment">Comment</label>
                <Field as='textarea' type="text" id='comment' name='comment'/>    
            </div> 
           
          <button>Submit</button>
        
        </Form>
        
    </Formik>
  )
}

export default NewYouTubeForm