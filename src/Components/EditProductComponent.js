import { Form, FormGroup, Input, Label, Dropdown, DropdownMenu, DropdownToggle, DropdownItem, Button } from 'reactstrap';
import React from 'react';

function Edit() {
    const [dropdownOpen, setDropdownOpen] = React.useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    return (
        <div className='container'>
            <h1 className="text-center">Edit Product</h1>
            <Form>
                <div className="row">
                    <FormGroup className="col-md-6 col-12">
                        <Label htmlFor="firstname">First Name*</Label>
                        <Input type="text" name="firstname" required />
                    </FormGroup>
                    <FormGroup className="col-md-6 col-12">
                        <Label htmlFor="lastname">Last Name*</Label>
                        <Input type="text" name="lastname" required />
                    </FormGroup>

                </div>
                <div className="row">
                    <FormGroup className="col-md-6 col-12">
                        <Label htmlFor="ShopByCategories">Shop By Categories</Label>
                        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle className="col-12"><span className='fa fa-chevron-down'></span></DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>Action</DropdownItem>
                                <DropdownItem>Acadamic</DropdownItem>
                                <DropdownItem>Story</DropdownItem>
                                <DropdownItem>Comic</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </FormGroup>
                    <FormGroup className="col-md-6 col-12">
                        <Label htmlFor="discription">Discription</Label>
                        <Input type="text" name="discription" />
                    </FormGroup>
                </div>
                <div className="row">
                    <FormGroup className="col-md-6 col-12" >
                        <Input type="file" name="file" className="border my-3"></Input>
                    </FormGroup>
                    {/* <input type="file" id="actual-btn"/>
                    <label htmlFor="actual-btn" color='danger' className='btn'> File</label> */}
                </div>
                <Button color="success">Save</Button>
                <Button color="danger mx-3">Cancel</Button>
            </Form>
        </div>
    );
}

export default Edit;