import React, {Component} from 'react';

class Review extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            reviews: []
        };
    }

    render() {
        const {error, isLoaded, reviews} = this.state;
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

            return (
                <div className="Review">
                    <section className="story-area bg-seller color-white pos-relative">
                        <div className="pos-bottom triangle-up"></div>
                        <div className="pos-top triangle-bottom"></div>
                        <div className="container">
                            <div className="heading">
                                <h2>Отзывы клиентов</h2>
                            </div>
                            <div className="container">
                                <div className="row">
                                    {reviews.map(review =>
                                        <div className="col-lg-6 col-md-6  col-sm-6 ">
                                            <div className="center-text mb-30">
                                                <h4>{review.heading}</h4>
                                                <p className="color-ash mb-30 mb-sm-20 mt-10">{review.text}<br/><b
                                                    className="color-primary">{review.name}</b></p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            );
        }
    }

    componentDidMount() {
        fetch('api/reviews')
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        isLoaded: true,
                        reviews: result
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

export default Review;
