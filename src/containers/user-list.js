import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserList extends Component{
	renderUserList(){
		return this.props.users.map((user)=>{
			return(
				<li className="list-group-item" key={user.id}>
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

function mapStateToProps(state){
	return {
		users: state.users
	};
}

export default connect(mapStateToProps)(UserList);