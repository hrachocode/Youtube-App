import React from 'react';
import ReactDOM from 'react-dom';

// API request component
import youtube from './api/youtube';

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			q: 'surfing',
			videos: []
		}
	}

	getRequest = () => {	
		youtube.get('/youtube/v3/search', {
			params: {
				q: this.state.q,
				part: 'snippet',
				key: 'AIzaSyBV2a7cUURIG4h1mhkLuevGms445b0dkLo'
			}
		}).then(response => {
			let videos = response.data.items;
			this.setState({
				videos
			})
		})
		.catch(error => console.log(error))
	}

	componentDidMount() {
		this.getRequest();
	}

	render() {
		
		return (
			<div>
				{/*  */}
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.querySelector('#root')
)