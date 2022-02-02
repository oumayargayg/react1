import React from 'react';
import './App.css';
import {Navbar, Nav, Container, NavDropdown, Carousel, Card, ListGroup, ListGroupItem} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
  <Container>
  <Navbar.Brand href="#home">Cook Healthy</Navbar.Brand > 
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#vegan">Vegan</Nav.Link>
      <Nav.Link href="#cookbook">Cookbook</Nav.Link>
      <NavDropdown title="All recipes" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Special diets</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Baking</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Snacks</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#contactUs">Contact us</Nav.Link>
      <Nav.Link eventKey={2} href="#About">
        About
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>





{/* Carousels */}

<div>
<Carousel  variant="dark"  >
  <Carousel.Item  className='allCarousel' >
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>Food is always Welcomed</h5>
      <p> <h6>“Pull up a chair. Take a taste. Come join us. Life is so endlessly delicious.”
― Ruth Reichl.</h6></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item  className='allCarousel'>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1517093157656-b9eccef91cb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Being Vegan is being Healthy</h5>
      <p> <h6> “There is no love sincerer than the love of food.”
― George Bernard Shaw, Man and Superman</h6></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item  className='allCarousel'>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5> Eat healthy and be your own doctor </h5>
      <p> <h6> “Let food be thy medicine and medicine be thy food.”
― Hippocrates</h6></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>

      <p className='paragraph'>
      “Health is a state of complete physical, mental, and social well-being and not merely the absence of disease or infirmity.<br></br>
      The food we eat gives our bodies the information and materials they need to function properly. If we don't get the right information, our metabolic processes suffer and our health declines. <br></br>
      Going vegan is a great opportunity to learn more about nutrition and cooking, and improve your diet. Getting your nutrients from plant foods allows more room in your diet for health-promoting options like whole grains, fruit, nuts, seeds and vegetables, which are packed full of beneficial fibre, vitamins and minerals.
      </p>
      

<div className='cards'>
  {/* Card1 */}
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://media-cdn.tripadvisor.com/media/photo-s/14/2e/15/fc/entrance.jpg" />
  <Card.Body>
    <Card.Title>Hard Rock Café port el Kantaoui </Card.Title>
    <Card.Text>
    Un incontournable pour les amoureux d'atmosphère unique et décontractée. Hard Rock n’oublie pas les végétariens et leurs propose un menu varié. Choisissez votre plat préféré d’un menu offrant une variété de choix (tacos , hamburgers, salades..)
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Repas sur place · Vente à emporter · Livraison sans contact</ListGroupItem>
    <ListGroupItem>Adresse : Port El Kantaoui, Zone Touristique, 4089</ListGroupItem>
    <ListGroupItem> Site-web: hardrockcafe.com</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">See more</Card.Link>
    <Card.Link href="#">Add to favorites</Card.Link>
  </Card.Body>
</Card>
{/* Card2 */}
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://lh5.googleusercontent.com/p/AF1QipMbKEUFQW9fEk30HSed6Cejn1oFXeg2OqERaoMd=w750-h401-p-k-no" />
  <Card.Body>
    <Card.Title>Fresh K - Salad Shop (Tunis)</Card.Title>
    <Card.Text>
    Spécialisé dans la cuisine végétarienne, ce « salad shop » propose des salades bien fraiches avec couleurs gustatives. Avec Fresh K dites adieu aux tomates en plastique ou à la laitue surgelée et faites la rencontre du frais, Bio et du juteux...qui sont au rendez vous chez FreshK !
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Repas sur place · Service de drive · Livraison</ListGroupItem>
    <ListGroupItem>Adresse : Rue du Lac de Côme (les Berges du Lac, à côté de Geox & agence Tecnocasa) Tunis</ListGroupItem>
    <ListGroupItem>Page Facebook: Fresh K </ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">See more</Card.Link>
    <Card.Link href="#">Add to favorites</Card.Link>
  </Card.Body>
</Card>
{/* Card3 */}
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://zesttunisia.com//wp-content/uploads/2017/05/16681660_1246191678751522_7172743208563655354_n.jpg" />
  <Card.Body>
    <Card.Title>Tam Tam (Sidi Bou  Saïd)</Card.Title>
    <Card.Text>
    Le menu de Tam Tam comporte des entrées comme les patatas bravas et les oignon-rings et des plats végétariens à savoir : les linguines aux petits légumes, les spaghettis pesto épinard champignons de Paris ou le risotto au jus de roquette.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Spécialités: FrançaiseInternationalPizzaTunisienne</ListGroupItem>
    <ListGroupItem>Adresse :Avenue du 14 Janvier Sidi Bou Saïd</ListGroupItem>
    <ListGroupItem>Page Facebook : Tam Tam </ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">See more</Card.Link>
    <Card.Link href="#">Add to favorites</Card.Link>
  </Card.Body>
</Card>



</div>

<p>
      If you ever think about doing a collaboration with us or just post your recipes on our web page you can <span className='click-here'> click here. </span> 
    </p>



      <footer>contact us</footer>




      <h1>Checkpoint React1 </h1>
    </div>
  );
}










export default App;
