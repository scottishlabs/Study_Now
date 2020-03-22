import React from 'react';
import { Grid, Paper, makeStyles, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	root: {
		padding: 10,
		flexGrow: 1
	},
	paper: {
		padding: theme.spacing(2)
	},
	image: {
		maxWidth: '100%',
		height: 'auto'
	},
	text: {
		display: 'inline-block'
	}
}));

const Spotlight = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container justify='center' spacing={3}>
				<Grid item xs={5} justify='flex-end'>
					<img
						className={classes.image}
						src='https://via.placeholder.com/750'
						alt=''
					/>
				</Grid>
				<Grid item xs={3} justify='flex-start'>
					<Paper className={classes.paper}>
						<Grid container>
							<Grid item>
								<Typography variant='h1' align='left'>
									Welcome
								</Typography>
								<Typography variant='body1' align='left'>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									Aliquam corporis facilis laboriosam, ex ad provident itaque
									architecto sit incidunt nam id aspernatur numquam saepe
									molestiae iure maiores, natus exercitationem iusto.
								</Typography>
								<Grid container spacing={1}>
									<Grid item xs={12} />
									<Grid item>
										<Button variant='contained' color='primary'>
											Sign Up
										</Button>
									</Grid>
									<Grid item>
										<Button variant='outlined' color='default'>
											Learn More
										</Button>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
};

export default Spotlight;
