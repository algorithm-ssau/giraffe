
import React, { Component } from 'react';

class Popular extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            products: []
        };
    }

    render(){
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
        }
        else {
            const pizza = products
                .filter(products => products.category === "Пицца");
            const popular = pizza.slice(0, 4);

            return (
                <div className="Popular">
                    <section className="story-area bg-seller color-white pos-relative">
                        <div className="pos-bottom triangle-up"/>
                        <div className="pos-top triangle-bottom"/>
                        <div className="container">
                            <div className="heading">
                                <h2>Популярные позиции</h2>
                            </div>
                            <div className="row">
                                { popular.map(product =>
                                <div className="col-lg-3 col-md-4  col-sm-6 ">
                                    <div className="center-text mb-30">
                                            <div className="ïmg-200x mlr-auto pos-relative">
                                                <img src={product.imageUrl} alt=""/>
                                            </div>
                                            <h5 className="mt-20">{product.name}</h5>
                                            <h4 className="mt-5"><b>{product.price} ₽</b></h4>
                                    </div>
                                </div>
                                ) }
                            </div>
                        </div>
                    </section>
                </div>
            );
        }
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
}
export default Popular;
