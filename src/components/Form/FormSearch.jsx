import React from 'react';
import { Component } from 'react';

class FormSearch extends Component {
state = {
    filter: ''
}

inputChange = e => {
    e.preventDefault(); 
    // console.log(this.state);
    // console.log(e.currentTarget.value);
    this.setState({ filter: e.currentTarget.value});
    // console.log(this.state);
    this.props.filter(this.state);   
}


render() {
    return(
        <label>
            Find contacts by name
                <input
                type="text"
                name="filter"
                value={this.state.filter}
                onChange={this.inputChange}
                />
        </label>
    )
}
}


export default FormSearch;