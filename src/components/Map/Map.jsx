import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';


import useStyles from './styles';

export const Map = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px');

    const coordinates = { lat: 37.382483, lng: -122.209946 };

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.GOOGLE_MAP_API_KEY }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={() => { }}
                onChildClick={() => { }}
            ></GoogleMapReact>
        </div>
    )
}
