import { Button, Form, FormGroup, Input, Label,Breadcrumb,BreadcrumbItem } from 'reactstrap';

function Register() {
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
                        <Label htmlFor="firstname">First Name*</Label>
                        <Input type="text" name="firstname" required/>
                    </FormGroup>

                    <FormGroup className="col-md-6 col-12">
                        <Label htmlFor="lastname">Last Name*</Label>
                        <Input type="text" name="lastname" required />
                    </FormGroup>

                    <FormGroup className="col-12">
                        <Label htmlFor="email">Email Address*</Label>
                        <Input type="email" name="email" required/>
                    </FormGroup>
                </div>
                <h4>Personal Information</h4>
                <hr/>
                <div className="row">
                <FormGroup className="col-md-6 col-12">
                        <Label htmlFor="password">Password*</Label>
                        <Input type="password" name="password" required />
                    </FormGroup>

                    <FormGroup className="col-md-6 col-12">
                        <Label htmlFor="confirmpassword">Confirm Password*</Label>
                        <Input type="password" name="confirmpassword" required/>
                    </FormGroup>
                </div>
                <Button color="danger">Register</Button>
            </Form>

          
           
        </div>
    );
}
export default Register;