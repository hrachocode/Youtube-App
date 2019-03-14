import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<ul>
					<li>1</li>
					<li>2</li>
					<li>3</li>
					<li>4</li>
					<li>5</li>
				</ul>
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.querySelector('#root')
)