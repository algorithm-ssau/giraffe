import React, {Component} from 'react';

class Review extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            reviews: [],
            name:null,
            text:null,
            heading:null,
            isSend:false
        };
        this.handleInputText=this.handleInputText.bind(this);
        this.handleInputHeading=this.handleInputHeading.bind(this);
        this.handleInputName=this.handleInputName.bind(this);
        this.handleButtonClick=this.handleButtonClick.bind(this);
    }

    sendReview(){
        const data={
            name:this.state.name,
            heading:this.state.heading,
            text:this.state.text
        }
        console.log(JSON.stringify(data));
        fetch('/api/reviews',{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type':'application/json',
                //'Access-Control-Allow-Origin':'*'
            }
        })
            .then(response=>response.json()
            .then(response=>console.log(response))
        )
        this.state.isSend=false;
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
                            <form className="form-style-1 placeholder-1">
                                <div className="row">
                                    <div className="col-md-12 text-md-center text-lg-center text-xl-center text-xs-center">
                                        <h2>Оставить отзыв</h2>
                                    </div>
                                    <div className="col-md-6"><input className="mb-20" type="text" placeholder="Имя" id="inputName" onChange={this.handleInputName}/>
                                    </div>
                                    <div className="col-md-6"><input className="mb-20" type="text" placeholder="Email"/>
                                    </div>
                                    <div className="col-md-12"><input className="mb-20" type="text" placeholder="Заголовок" id="inputHeading" onChange={this.handleInputHeading}/>
                                    </div>
                                    <div className="col-md-12">
                                        <textarea className="h-200x ptb-20" placeholder="Отзыв" id="inputReview" onChange={this.handleInputText}/>
                                    </div>
                                    <div className="col-md-12 text-md-center">
                                        <h6 className="center-text mt-40 mt-sm-30 mb-20">
                                            <a href="#" className="btn-primaryc secondary plr-50 mlr-5 mb-10" onClick={this.handleButtonClick}><b>ОТПРАВИТЬ</b></a>
                                        </h6>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            );
        }
    }

    handleInputName(event) {
        this.setState({name: event.target.value});
    }
    handleInputHeading(event) {
        this.setState({heading: event.target.value});
    }
    handleInputText(event) {
        this.setState({text: event.target.value});
    }
    handleButtonClick(event) {
        this.setState( {isSend: true});
        this.sendReview();
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
