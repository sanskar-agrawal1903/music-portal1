import React from 'react'

import video1 from "../../images/video.mp4";
import video2 from "../../images/video.webm";

function Subscription() {
    return (
        <section className="section-subscription">
            <div className="bg-video">
                <video className="bg-video__content" autoPlay loop muted>
                    <source src={video1} typeof="video/mp4"></source>
                    <source src={video2} typeof="video/webm"></source>
                    Your browser does not support any type of video
                </video>
            </div>

            <div className="section-subscription-plan">
        
                <h1 className="heading-secondary text-center u-margin-bottom-medium">Subscription Plans</h1>

                <div className="row">
                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture--1">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading--span card__heading--span--1">Free Plan</span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>Use Upto 7days</li>
                                        <li>2 New Playlist per day</li>
                                        <li>2 New task per day</li>
                                        <li>1 remove task per day per day</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-1">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <p className="card__price-only">Only</p>
                                        <p className="card__price-value">$0</p>
                                    </div>
                                    <a href="#" className="btn btn-white">Buy now!</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture--1">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading--span card__heading--span--1">Free Plan</span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>Use Upto 7days</li>
                                        <li>2 New Playlist per day</li>
                                        <li>2 New task per day</li>
                                        <li>1 remove task per day per day</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-1">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <p className="card__price-only">Only</p>
                                        <p className="card__price-value">$0</p>
                                    </div>
                                    <a href="#" className="btn btn-white">Buy now!</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture--1">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading--span card__heading--span--1">Free Plan</span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>Use Upto 7days</li>
                                        <li>2 New Playlist per day</li>
                                        <li>2 New task per day</li>
                                        <li>1 remove task per day per day</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-1">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <p className="card__price-only">Only</p>
                                        <p className="card__price-value">$0</p>
                                    </div>
                                    <a href="#" className="btn btn-white text-center u-margin-bottom-large">Buy now!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <a href="#" className="btn btn-green center-button">More Plans &rarr;</a>
            </div>
        </section>
    )
}

export default Subscription
