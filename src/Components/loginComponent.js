import { Button, Form, FormGroup, Input, Label ,Breadcrumb,BreadcrumbItem} from 'reactstrap';
function Login() {
    return (
        <div className="container">
             <Breadcrumb className="mx-auto">
                <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                <BreadcrumbItem active>Login</BreadcrumbItem>
            </Breadcrumb>
            <h1 className="text-center mb-4">
                Login or create an Account
            </h1>
            <div className="row">
                <div className="col-md-6 col-12 ">
                    <h4>New Customer</h4>
                    <hr />
                    <p>Registration is free and easy</p>
                    <ul>
                        <li>Faster checkout</li>
                        <li>Save multiple shipping address</li>
                        <li>View and track orders and more</li>
                    </ul>
                    <Button color="danger mt-md-5 mt-2 mb-4 mb-md-0">Create an Account</Button>
                </div>
                <div className="col-md-6 col-12 ">
                    <h4>Registered Customers</h4>
                    <hr />
                    <p>If you have an account with us, please log in.</p>
                    <Form>
                        <FormGroup>
                            <Label htmlFor="email">Email Address</Label>
                            <Input type="email" name="email" />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" name="password" />
                        </FormGroup>
                        <FormGroup>
                            <Button  color="danger">
                                Login
                            </Button>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Login;