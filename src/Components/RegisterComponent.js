import { Button, Form, FormGroup, Input, Label,FormFeedback,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import React,{useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from 'axios';

function Register() {
    const [user,setRegisterUser]= useState({
        firstName: "",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })
    
    const [touched,SetTouched]=useState({
        firstName:false,
        lastName:false,
        email:false,
        password:false,
        confirmPassword:false
    })


    const handleBlur = (field) =>(evt)=> {
        SetTouched({
             ...touched, [field]: true 
        });
    }
    const validate=(firstName,lastName,email,password,confirmPassword)=> {
        const errors = {
            firstName: '',
            lastName:'',
            email:'',
            password:'' ,
            confirmPassword :''        
        };

        if (touched.firstName && firstName.length < 3)
            errors.firstName = 'First Name should be >= 3 characters';
        else if (touched.firstName && user.firstName.length > 10)
            errors.firstName = 'First Name should be <= 10 characters';

        if (touched.lastName && lastName.length < 3)
            errors.lastName = 'Last Name should be >= 3 characters';
        else if (touched.lastName && lastName.length > 10)
            errors.lastName = 'Last Name should be <= 10 characters';

        if (touched.password && password.length < 5)
            errors.password = 'password should be >= 3 characters';
        else if (touched.password && password.length > 10)
            errors.password = 'password should be <= 10 characters';

        if (touched.confirmPassword && confirmPassword!==password)
            errors.confirmPassword = 'password and confirm Password must be same';

        if(touched.email && email.split('').filter(x => x === '@' ).length !== 1)
            errors.email = 'Please enter valid email';
        
        return errors;
    }
    const errors = validate(user.firstName,user.lastName,user.email,user.password,user.confirmPassword);
    const checkError=()=>{
        if(errors.firstName||errors.lastName|| errors.email||errors.password||errors.confirmPassword){
            return false;
        }
        else{
            return true;
        }
    }

    const handleChange=(evt)=>{
        const {name,value}=evt.target;
        setRegisterUser({
            ...user,
            [name]:value
        })
    }
    const navigate=useNavigate();

    const register=()=>{
        let a=checkError();

        console.log(a)
        // const {firstName,lastName,email,password,confirmPassword}=user;
        if(a) {
            axios.post("http://localhost:5000/register",user)
            .then(res=>{res.data.message==="Successfully registered"?( ()=>{navigate("/");alert(res.data.message)})() :alert(res.data.message)
                }
            );
        }
        else{
            alert("invalid input");
        }
    }

    return (
        <div className="container">
            
             <Breadcrumb className="mx-auto">
                <BreadcrumbItem color="dark"><a href="#">Home</a></BreadcrumbItem>
                <BreadcrumbItem active className="text-danger">Create an Account</BreadcrumbItem>
            </Breadcrumb>
            <h1 className="text-center">Login or Create an Account</h1>

            <Form>
                <h4>Personal Information</h4>
                <hr />
                <p>Please enter the following information to create your account</p>
                <div className='row'>
                    <FormGroup className="col-md-6 col-12">
                        <Label htmlFor="firstName">First Name*</Label>
                        <Input type="text"   valid={errors.firstName === ''}
                                        invalid={errors.firstName !== ''} onBlur={handleBlur('firstName')} name="firstName" value={user.firstName} onChange={handleChange} required/>
                                         <FormFeedback>{errors.firstName}</FormFeedback>
                    </FormGroup>

                    <FormGroup className="col-md-6 col-12">
                        <Label htmlFor="lastName">Last Name*</Label>
                        <Input type="text" name="lastName" value={user.lastName}  valid={errors.lastName === ''}
                                        invalid={errors.lastName !== ''} onBlur={handleBlur('lastName')} onChange={handleChange} required />
                        <FormFeedback>{errors.lastName}</FormFeedback>
                    </FormGroup>

                    <FormGroup className="col-12">
                        <Label htmlFor="email">Email Address*</Label>
                        <Input type="email" name="email" value={user.email}  valid={errors.email === ''}
                                        invalid={errors.email !== ''} onBlur={handleBlur('email')} onChange={handleChange} required/>
                        <FormFeedback>{errors.email}</FormFeedback>
                    </FormGroup>
                </div>
                <h4>Personal Information</h4>
                <hr/>
                <div className="row">
                <FormGroup className="col-md-6 col-12">
                        <Label htmlFor="password">Password*</Label>
                        <Input type="password" name="password" value={user.password}  valid={errors.password === ''}
                                        invalid={errors.password !== ''} onBlur={handleBlur('password')} onChange={handleChange} required />
                        <FormFeedback>{errors.password}</FormFeedback>
                    </FormGroup>

                    <FormGroup className="col-md-6 col-12">
                        <Label htmlFor="confirmPassword">Confirm Password*</Label>
                        <Input type="password" name="confirmPassword" valid={errors.confirmPassword === ''}
                                        invalid={errors.confirmPassword !== ''} onBlur={handleBlur('confirmPassword')} value={user.confirmPassword} onChange={handleChange}  required/>
                        <FormFeedback>{errors.confirmPassword}</FormFeedback>
                    </FormGroup>
                </div>
                <Button color="danger" onClick={register} >Register</Button>
            </Form>

        </div>
    );
}
export default Register;