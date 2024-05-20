import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function Add() {
  return (
    <div>
        <HelmetProvider>
   
   <Helmet>
     <title>Add</title>
   </Helmet>
   

</HelmetProvider>
<Formik
       initialValues={{ img: '', name: '', price: '' }}
       validationSchema={Yup.object({
        img: Yup.string()
           .required('Required'),
           name: Yup.string()
           .max(2055, 'Must be 20 characters or less')
           .required('Required'),
           price: Yup.string()
           .max(20, 'Must be 20 characters or less')
           .required('Required')
       })}
       onSubmit={(values) => {
     fetch("http://localhost:3000/products" , {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
     })
       }}
     >
       <Form>
         <label htmlFor="img">img</label>
         <Field name="img" type="url" />
         <ErrorMessage name="img" />
 
         <label htmlFor="name">name</label>
         <Field name="name" type="text" />
         <ErrorMessage name="name" />
 
         <label htmlFor="price"> price</label>
         <Field name="price" type="number" />
         <ErrorMessage name="price" />
 
         <button type="submit">Add</button>
       </Form>
     </Formik>

    </div>
  )
}

export default Add