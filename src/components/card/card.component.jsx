import { Component } from 'react';
import './card.styles.css';

const Card = ({ monster }) => {
	const { id, name, email } = monster;
	return (
		<div className="card-container">
			<img
				src={`https://robohash.org/${id}?set=set3&size=180x180`}
				alt={`monster ${name}`}
			/>
			<h2 key={id}>{name}</h2>
			<p>{email}</p>
		</div>
	);
};

// class Card extends Component {
// 	render() {
// 		const { id, name, email } = this.props.monster;

// 		return (
// 			<div className="card-container">
// 				<img
// 					src={`https://robohash.org/${id}?set=set3&size=180x180`}
// 					alt={`monster ${name}`}
// 				/>
// 				<h2 key={id}>{name}</h2>
// 				<p>{email}</p>
// 			</div>
// 		);
// 	}
// }

export default Card;
