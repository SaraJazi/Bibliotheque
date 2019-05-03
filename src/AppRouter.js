import React, { Component } from "react";
import { Link, NavLink, Route, BrowserRouter, Switch } from "react-router-dom";
import AddBookPage from "./Components/Views/AddBookPage";
import ConsultBooksPage from "./Components/Views/ConsultBooksPage";
import HomePage from "./Components/Views/HomePage";
import ContactPage from "./Components/Views/ContactPage";
// import { Collapse, Navbar, NavDropdown, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import NavigationBar from "./Components/Views/NavigationBar";

class AppRouter extends Component {
    state = {};
    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <NavigationBar />
                    {/* <nav className="navbar navbar-expand-lg navbar-light bg-light"> */}
                    {/* <ul className="navbar-nav mr-auto"> */}

                    {/* <Navbar bg="light" expand="lg"> */}
                    <NavLink to="/" activeClassName="is-active" exact>Acceuil</NavLink>
                    <br />
                    <NavLink to="/ConsultBooksPage" activeClassName="is-active">Nos livres</NavLink>
                    <br />
                    <NavLink to="/AddBookPage" activeClassName="is-active" exact>Partagez un livre</NavLink>
                    <br />
                    <NavLink to="/ContactPage" activeClassName="is-active">Nous écrire!</NavLink>
                    <div>
                        <Switch>
                            <Route exact path="/" component={HomePage} />
                            <Route path="/ConsultBooksPage" exact component={ConsultBooksPage} />
                            <Route path="/AddBookPage" exact component={AddBookPage} />
                            <Route path="/ContactPage" exact component={ContactPage} />
                        </Switch>
                    </div>
                    {/* </Navbar> */}
                    {/* </nav> */}
                </React.Fragment>
            </BrowserRouter>
        );
    }
}

export default AppRouter;