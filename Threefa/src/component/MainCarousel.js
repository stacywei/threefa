import React, { Component } from 'react';
import { Carousel, ButtonToolbar, Button } from 'react-bootstrap';
import './MainCarousel.css';
import { Link } from 'react-router-dom';

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
                                <a href="./startform"><Button>Start My Page</Button></a>
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
                                <a href="/startform"><Button>Start My Page</Button></a>
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
