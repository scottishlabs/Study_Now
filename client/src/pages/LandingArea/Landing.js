import React, { Fragment } from 'react';
import { Spotlight, Header } from '../../components';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	offset: theme.mixins.toolbar
}));

const Landing = () => {
	const classes = useStyles();
	return (
		<Fragment>
			<Header />
			<div className={classes.offset}></div>
			<Spotlight />
		</Fragment>
	);
};

export default Landing;
