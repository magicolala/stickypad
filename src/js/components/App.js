var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

function getAppState(){
	return {

	}
}

var App = React.createClass({
	getInitialState: function(){
		return getAppState();
	},

	componentDidMount: function(){
		AppStore.addChangeListener(this._onChange);
	},

	componentUnmount: function(){
		AppStore.removeChangeListener(this._onChange);
	},

	render: function(){
		return(
			<div className="off-canvas-wrapper">
				<div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>

					<div className="off-canvas position-left reveal-for-large" id="my-info" data-off-canvas data-position="left">
						<div className="row column">
							<br />

						</div>
					</div>
					<div className="off-canvas-content" data-off-canvas-content>

					</div>
				</div>
			</div>
		);
	},

	// Update view state when change is received
	_onChange: function(){
		this.setState(getAppState());
	}
});

module.exports = App;