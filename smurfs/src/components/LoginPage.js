import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner'
import { login } from '../../actions';
import PinkButton from "../../components/Button/PinkButton";
import GridContainer from "../../components/Grid/GridContainer";
// import Card from "../../components/Card/Card";
// import GridItem from "../../components/Grid/GridItem";
import CardHeader from "../../components/Card/CardHeader";
import withStyles from "@material-ui/core/styles/withStyles";
import loginPageStyle from "assets/jss/material-kit-pro-react/views/loginPageStyle.jsx";
import image from "assets/img/bg7.jpg";
import Button from "@material-ui/core/Button";
import CustomInput from "../../components/CustomInput/CustomInput";
import CardBody from "../../components/Card/CardBody";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import Email from "@material-ui/icons/Email";
import Face from "@material-ui/icons/Face";
import Favorite from "@material-ui/icons/Favorite";

class LoginPage extends React.Component {
	state = {
		credentials: {
			// username: 'Lambda School',
			// password: 'i<3Lambd4'
			username: '',
			password: ''
		}
	};
	
	componentDidMount() {
		window.scrollTo(0, 0);
		document.body.scrollTop = 0;
	}
	
	handleChange = e => {
		this.setState({
			credentials: {
				...this.state.credentials,
				[e.target.name]: e.target.value
			}
		});
	};
	
	login = e => {
		console.log('login clicked')
		e.preventDefault();
		this.props.login(this.state.credentials).then(() => {
			console.log('his.props.login(this.state.credentials).then')
			this.props.history.push('/friends');
		});
	};
	
	render() {
		const { classes } = this.props;
		return (
			<div>
				{/*<div*/}
				{/*className={classes.pageHeader}*/}
				{/*style={{*/}
				{/*backgroundImage: "url(" + image + ")",*/}
				{/*backgroundSize: "cover",*/}
				{/*backgroundPosition: "top center"*/}
				{/*}}*/}
				{/*/>*/}
				<div className={classes.container}>
					<GridContainer justify="center">
						<GridItem xs={12} sm={12} md={4}>
							<Card>
								<form className={classes.form} onSubmit={this.login}>
									<CardHeader
										color="primary"
										signup
										className={classes.cardHeader}
									>
										<h4 className={classes.cardTitle}>Login</h4>
										<div className={classes.socialLine}>
											<Button
												justIcon
												color="transparent"
												className={classes.iconButtons}
												onClick={e => e.preventDefault()}
											>
												<i className="fab fa-twitter" />
											</Button>
											<Button
												justIcon
												color="transparent"
												className={classes.iconButtons}
												onClick={e => e.preventDefault()}
											>
												<i className="fab fa-facebook" />
											</Button>
											<Button
												justIcon
												color="transparent"
												className={classes.iconButtons}
												onClick={e => e.preventDefault()}
											>
												<i className="fab fa-google-plus-g" />
											</Button>
										</div>
									</CardHeader>
									<p
										className={`${classes.description} ${classes.textCenter}`}
									>
										Or Be Classical
									</p>
									<CardBody signup>
										<CustomInput
											id="first"
											formControlProps={{
												fullWidth: true
											}}
											inputProps={{
												placeholder: "Useraname",
												type: "text",
												startAdornment: (
													<InputAdornment position="start">
														<Face className={classes.inputIconsColor} />
													</InputAdornment>
												)
											}}
										/>
										<CustomInput
											id="pass"
											formControlProps={{
												fullWidth: true
											}}
											inputProps={{
												placeholder: "Password",
												type: "password",
												startAdornment: (
													<InputAdornment position="start">
														<Icon className={classes.inputIconsColor}>
															lock_utline
														</Icon>
													</InputAdornment>
												)
											}}
										/>
										<CustomInput
											id="email"
											formControlProps={{
												fullWidth: true
											}}
											inputProps={{
												placeholder: "Email...",
												type: "email",
												startAdornment: (
													<InputAdornment position="start">
														<Email className={classes.inputIconsColor} />
													</InputAdornment>
												)
											}}
										/>
									
									</CardBody>
									<div className={classes.textCenter}>
										<PinkButton simple color="primary" size="lg">
											{this.props.loggingIn
												? <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
												: "Log in"
											}
										</PinkButton>
									</div>
								</form>
							</Card>
						</GridItem>
					</GridContainer>
				</div>
				{/*<form onSubmit={this.login}>*/}
				{/*<input*/}
				{/*type="text"*/}
				{/*name="username"*/}
				{/*value={this.state.credentials.username}*/}
				{/*onChange={this.handleChange}*/}
				{/*/>*/}
				{/*<input*/}
				{/*type="password"*/}
				{/*name="password"*/}
				{/*value={this.state.credentials.password}*/}
				{/*onChange={this.handleChange}*/}
				{/*/>*/}
				{/*<PinkButton>*/}
				{/*{this.props.loggingIn*/}
				{/*? <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />*/}
				{/*: "Log in"*/}
				{/*}*/}
				{/*</PinkButton>*/}
				{/*</form>*/}
			</div>
		);
	}
}
const mapStateToProps = ({loggingIn}) => (
	{
		loggingIn
	}
)

export default connect(
	mapStateToProps,
	{ login }
)(withStyles(loginPageStyle)(LoginPage));
