import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

const styles = theme => ({
	margin: {
		margin: theme.spacing.unit,
	},
	extendedIcon: {
		marginRight: theme.spacing.unit,
	},
});

function MyEditButton(props) {
	const { classes } = props;
	return (
		<div>
			<IconButton aria-label="Edit" className={classes.margin}>
				<EditIcon fontSize="small" />
			</IconButton>
		</div>
	);
}

MyEditButton.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyEditButton);
