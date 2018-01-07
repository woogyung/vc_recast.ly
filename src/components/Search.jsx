import React from 'react';

export default class Search extends React.Component {
  
  constructor(props){
  	super(props)
  	this.state={
  		searchText : null
  	}
  };

  searchTextTyping(ev){
  	this.setState({
  		searchText : ev.target.value
  	})
  };

  render(){
  	return(
  		<div className="search-bar form-inline">
		    <input className="form-control" type="text" onChange={this.searchTextTyping.bind(this)}/>
		    <button className="btn hidden-sm-down" onClick={()=> this.props.onClickSearchButton(this.state.searchText)}>
		      <span className="glyphicon glyphicon-search"></span>
		    </button>
		</div>
  	);
  };

}


