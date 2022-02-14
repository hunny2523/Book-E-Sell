import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, FormGroup, Label, Card, CardImg, CardBody, CardHeader, CardText, CardTitle, Button, CardSubtitle } from 'reactstrap';
import React from 'react';

function ProductList() {
    const [dropdownOpen, setDropdownOpen] = React.useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    return (
        <div className="container">
            <h1 className="text-center">Product Listing</h1>
            <div className='row'>
                <div className='col-12 col-sm-10'>Product Name-14366 items</div>
                <div className='col-12 col-sm-2'>
                    <FormGroup className="d-flex align-items-center">
                        <Label htmlFor="dropdown">Sort By </Label>
                        <Dropdown isOpen={dropdownOpen} name="dropdown" id="dropdown" toggle={toggle} className="mx-2">
                            <DropdownToggle caret> a - z</DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>Action</DropdownItem>
                                <DropdownItem>Acadamic</DropdownItem>
                                <DropdownItem>Story</DropdownItem>
                                <DropdownItem>Comic</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </FormGroup>
                </div>
            </div>
            <div className='row'>
             
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                    <Card style={{ width: "227.67px", height: "494.17px" }} >
                        <CardImg style={{ width: "227.67px", height: "188.5px" }} src="https://images-na.ssl-images-amazon.com/images/I/81S4UKSayqL.jpg" alt="Tenali Rama" />
                        <CardBody>
                            <CardTitle>Tenali Rama</CardTitle>
                            <CardSubtitle>Author:</CardSubtitle>
                            <CardText >
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, omnis 
                            </CardText>
                            <CardText>
                                MRP <span className='fa fa-inr'></span><s>1000</s><span className='text-success'> 20.00% OFF</span>
                            </CardText>
                            <CardText><span className='fa fa-inr'></span> 800</CardText>
                            <Button color="danger" className="w-100 ">ADD TO CART</Button>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                    <Card style={{ width: "227.67px", height: "494.17px" }} >
                        <CardImg style={{ width: "227.67px", height: "188.5px" }} src="https://images-na.ssl-images-amazon.com/images/I/81S4UKSayqL.jpg" alt="Tenali Rama" />
                        <CardBody>
                            <CardTitle>Tenali Rama</CardTitle>
                            <CardSubtitle>Author:</CardSubtitle>
                            <CardText >
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, omnis 
                            </CardText>
                            <CardText>
                                MRP <span className='fa fa-inr'></span><s>1000</s><span className='text-success'> 20.00% OFF</span>
                            </CardText>
                            <CardText><span className='fa fa-inr'></span> 800</CardText>
                            <Button color="danger" className="w-100 ">ADD TO CART</Button>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                    <Card style={{ width: "227.67px", height: "494.17px" }} >
                        <CardImg style={{ width: "227.67px", height: "188.5px" }} src="https://images-na.ssl-images-amazon.com/images/I/81S4UKSayqL.jpg" alt="Tenali Rama" />
                        <CardBody>
                            <CardTitle>Tenali Rama</CardTitle>
                            <CardSubtitle>Author:</CardSubtitle>
                            <CardText >
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, omnis 
                            </CardText>
                            <CardText>
                                MRP <span className='fa fa-inr'></span><s>1000</s><span className='text-success'> 20.00% OFF</span>
                            </CardText>
                            <CardText><span className='fa fa-inr'></span> 800</CardText>
                            <Button color="danger" className="w-100 ">ADD TO CART</Button>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                    <Card style={{ width: "227.67px", height: "494.17px" }} >
                        <CardImg style={{ width: "227.67px", height: "188.5px" }} src="https://images-na.ssl-images-amazon.com/images/I/81S4UKSayqL.jpg" alt="Tenali Rama" />
                        <CardBody>
                            <CardTitle>Tenali Rama</CardTitle>
                            <CardSubtitle>Author:</CardSubtitle>
                            <CardText >
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, omnis 
                            </CardText>
                            <CardText>
                                MRP <span className='fa fa-inr'></span><s>1000</s><span className='text-success'> 20.00% OFF</span>
                            </CardText>
                            <CardText><span className='fa fa-inr'></span> 800</CardText>
                            <Button color="danger" className="w-100 ">ADD TO CART</Button>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                    <Card style={{ width: "227.67px", height: "494.17px" }} >
                        <CardImg style={{ width: "227.67px", height: "188.5px" }} src="https://images-na.ssl-images-amazon.com/images/I/81S4UKSayqL.jpg" alt="Tenali Rama" />
                        <CardBody>
                            <CardTitle>Tenali Rama</CardTitle>
                            <CardSubtitle>Author:</CardSubtitle>
                            <CardText >
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, omnis 
                            </CardText>
                            <CardText>
                                MRP <span className='fa fa-inr'></span><s>1000</s><span className='text-success'> 20.00% OFF</span>
                            </CardText>
                            <CardText><span className='fa fa-inr'></span> 800</CardText>
                            <Button color="danger" className="w-100 ">ADD TO CART</Button>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                    <Card style={{ width: "227.67px", height: "494.17px" }} >
                        <CardImg style={{ width: "227.67px", height: "188.5px" }} src="https://images-na.ssl-images-amazon.com/images/I/81S4UKSayqL.jpg" alt="Tenali Rama" />
                        <CardBody>
                            <CardTitle>Tenali Rama</CardTitle>
                            <CardSubtitle>Author:</CardSubtitle>
                            <CardText >
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, omnis 
                            </CardText>
                            <CardText>
                                MRP <span className='fa fa-inr'></span><s>1000</s><span className='text-success'> 20.00% OFF</span>
                            </CardText>
                            <CardText><span className='fa fa-inr'></span> 800</CardText>
                            <Button color="danger" className="w-100 ">ADD TO CART</Button>
                        </CardBody>
                    </Card>
                </div>
         
               

            </div>
            <ul className="pagination justify-content-center my-3 ">
                <li className="page-item"> <a className="page-link" href="#"> &lt; </a> </li>
                <li className="page-item"> <a className="page-link" href="#"> 1 </a> </li>
                <li className="page-item"> <a className="page-link" href="#"> 2 </a> </li>
                <li className="page-item"> <a className="page-link" href="#"> 3 </a> </li>
                <li className="page-item"> <a className="page-link" href="#"> 4 </a> </li>
                <li className="page-item"> <a className="page-link" href="#"> &gt; </a> </li>
            </ul>
        </div>
    );
}
export default ProductList;