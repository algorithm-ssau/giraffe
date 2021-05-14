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

                            <div className="swiper-container" data-slide-effect="slide" data-autoheight="false"
                                 data-swiper-speed="500" data-swiper-margin="25" data-swiper-slides-per-view="3"
                                 data-swiper-breakpoints="true" data-scrollbar="true" data-swiper-loop="true"
                                 data-swpr-responsive="[1, 2, 2, 2]">

                                <div className="swiper-wrapper pb-90 pb-sm-60 left-text center-sm-text">
                                    <div className="swiper-slide">
                                    {reviews.map(review =>
                                        <div>
                                            <h4>{review.heading}</h4>
                                            <p className="color-ash mb-50 mb-sm-30 mt-20">{review.text}</p>
                                            <h6><b className="color-primary">{review.name}</b>
                                            </h6>
                                        </div>
                                    )}
                                    </div>
                                </div>
                                <div className="swiper-pagination"></div>
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
