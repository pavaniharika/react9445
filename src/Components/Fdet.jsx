import React, { createContext , useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Sidenav from '../Components/Sidenav' // Import the Sidebar component
import { Col, Row, Card, Button } from 'react-bootstrap';
import {Fdata} from '../Components/Fdata';



export const useContext = createContext()


function Fdet() {

  const [cart, setCart] = useState(0)

  const { id } = useParams();  

  let Fdet = Fdata.find((flowers)  => flowers.id == flowers)

  return (


<Row>

<Col sm={2}>
    <Sidenav />
</Col>
<Col sm={10}>
    <useContext.Provider value={cart}>
        <Button>Cart</Button>
    </useContext.Provider>

    <div className="container py-4">
      <div className=" data d-flex justify-content-center">
        <Card style={{ width: '50%' }}>
          <Card.Img variant="top" src={flowers.image} />
    
            <p>{cart}</p>
                            <p>{flowers.id}</p>
                            <p>{flowers.name}</p>
                            <p> {flowers.category}</p>
                            <p>{flowers.price}</p>
            <button className='btn btn-outline-primary' onClick={() => setCart(cart + 1)}>add to cart</button>
            <Link to="/Fdata">
              <Button variant="secondary" className="ms-2">Back to Flower List</Button>
            </Link>
        </Card>
      </div>


      <div className='product'>
        <img src={flowers.image} style={{ width: "300px" }} alt={flowers.name} />
      </div>

    </div>


    </Col>
</Row>


  );
}


export default Fdet;
/*

import { EarbudsData } from '../../Data/EarbudsData'

import { Col, Row } from 'react-bootstrap'
import Sidenav from '../../Sidenav'
import Topbar from '../../Topbar'




    const [cart, setCart] = useState(0)
    let { id } = useParams()
    let productDet = EarbudsData.find((item) => item.id == id)
    return (
        <div>

            <Row>

                <Col sm={2}>
                    <Sidenav />
                </Col>
                <Col sm={10}>
                    <useContext.Provider value={cart}>
                        <Topbar />
                    </useContext.Provider>
                    <div className='container d-flex justify-content-around border bg-dark text-light rounded align-items-center py-4'>
                        <div className='data'>
                            <p>{cart}</p>
                            <p>{productDet.id}</p>
                            <p>{productDet.Color}</p>
                            <p>{productDet.Connectivity}</p>
                            <p>{productDet.Price}</p>
                            <button className='btn btn-outline-primary' onClick={() => setCart(cart + 1)}>add to cart</button>
                        </div>
                        <div className='product'>
                            <img src={productDet.Image} style={{ width: "300px" }} alt="" />
                        </div>

                    </div>


                </Col>
            </Row>
        </div>

    )

*/
