import React from 'react';
import { useLocation } from 'react-router-dom';

function LocationWrapper(Component) {
    return function WrappedComponent(props) {
        const location = useLocation();
        return <Component {...props} location={location} />;
    };
}

export default LocationWrapper;
