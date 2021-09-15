import React from 'react'
import {Snackbar, makeStyles} from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'

const useStyles = makeStyles({

    snack : {

        '& > *' : {

            backgroundColor : 'black',
            color : 'white'
        }
    }
})

const Notification = ({showNotification}) => {

    const classes = useStyles()

    return (
        <Snackbar open={showNotification} className={classes.snack}>
            
                <MuiAlert severity="info">
                        Number of images should be in 5-200 range
                </MuiAlert>
         
        </Snackbar>
    )
}

export default Notification
