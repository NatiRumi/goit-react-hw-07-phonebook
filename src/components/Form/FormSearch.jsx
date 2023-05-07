import React from 'react';
// import { Component } from 'react';

// class FormSearch extends Component {



// render() {
//     return(
//         <label>
//             Find contacts by name
//                 <input
//                 type="text"
//                 name="filter"
//                 value={this.props.filter}
//                 // onChange={this.inputChange}
//                 />
//         </label>
//     )
// }
// }


const FormSearch = ({filter, onChange}) => {
    
    return(
        <label >
            Find contacts by name
            <input
            type="text"
            name="filter"
            // value={filter}
            onChange={onChange}
            />
        </label>
    )
    console.log(FormSearch)
}


export default FormSearch;