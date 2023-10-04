// import { useState } from "react"
import {useFormik} from 'formik'
import * as Yup from 'yup';
export default function Login(props) {

    // const [email, setEmail] = useState('');
    // const [Pass, setPass] = useState('');

    // const HandleSubmit = (e) => {
    //     e.preventDefault();
        

    // }
    const formik = useFormik({
        initialValues:{
            email:'',
            password:'',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email format').required('Email is required'),
            password: Yup.string().required('Password is required'),
           
          }),
        onSubmit:values=>{
            console.log('form data', values)
        }
    })

    return (
        <div className="auth-form-container">
            <h2>Login Form</h2>
            <form onSubmit={formik.handleSubmit} className="login-form">

                <label htmlFor="email">Email</label>
                <input 
                type="email" 
                id="email" 
                name="email"
                placeholder="email@gmail.com" 
                value={formik.values.email} 
                onChange={formik.handleChange}>
                </input>

                <label htmlFor="Password">Password</label>
                <input 
                type="Password" 
                id="Password" 
                name="Password"
                placeholder="Password" 
                value={formik.values.password} 
                onChange={formik.handleChange} >
                </input>

                <button type="submit">Log in</button>

                <button 
                className="link-btn" 
               >Don't have an account ? Register now</button>

            </form>
        </div>
    )
}