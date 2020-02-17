import React, { Component } from 'react'



export default class SearchBar extends Component {

    render() {
        return (
            <div id="search">
                <form onSubmit={this.props.handleSearch}>
                    <input required
                        value={this.props.searchQuery}
                        onChange={this.props.handleChange} />
                    <button>Search</button>
                </form>
            </div>
        );
    }
}