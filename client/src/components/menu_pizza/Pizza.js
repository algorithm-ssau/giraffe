import React, { Component } from 'react';
import {getRandom} from '../random'
class Pizza extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            products: []
        };
    }

    componentDidMount() {
        fetch('api/products')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        products: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, products } = this.state;
        if (error) {
            return (
                <div className="col">
                    Error: {error.message}
                </div>
            );
        } else if (!isLoaded) {
            return (
                <div className="col">
                    Loading...
                </div>
            );
        } else{

            let pizzas = products
                .filter(products => products.category === "Пицца");

            pizzas = pizzas.slice(0, 12);
            const result = getRandom(pizzas, 4);

            return (
                <div className="Pizza">
                    <section className="story-area left-text center-sm-text">
                        <div className="container">
                            <section className="story-area bg-seller color-white pos-relative">
                                <div className="pos-bottom triangle-up"/>
                                <div className="pos-top triangle-bottom"/>
                                <div className="container">
                                    <h4 className="font-30 font-sm-20  center-text mb-25">Пицца</h4>
                                </div>
                            </section>
                            <br/>
                            <div className="row">
                                {result.map(product =>
                                <div className="col-lg-3 col-md-4  col-sm-6 ">
                                    <div className="center-text mb-30">
                                        <div className="ïmg-200x mlr-auto pos-relative">
                                            <img src= {product.imageUrl} alt=""/>
                                        </div>
                                        <h5 className="mt-20">{product.name}</h5>
                                        <h4 className="mt-5 color-primary"><b>{product.price}Р</b></h4>
                                    </div>
                                </div>
                                )}
                            </div>
                        </div>
                    </section>
                    <section className="bg-lite-blue">
                        <div className="container">
                            <div className="row">
                                { pizzas.map(pizza =>
                                <div className="col-md-6">
                                    <div className="sided-90x mb-30 ">
                                        <div className="s-left"><img className="br-3" src={pizza.imageUrl} alt="Menu Image"/></div>
                                        <div className="s-right">
                                            <h5 className="mb-10"><b>{pizza.name}</b><b
                                                className="color-primary float-right">{pizza.price}Р</b></h5>
                                            <p className="pr-70">{pizza.description}</p>
                                        </div>
                                    </div>
                                </div>
                                )}
                            </div>
                        </div>
                    </section>
                </div>
            )
        }
    }
}
export default Pizza;