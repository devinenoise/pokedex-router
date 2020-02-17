import React, { Component } from "react";
import "./App.css";

export default class PokeItem extends Component {
    render() {

        const { character } = this.props;

        return (
            
            <div className="container">

                <h3 className="creature">{this.props.character.pokemon}</h3>

                <p className="type"><strong>Type</strong>: {this.props.character.type_1} / {this.props.character.type_2}</p>

                <p className="attributes"><strong>Height</strong>: {this.props.character.height}"</p>
                
                <p className="attributes"><strong>Weight</strong>: {this.props.character.weight} lbs</p>
                
                <p className="attributes"><strong>HP</strong>: {this.props.character.hp}</p>
                
                <img
                    alt={this.props.character.url_image}
                    src={this.props.character.url_image} />

            </div>
            
        )
    }
}
