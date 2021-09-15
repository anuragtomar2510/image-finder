import React from 'react'
import Image from './Image'
import {Grid, Box} from '@material-ui/core'



const Images = ({data}) => {

    

    return (
        
     
            <Grid container spacing={1}>
                {data.map((image) => (<Grid item xs={3} key= {image.id} >
                                        <Image  url={image.largeImageURL} />
                                   </Grid>
                ))}
           </Grid>
     
    )
}

export default Images
