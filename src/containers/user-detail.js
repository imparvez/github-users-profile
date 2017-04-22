import React, {Component} from 'react';
import { connect } from 'react-redux';
import { activeUser } from '../actions/index';

class UserDetail extends Component {
	render(){
		if(!this.props.user){
			return <div className="col-sm-8 initial-line">Select a user to get started.</div>
		}
		console.log("USER DETAIL: ", this.props.user);
		return (
			<div className="col-sm-8 detail-box">
				<h3>Details For: </h3>
				<div className="poster-container">
					<img src={this.props.user.avatar_url} alt={this.props.user.login}/>
				</div>
				<p className="userName">
					<a href={this.props.user.html_url}>@{this.props.user.login}</a>
				</p>
				<span className="user_location">
					{(this.props.user.user_location != "") ? this.props.user.user_location: ""}
				</span>
				<span className="user_mail_at">{(this.props.user.user_mail_at != "") ? this.props.user.user_mail_at: ""}</span>
				<span className="user_website_url">
					<a href={(this.props.user.user_website_url != "") ? this.props.user.user_website_url: ""}>{(this.props.user.user_website_url != "") ? this.props.user.user_website_url: ""}</a>
				</span>
			</div>
		)
	}
}

/*
* This function is a glue between react and redux
*/
function mapStateToProps(state){
	/* 
	* whatever is returned will show up as props inside of BookList
	*/
	return {
		user: state.activeUser
	};
}


export default connect(mapStateToProps)(UserDetail);