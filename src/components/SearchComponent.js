import React from 'react'
import {Box, TextField, makeStyles} from '@material-ui/core'
const useStyles = makeStyles(theme => ({

    component : {

       

        '& > *' : {

            margin : theme.spacing(1)

        }
    }
}))

const SearchComponent = ({category, perPage, setCategory, setPerPage}) => {

    const classes = useStyles()

    return (
        <Box className={classes.component}>
            <TextField 
                label="Search..."
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />

            <TextField 
                label="Number of images..."
                value={perPage}
                onChange={(e) => setPerPage(e.target.value)}
            />
        </Box>
    )
}

export default SearchComponent
