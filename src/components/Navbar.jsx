import React, {useState} from 'react';
import {
    alpha,
    AppBar,
		Avatar,
    Toolbar,
    // IconButton,
    Typography,
    InputBase,
    Badge,
    // MenuItem,
} from '@material-ui/core';

import { Cancel, Mail, Notifications, Search  } from '@material-ui/icons';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	toolbar: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	search: {
		paddingLeft: '5px',
		paddingRight: '5px',
		display: 'flex',
		alignment: 'center',
		backgroundColor: alpha(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: alpha(theme.palette.common.white, 0.25)
		},
		borderRadius: theme.shape.borderRadius,
		width: "50%",
		[theme.breakpoints.down('sm')]: {
			display: (props) => (props.guyShow?  'flex': 'none')
		}
	},
	input: {
		color: 'white',
		marginLeft: theme.spacing(1),
	},
	cancel : {
		[theme.breakpoints.up('sm')]:{
			display: 'none'
		}
	},
	icons: {
		display: (props) => (props.guyShow ? 'none': 'flex'),
		alignItems: 'center'
	},
	searchButton : {
		marginRight: theme.spacing(2),
		cursor: 'pointer',
		[theme.breakpoints.up('md')]:{
			display: "none"
		}
	},
	badge: {
		marginRight: theme.spacing(2),
		cursor: 'pointer'
	}
}));


export default function Navbar(){
	const {guyShow, setGuyShow} = useState(false);
		const classes = useStyles({guyShow});
    return (
        <AppBar>
            <Toolbar className= {classes.toolbar}>
                <Typography varient='h6' noWrap>
                    WAAWSocial
                </Typography>

                <div className={classes.search}>
                <Search />
								<InputBase className={classes.input} placeholder = 'search..' />
								<Cancel className={classes.cancel} 
								onClick={() => setGuyShow(false)}
								/>
                </div>

								<div className={classes.icons}>
									<Search className={classes.searchButton}
									onClick={() => setGuyShow(true)}
									/>
								<Badge className={classes.badge}>
								<Mail />
								</Badge>
								<Badge className={classes.badge}>
								<Notifications />
								</Badge>
								<Avatar>
									<img alt='Avatar' src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvdjc5MS10YW5nLTM1LnBuZw.png?s=aLxshBxLcykO2UAnr6F0Nzhqtdx6iR6UuKi4bFSTzC8"/>
								</Avatar>
								</div>

            </Toolbar>
        </AppBar>
    )
}