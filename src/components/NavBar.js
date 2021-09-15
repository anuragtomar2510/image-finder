import React from 'react'
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core'
import CollectionsIcon from '@material-ui/icons/Collections'

const useStyles = makeStyles({

    container: {

        backgroundColor : 'black',
        color : 'white'

    }

})
const NavBar = () => {

    const classes = useStyles()

    return (
        <AppBar className={classes.container} position="static">
            <Toolbar style = {{minHeight : '30px'}}>
                <CollectionsIcon />
                <Typography variant="subtitle2" style= {{marginLeft : '10px'}}>Image-Finder</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar
