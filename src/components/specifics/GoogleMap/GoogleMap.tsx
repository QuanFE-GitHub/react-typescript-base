import classNames from 'classnames/bind';
import React from 'react';
import { GoogleMap, Marker, withScriptjs, withGoogleMap } from 'react-google-maps';

import styled from './googleMap.module.scss';

const cx = classNames.bind(styled);

const GoogleMapComponent = withScriptjs(
  withGoogleMap((props: any) => {
    return (
      <>
        <div>
          <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: 21.027763, lng: 105.83416 }}
          ></GoogleMap>
        </div>
      </>
    );
  })
);

export default GoogleMapComponent;
