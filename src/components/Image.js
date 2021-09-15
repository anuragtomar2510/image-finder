import React from 'react'
import {Card, makeStyles} from '@material-ui/core'


const useStyles = makeStyles({

    image : {

        width: '100%',
        height : '200px',
        objectFit : 'cover'

    }

})



const Image = ({url}) => {

    const classes = useStyles()

    return (
        <Card>
            <img src={url} alt="image" className={classes.image} />
        </Card>
    )
}

export default Image
