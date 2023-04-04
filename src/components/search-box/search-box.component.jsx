import { Component } from 'react';
import './search-box.styles.css';

const SearchBox = ({ placeholder, onChangeHandler, className }) => (
	<input
		type="search"
		placeholder={placeholder}
		onChange={onChangeHandler}
		className={className}
	/>
);

// class SearchBox extends Component {
// 	render() {
// 		return (
// 			<input
// 				type="search"
// 				placeholder={this.props.placeholder}
// 				onChange={this.props.onChangeHandler}
// 				className={this.props.className}
// 			/>
// 		);
// 	}
// }

export default SearchBox;
