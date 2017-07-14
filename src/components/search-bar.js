'use strict'

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		// this.state = { term: '' };
	}

	render() {
		return <input text="" onChange={(e) => { this.change(e) }} />
	}

	change(e) {
		console.log(e.target.value);
		const term = e.target.value;
		this.props.onSearchBarChange(term);
	}
}

export default SearchBar;
