import React from 'react';
import './card.css';

const card = (props) => {
    return (
        <div className="cardContainer">
            <div className="card">
                <iframe
                    width="100%"
                    height="100%"
                    src={props.frame}
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and
                        make up the bulk of the card's content.</p>
                    <a href={props.frame} className="btn btn-primary" target='_blank'>Full Screen</a>
                </div>
            </div>
        </div>

    )
}

export default card;
