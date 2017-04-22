import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectUser } from '../actions/index';
import { bindActionCreators } from 'redux';

class UserList extends Component{
	renderUserList(){
		return this.props.users.map((user)=>{
			return(
				<li 
					onClick={()=> this.props.selectUser(user)}
					className="list-group-item" 
					key={user.id}>
					<img src={user.avatar_url} alt={user.login}/>
					<span>
						{user.login}
					</span>
				</li>
			);
		});
	}

	render(){
		return(
			<ul className="list-group col-sm-4">
				{this.renderUserList()}
			</ul>
		)
	}
}

function mapStateToProps(state){ // our `state` contains list of user and activeUser
	return {
		users: state.users
	};
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		selectUser: selectUser
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);