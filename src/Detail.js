import React, { Component } from 'react'
import { getPokemon } from './PokemonApi.js'
import PokeItem from './PokeItem.js';
import SearchBar from './SearchOptions.js';

export default class Detail extends Component {
    state = { character: {} }

    async componentDidMount() {
        const data = await getPokemon(this.props.match.params.pokeId);

        if (data.body.results) {

            this.setState({ character: data.body.results[0] })
        }

    }


    render() {
        const { character } = this.state;

        return (
            <div>
                <PokeItem character={character} />
            </div>
        )
    }
}
