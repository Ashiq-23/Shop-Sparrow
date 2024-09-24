import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import c1 from './images/card1.jpg';
import c2 from './images/card2.webp';
import c3 from './images/card3.webp';
import c4 from './images/card4.jpeg';
import c5 from './images/card5.webp';
import c6 from './images/card6.png';
import c7 from './images/card7.jpeg';
import c8 from './images/card8.webp';

import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';
import { useState } from 'react';

function Cards() {
  const [title, setTitle] = useState("");

  const record = [
    { idno: 1, title: 'Asus Tuf A14', price: "$1000", description: "Powerful gaming laptop with Ryzen 7 and RTX 3050.", imageUrl: c1 },
    { idno: 2, title: 'Fastrack Optimus Pro', price: "$150", description: "Stylish smartwatch with advanced fitness tracking.", imageUrl: c2 },
    { idno: 3, title: 'Lenovo ThinkPad', price: "$1200", description: "Business laptop with Intel i7 processor and 16GB RAM.", imageUrl: c3 },
    { idno: 4, title: 'Marshall Kilburn', price: "$300", description: "Portable Bluetooth speaker with powerful sound.", imageUrl: c4 },
    { idno: 5, title: 'Marshall Major IV', price: "$200", description: "Over-ear wireless headphones with long battery life.", imageUrl: c5 },
    { idno: 6, title: 'Canon EOS', price: "$900", description: "High-quality DSLR camera for photography enthusiasts.", imageUrl: c6 },
    { idno: 7, title: 'iPhone 16', price: "$1200", description: "Latest iPhone model with advanced features and 5G.", imageUrl: c7 },
    { idno: 8, title: 'ANT Keyboard & Mouse', price: "$50", description: "Ergonomic wireless keyboard and mouse combo.", imageUrl: c8 }
  ];

  return (
    <>
      <Container className="margint">
        <Row className='mb-3'>
          <Col>
            <Button variant='success' onClick={() => setTitle("")}>
              All
            </Button>
          </Col>
          {
            record.length > 0 &&
            record.map((item) => {
              return (
                <Col key={item.idno}>
                  <Button variant='info' onClick={() => setTitle(item.title)}>
                    {item.title}
                  </Button>
                </Col>
              )
            })
          }
        </Row>

        <Row>
          {
            record.length > 0 ?
              record.filter((rec) => {
                return (rec.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()));
              })
                .map((list) => {
                  return (
                    <Col lg={3} className='mb-2' key={list.idno}>
                      <Card>
                        {/* Image in square */}
                        <Card.Img variant="top" src={list.imageUrl} style={{ height: '200px', objectFit: 'cover' }} />
                        <Card.Body>
                          <Card.Title>{list.title}</Card.Title>
                          <Card.Text>
                            {list.description}
                          </Card.Text>
                          <Card.Text>
                            <strong>Price: {list.price}</strong>
                          </Card.Text>
                          {/* Buy and Add to Cart buttons */}
                          <Button variant="primary" className='me-2'>Buy</Button>
                          <Button variant="secondary">Add to Cart</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  )
                })
              : "No Data Found"
          }
        </Row>
      </Container>
    </>
  );
}

export default Cards;
