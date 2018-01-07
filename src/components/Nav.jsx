import React from 'react';
import Search from './Search.jsx';

export default class Nav extends React.Component {
	render(){
		return(
			<nav className="navbar">
			    <div className="col-md-6 col-md-offset-3">
			      <Search 
			      	 onClickSearchButton={ this.props.onClickSearchButton }
			      />
			    </div>
			</nav>
		);
	}
}

