import React, {Component, Fragment} from "react";
import Header from '../includes/header/header';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import HomePage from "./../pages/home/index";
import LoginPage from "./../pages/login/index";
import CatalogPage from "./../pages/catalog/index";
import ProductInfo from "./../pages/catalog/product";
import BasketPage from "./../pages/basket/index";
import NotFound from "./../pages/404/index";

import {connect} from 'react-redux';
import Alert from "../components/alert/index";


// this.props.match.params.id   -> /:id

class Index extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <Header/>
                    { this.props.alert.isOpen ? <Alert /> : null}
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route exact path="/login" component={LoginPage}/>
                        <Route exact path="/catalog" component={CatalogPage}/>
                        <Route exact path="/product/:id" component={ProductInfo}/>
                        <Route exact path="/basket" component={BasketPage}/>
                        <Route component={NotFound}/>

                    </Switch>
                </BrowserRouter>
            </Fragment>
        )
    }

    componentDidMount() {
        fetch('./json/products.json').then(data => data.json())
        .then(prods => this.props.dispatch({type:"PRODS_ORIGINAL_ADD", data: prods}));
    }
}

const mapStateToProps = (store) => {
    return {
        alert: store.alert
    }
}

export default connect(mapStateToProps)(Index);
