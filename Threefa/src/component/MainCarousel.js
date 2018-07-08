import React, { Component } from 'react';
import { Carousel, ButtonToolbar, Button } from 'react-bootstrap';
import './MainCarousel.css';

export default class MainCarousel extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img src="assets/restaurant-1.jpg" />
                    <Carousel.Caption>
                          <div className='insideitem'>
                            <h1>Start Funding</h1>
                            <ButtonToolbar>
                                <Button> What is Threefa?</Button>
                                <Button>Start My Page</Button>
                            </ButtonToolbar>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="assets/restaurant-1.jpg" />
                    <Carousel.Caption>
                          <div className='insideitem'>
                            <h1>Start Funding</h1>
                            <ButtonToolbar>
                                <Button> What is Threefa?</Button>
                                <Button>Start My Page</Button>
                            </ButtonToolbar>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="assets/restaurant-1.jpg" />
                    <Carousel.Caption>
                          <div className='insideitem'>
                            <h1>Start Funding</h1>
                            <ButtonToolbar>
                                <Button> What is Threefa?</Button>
                                <Button>Start My Page</Button>
                            </ButtonToolbar>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}
