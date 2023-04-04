import { Component, useEffect, useState } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
	const [searchField, setSearchField] = useState(''); // [value, setValue]
	const [monsters, setMonsters] = useState([]); // [[], setValue]
	const [filteredMonsters, setFilteredMonsters] = useState(monsters); // [[], setValue];

	const onSearchChange = (event) => {
		let searchFieldValue = event.target.value.toLowerCase();
		setSearchField(searchFieldValue);
	};

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => setMonsters(users));
	}, []);

	useEffect(() => {
		let newFilteredMonsters = monsters.filter((monster) => {
			return monster.name.toLowerCase().includes(searchField);
		});
		setFilteredMonsters(newFilteredMonsters);
	}, [monsters, searchField]);

	return (
		<div className="App">
			<header className="App-header">
				<h1 className="app-title">Monsters Rolodex</h1>
				<SearchBox
					placeholder="search monsters"
					onChangeHandler={onSearchChange}
					className="search-box"
				/>
				<CardList monsters={filteredMonsters} />
			</header>
		</div>
	);
};

// class App extends Component {
// 	constructor() {
// 		super();

// 		this.state = {
// 			monsters: [],
// 			searchField: '',
// 		};
// 	}

// 	componentDidMount() {
// 		fetch('https://jsonplaceholder.typicode.com/users')
// 			.then((response) => response.json())
// 			.then((users) =>
// 				this.setState(() => {
// 					return { monsters: users };
// 				})
// 			);
// 	}

// 	onSearchChange = (event) => {
// 		let searchField = event.target.value.toLowerCase();
// 		this.setState(() => {
// 			return { searchField };
// 		});
// 	};
// 	z;
// 	render() {
// 		const { searchField, monsters } = this.state;
// 		const { onSearchChange } = this;

// 		let filteredMonsters = monsters.filter((monster) => {
// 			return monster.name.toLowerCase().includes(searchField);
// 		});

// 		return (
// 			<div className="App">
// 				<header className="App-header">
// 					<h1 className="app-title">Monsters Rolodex</h1>
// 					<SearchBox
// 						placeholder="search monsters"
// 						onChangeHandler={onSearchChange}
// 						className="search-box"
// 					/>
// 					<CardList monsters={filteredMonsters} />
// 				</header>
// 			</div>
// 		);
// 	}
// }

export default App;
