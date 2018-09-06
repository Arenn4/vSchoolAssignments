import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import {getAnimals} from '../redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';



const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class Pets extends Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
        <Fragment>
            {this.props.animals.map(animal=>{
        
            <Card className={classes.card}>
                <CardHeader
                avatar={
                    <Avatar aria-label="Dogs" className={classes.avatar}>
                    GSP
                    </Avatar>
                }
                action={
                    <IconButton>
                    <MoreVertIcon />
                    </IconButton>
                }
                title={animal.name['$t']}
                subheader={animal.age['$t']}
                subheader={animal.sex['$t']} 
                />
                <CardMedia
                className={classes.media}
                image={animal.media.photos}
                title="Contemplative Reptile"
                />
                <CardContent>
                <Typography component="p">
                    
                    {animal.contact.city.$t}
                    {animal.contact.state.$t}
                    
                </Typography>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                <IconButton aria-label="Add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="Share">
                    <ShareIcon />
                </IconButton>
                <IconButton
                    className={classnames(classes.expand, {
                    [classes.expandOpen]: this.state.expanded,
                    })}
                    onClick={this.handleExpandClick}
                    aria-expanded={this.state.expanded}
                    aria-label="Show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
                </CardActions>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph variant="body2">
                    Description:
                    </Typography>
                    <Typography paragraph>
                    {animal.description.$t}
                    </Typography>
                </CardContent>
                </Collapse>
            </Card>
            })}
        </Fragment>
    )
  }
};

Pets.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(state=>state, {getAnimals}); withStyles(styles)(Pets);






// class Pets extends Component {
//     componentDidMount(){
//         this.props.getAnimals()
//     }
//     render(){
//         return (
//             <div>Pets
//                 {this.props.animals.map(animal=>{
//                     return (
//                         <div> 
//                             <div>{animal.name['$t']}</div>
//                             <div>{animal.age['$t']}</div>
//                             <div>{animal.sex['$t']}</div>
//                             <img src={animal.media.photos}/>
//                             <div>{animal.contact.city.$t}</div>
//                             <div>{animal.contact.state.$t}</div>
//                             <div>{animal.description.$t}</div>
//                         </div>
//                 )})}
//             </div>
//         );
//     }
// };


// export default connect(state=>state, {getAnimals})(Pets);



