import React from 'react';
import {
	makeStyles,
	AppBar,
	Toolbar,
	SvgIcon,
	IconButton,
	Typography,
	Button
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	}
}));

const HomeIcon = props => {
	return (
		<SvgIcon {...props}>
			<path d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' />
		</SvgIcon>
	);
};

const Header = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position='fixed'>
				<Toolbar>
					<IconButton
						edge='start'
						className={classes.menuButton}
						color='inherit'
						aria-label='menu'
					>
						<HomeIcon />
					</IconButton>
					<Typography variant='h6' className={classes.title}>
						Study Now
					</Typography>
					<Button color='inherit'>Sign Up</Button>
					<Button color='inherit'>Sign In</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;
