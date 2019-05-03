import React, { Component } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Presentation from "../Presentation";
import NavigationBar from "./NavigationBar";

class HomePage extends Component {
  render() {
    const box = {
      height: 200,
      width: 200,
      display:"inline-block"
    }
    return (     
      <Container>
        <NavigationBar/>  
        <h1>Vos livres préférés en PDF et gratuit!</h1>
        <Row>
          <Col md={4} sm={4} xs={12}>
            <div style={box}>
              <img style={{ width: "100%", height: "100%" }} src="res/telecharger.png" alt="Télécharger votre livre en pdf" />
            </div>
          </Col>
          <Col md={8} sm={8} xs={12}>
            <Presentation
              desc="Ici, vous trouverez le livre que vous cherchez facilement en mettant 
                    à votre disposition une bibliothéque assez riche pour satisfaire tous les goûts.
                    Bienvenu chez nous!"
              actionPage="/AddBookPage"
              action="Chercher un livre"></Presentation>

          </Col>
        </Row>
        <Row>
          <Col md={8} sm={8} xs={12}>
            <Presentation
              desc="Avec votre aide nous pouvons élargir nos ressources en mettant
                    à votre disposition la possibilité de partager avec le reste
                    de notre communauté vos livres."
              actionPage=""
              action="Ajouter un livre"
            /></Col>
          <Col md={4} sm={4} xs={12}>
          <div style={box}>
            <img style={{ width: "100%", height: "100%" }} src="res/addbook.jpg" alt="Attacher un livre à notre bibliothéque" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4} sm={4} xs={12}>
          <div style={box}>
            <img style={{ width: "100%", height: "100%" }} src="res/creeraccount.png" alt="Créer votre espace personnel" />
            </div>
          </Col>
          <Col md={8} sm={8} xs={12}>
            <Presentation
              desc="Vous pouvez avoir votre espace personnel qui contiendra vos livres préférés.
                    Vous devez s'inscrire chez nous! c'est gratuit!"
              actionPage=""
              action="Créer votre compte"
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default HomePage;