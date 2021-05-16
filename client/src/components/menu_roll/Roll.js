import React, { Component } from 'react';
import {getRandom} from "../random";

class Rolls extends Component {

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
        const {error, isLoaded, products} = this.state;
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
        } else {

            const rolls = products
                .filter(products => products.category === "Роллы");
            const random = getRandom(rolls, 2);

            return (
                <div className="Rolls">
                    <section>
                        <div className="container">
                            <section className="story-area bg-seller1 color-white pos-relative">
                                <div className="pos-bottom triangle-up"/>
                                <div className="pos-top triangle-bottom"/>
                                <div className="container">
                                    <h4 className="font-30 font-sm-20  center-text mb-25">Роллы</h4>
                                </div>
                            </section>
                            <br/>
                            <div className="row">
                                { random.map(product =>
                                    <div className="col-md-12 col-lg-6">
                                        <div className="sided-220x responsive mb-20 left-text center-sm-text">
                                            <div className="s-left mlr-sm-auto"><img src={product.imageUrl} alt="Menu Image"/>
                                            </div>
                                            <div className="s-right">
                                                <h5>{product.name}</h5>
                                                <h4 className="mtb-10"><b className="color-primary">₽{product.price}</b></h4>
                                                <p>{product.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <section>
                            <div className="container">
                                <div className="row">
                                    { rolls.map(pizza =>
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
                    </section>
                </div>
            )
        }
    }

}
export default Rolls;