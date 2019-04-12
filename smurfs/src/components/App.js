import React, { Component } from 'react';
import './App.css';
import {getSmurfs, addSmurf, updateSmurf, deleteSmurf} from '../actions'
import {connect} from 'react-redux'
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/es/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import DeleteIcon from '@material-ui/icons/Delete';
import PinkButton from "./Button/PinkButton";
import Loader from 'react-loader-spinner'
import SearchAppBar from "./SearchAppBar";
import DeleteButton from "./Button/DeleteButton";
import MyEditButton from "./Button/MyEditButton";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own.
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
    margin: {
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
});



class App extends Component {
    state = {
        newSmurf:{
            name: '',
            age: '',
            height: ''
        },
        isEditing:false
    };
    
    componentDidMount() {
      this.props.getSmurfs()
    }
    
    addFriend = (e)=>{
        e.preventDefault()
        console.log('this.state.newSmurf',this.state.newSmurf)
        this.props.addSmurf(this.state.newSmurf)
        this.setState({
            ...this.state,
            newSmurf:{
                name: '',
                age: '',
                height: ''
            }
        });
    }
    
    editSmurf = (e) =>{
        // e.preventDefault()
        console.log('isEditing', this.state.isEditing)
        this.setState({'isEditing': true})
    }
    
    handleChange = name => event => {
        this.setState({
            ...this.state,
            newSmurf:{
              ...this.state['newSmurf'],
              [name]: event.target.value
            }
        });
    };
    
    
    render() {
          // console.log(' this.props;', this.props)
          return (
          <div className="App">
             <SearchAppBar/>
              <List className={this.props.classes.root}>
                  {
                      this.props.smurfs && this.props.smurfs.map((el, idx) => (
                          (<ListItem alignItems="flex-start" key={idx}>
                              <ListItemAvatar>
                                  <Avatar alt="Remy Sharp" src="http://lorempixel.com/300/300" />
                              </ListItemAvatar>
                              { this.state.isEditing === true
                                  ? (<TextField
                                          id="standard-name"
                                          label="Name"
                                          className={this.props.classes.textField}
                                          value={this.state.newSmurf.name || ''}
                                          onChange={this.handleChange('name')}
                                          margin="normal"
                                      />)
                                  : (
                                         <ListItemText
                                             primary={el.name}
                                             secondary={
                                                 <React.Fragment>
                                                     <Typography component="span" className={this.props.classes.inline} color="textPrimary">
                                                         {` Height: ${el.height} /`}
                                                     </Typography>
                                                     {` Age: ${el.age}`}
                                                 </React.Fragment>
                                             }
                                         />
                                        
                                     )
                                  }
                              <MyEditButton onClick={e=> this.editSmurf(e)}/>
                              <DeleteButton aria-label="Delete" className={this.props.classes.margin}  onClick={e=> this.editSmurf(e)}>
                                  <DeleteIcon fontSize="small" />
                              </DeleteButton>
                          </ListItem>)
                      ))
                  }
              </List>
              <form className={this.props.classes.container} noValidate autoComplete="off" onSubmit={this.addFriend}>
                  <TextField
                      id="standard-name"
                      label="Name"
                      className={this.props.classes.textField}
                      value={this.state.newSmurf.name || ''}
                      onChange={this.handleChange('name')}
                      margin="normal"
                  />
                  <TextField
                      id="standard-name"
                      label="age"
                      className={this.props.classes.textField}
                      value={this.state.newSmurf.age || ''}
                      onChange={this.handleChange('age')}
                      margin="normal"
                  />
                  <TextField
                      id="standard-name"
                      label="height"
                      className={this.props.classes.textField}
                      value={this.state.newSmurf.height || ''}
                      onChange={this.handleChange('height')}
                      margin="normal"
                  />
                
                  <PinkButton simple color="primary" size="lg">
                      {this.props.loggingIn
                          ? <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
                          : "Add Friends"
                      }
                  </PinkButton>
              </form>
        </div>
    );
  }
}

function mapStateToProps (state){
    return ({
        smurfs: state.smurfs,
        fetchingSmurfs: state.fetchingSmurfs,
        error: state.error,
    })
}

export default
connect(
    mapStateToProps,
    {getSmurfs,
        addSmurf,
        updateSmurf,
        deleteSmurf
    }
)
(withStyles(styles)(App));
