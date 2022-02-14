import { Button, Form, FormGroup, Input, Table } from "reactstrap";

function Product() {
    return (
        <div className="container">
            <h1 className="text-center">Product Page</h1>
            <Form className="p-4" >
                <FormGroup row>
                    <Input className="  ml-sm-auto mr-3 col-lg-3 col-sm-5 col-12" type="search" placeholder="Search" />
                    <Button className=" col-12  col-lg-2 col-sm-3 mt-sm-0 mt-3" color="danger">Add Product</Button>
                </FormGroup>
            </Form>
            <div className="table-responsive">
                <Table >
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Data source</th>
                            <th>Query</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>12</td>
                            <td>IBSM Followup</td>
                            <td>Data Source 1</td>
                            <td>Teste</td>
                            <td>
                                <ul className="d-flex justify-content-end list-unstyled mb-0" >
                                    <li >
                                        <a href="#" className="btn btn-outline-success " >Edit</a>
                                    </li>
                                    <li>
                                        <a href="#" className="btn  btn-outline-danger ml-2" >Delete</a>
                                    </li>
                                </ul>
                            </td>   </tr>
                        <tr>
                            <td>12</td>
                            <td>IBSM Followup</td>
                            <td>Data Source 1</td>
                            <td>Teste</td>
                            <td>
                                <ul className="d-flex justify-content-end list-unstyled mb-0" >
                                    <li >
                                        <a href="#" className="btn btn-outline-success " >Edit</a>
                                    </li>
                                    <li>
                                        <a href="#" className="btn  btn-outline-danger ml-2" >Delete</a>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>IBSM Followup</td>
                            <td>Data Source 1</td>
                            <td>Teste</td>
                            <td>
                                <ul className="d-flex justify-content-end list-unstyled mb-0" >
                                    <li >
                                        <a href="#" className="btn btn-outline-success " >Edit</a>
                                    </li>
                                    <li>
                                        <a href="#" className="btn  btn-outline-danger ml-2" >Delete</a>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>IBSM Followup</td>
                            <td>Data Source 1</td>
                            <td>Teste</td>
                            <td>
                                <ul className="d-flex justify-content-end list-unstyled mb-0" >
                                    <li >
                                        <a href="#" className="btn btn-outline-success " >Edit</a>
                                    </li>
                                    <li>
                                        <a href="#" className="btn  btn-outline-danger ml-2" >Delete</a>
                                    </li>
                                </ul>
                            </td>    </tr>
                        <tr>
                            <td>12</td>
                            <td>IBSM Followup</td>
                            <td>Data Source 1</td>
                            <td>Teste</td>
                            <td>
                                <ul className="d-flex justify-content-end list-unstyled mb-0" >
                                    <li >
                                        <a href="#" className="btn btn-outline-success " >Edit</a>
                                    </li>
                                    <li>
                                        <a href="#" className="btn  btn-outline-danger ml-2" >Delete</a>
                                    </li>
                                </ul>
                            </td>    </tr>
                        <tr>
                            <td>12</td>
                            <td>IBSM Followup</td>
                            <td>Data Source 1</td>
                            <td>Teste</td>
                            <td>
                                <ul className="d-flex justify-content-end list-unstyled mb-0" >
                                    <li >
                                        <a href="#" className="btn btn-outline-success " >Edit</a>
                                    </li>
                                    <li>
                                        <a href="#" className="btn  btn-outline-danger ml-2" >Delete</a>
                                    </li>
                                </ul>
                            </td>     </tr>

                    </tbody>

                </Table>
            </div>
                <div className="d-flex justify-content-end align-items-center">

                    <p className="mb-0">Rows Per Page : &nbsp;</p>
                        <select>
                            <option>  1 </option>
                            <option> 2 </option>
                            <option> 3 </option>
                            <option> 4 </option>
                        </select>
                    
                    <p className="ml-3 mb-0">1-6 of 6</p>
                    <ul className="list-unstyled d-flex align-items-center ml-2 mb-0">
                    <li>
                        <a href="#" className="text-decoration-none text-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-double-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                            <path fillRule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                        </svg></a>
                    </li>
                    <li>
                        <a href="#" className="text-decoration-none text-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-double-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                            <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg></a>
                    </li>
                </ul>
                </div>



        </div>
    );
}
export default Product;