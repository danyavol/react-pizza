import React, {Fragment, Component} from "react";
import {connect} from 'react-redux';
import './style.scss';
import {Link} from "react-router-dom";


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={'slick-butt-next slick-arrow'}
            onClick={onClick}
        />
    );
}
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={'slick-butt-prev slick-arrow'}
            onClick={onClick}
        />
    );
}

//
// <img key={i} src={item.src} alt={item.title} />

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carouselItems: undefined
        }
    }


    render() {
        var settings = {
            centerMode: true,
            centerPadding: "0px",
            // slidesToShow: 1,
            dots: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            draggable: false
        };
        return (
            <div className={"wrapper"}>
                <h1 className={"page_title"}>{"Главная"}</h1>
                <div className={"home_slider"}>
                {
                    (this.state.carouselItems !== undefined && this.state.carouselItems.length > 0) ?
                        <Slider {...settings}>
                            {
                                this.state.carouselItems.map((item,i) =>
                                    <Link key={i} to={"/product/"+item.id}><div className={"carousel-img"} style={{backgroundImage: 'url('+item.src+')' }} >{""}</div></Link>
                                )}
                        </Slider> : "нету картинок"
                }
                </div>
                <p style={{fontSize: "1.3rem", marginTop: "30px"}}>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut sem nulla pharetra diam sit. Ullamcorper eget nulla facilisi etiam dignissim. Sed arcu non odio euismod lacinia at quis risus. Eros donec ac odio tempor orci dapibus. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Suscipit adipiscing bibendum est ultricies. At volutpat diam ut venenatis tellus in. Dui sapien eget mi proin sed libero enim. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit. Eget velit aliquet sagittis id consectetur purus ut faucibus. Leo in vitae turpis massa sed elementum tempus. Egestas erat imperdiet sed euismod nisi. Diam sollicitudin tempor id eu nisl nunc. Auctor eu augue ut lectus."}</p>
                <p style={{fontSize: "1.3rem"}}>{"Cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Phasellus faucibus scelerisque eleifend donec pretium. Libero nunc consequat interdum varius. Libero nunc consequat interdum varius sit amet mattis. In est ante in nibh mauris cursus. Id nibh tortor id aliquet lectus. Tincidunt arcu non sodales neque. Posuere morbi leo urna molestie at elementum eu. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam."}</p>



            </div>
        )
    }

    componentDidMount() {
        let {prods} = this.props;
        if (prods.length > 0 && this.state.carouselItems === undefined) {
            let array = prods.filter(item => item.status.toLowerCase() === "top");
            this.setState({carouselItems: array});
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let {prods} = this.props;
        if (prods !== prevProps.prods && prods.length > 0 && this.state.carouselItems === undefined) {
            let array = prods.filter(item => item.status.toLowerCase() === "top");
            this.setState({carouselItems: array});
        }
    }


}

const mapStateToProps = (store) => {
    return {prods: store.prods.original}
}

export default connect(mapStateToProps)(HomePage);
