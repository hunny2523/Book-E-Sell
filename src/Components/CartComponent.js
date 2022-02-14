
import { Card, Media, Button, CardBody, CardImg, CardTitle, CardText } from 'reactstrap';


function Cart() {
    return (
        <div className="container">
            <h1 className="text-center">Cart Page</h1>
            <div className="mx-auto" style={{ width: "585.2px"}}>
                <h5>
                    <span>My Shopping Bag (3 items)</span>
                    <span className="float-right">Total price: 3000</span>
                </h5>
                {/* <Card style={{ width: "585.67px", height: "149.2" }} className="d-flex" >
                    <CardImg  style={{ width: "150px", height: "117.2px" }} src="https://images-na.ssl-images-amazon.com/images/I/81S4UKSayqL.jpg" alt="Tenali Rama" />
                    <CardBody right>
                        <CardTitle>Campus Sutra</CardTitle>
                        <CardText>Cart item name</CardText>
                        <Button color="danger" className="w-100 ">ADD TO CART</Button>
                    </CardBody>
                </Card> */}
                <Media tag="li" className="border my-3 d-flex" style={{  height: "149.2px", padding: "15px" }}>
                    <Media >
                        <Media object src="https://n2.sdlcdn.com/imgs/c/t/u/TENALI-RAMA-AND-THE-BRINJALS-SDL478322893-1-9d81f.jpg" style={{ width: "150px", height: "117.2px" }} />
                    </Media>
                    <Media body className="ml-3">
                        <Media heading>Tenali Rama</Media>
                        <p>Book Name</p>
                        <div>
                            <span role="button" className=' btn bg-danger text-light p-1 fa fa-plus'></span>
                            <span className='px-1 mx-2 ' >1</span>
                            <span role="button" className=' btn bg-danger text-light p-1 fa fa-minus'></span>
                        </div>
                    </Media>
                    <Media body className="text-right">
                        <Media heading>500</Media>
                        <p><s>1000</s> <span className='text-danger font-weight-bold'>50% off</span></p>
                        <p role="button" className='text-danger'>Remove</p>
                    </Media>
                </Media>

                <Media tag="li" className="border my-3 d-flex" style={{ width: "585.2px", height: "149.2px", padding: "15px" }}>
                    <Media >
                        <Media object src="https://n2.sdlcdn.com/imgs/c/t/u/TENALI-RAMA-AND-THE-BRINJALS-SDL478322893-1-9d81f.jpg" style={{ width: "150px", height: "117.2px" }} />
                    </Media>
                    <Media body className="ml-3">
                        <Media heading>Tenali Rama</Media>
                        <p>Book Name</p>
                        <div>
                            <button className=' btn bg-danger text-light p-1 fa fa-plus'></button>
                            <span className='px-1 mx-2 ' >1</span>
                            <button  className=' btn bg-danger text-light p-1 fa fa-minus'></button>
                        </div>
                    </Media>
                    <Media body className="text-right">
                        <Media heading>500</Media>
                        <p><s>1000</s> <span className='text-danger font-weight-bold'>50% off</span></p>
                        <p className='text-danger'>Remove</p>
                    </Media>
                </Media>

                <Media tag="li" className="border my-3 d-flex" style={{ width: "585.2px", height: "149.2px", padding: "15px" }}>
                    <Media >
                        <Media object src="https://n2.sdlcdn.com/imgs/c/t/u/TENALI-RAMA-AND-THE-BRINJALS-SDL478322893-1-9d81f.jpg" style={{ width: "150px", height: "117.2px" }} />
                    </Media>
                    <Media body className="ml-3">
                        <Media heading>Tenali Rama</Media>
                        <p>Book Name</p>
                        <div>
                            <span type="button" className=' btn bg-danger text-light p-1 fa fa-plus'></span>
                            <span className='px-1 mx-2 ' >1</span>
                            <span type="button" className=' btn bg-danger text-light p-1 fa fa-minus'></span>
                        </div>
                    </Media>
                    <Media body className="text-right">
                        <Media heading>500</Media>
                        <p><s>1000</s> <span className='text-danger font-weight-bold'>50% off</span></p>
                        <p role="button" className='text-danger'>Remove</p>
                    </Media>
                </Media>

            <Button color="danger" className="my-3"> Place Order</Button>
            </div>
        </div>
    );
}
export default Cart;