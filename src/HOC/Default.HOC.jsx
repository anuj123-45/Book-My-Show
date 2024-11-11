// DefaultHoc.js
import React from "react";
import DefaultLayout from "../layouts/Default.layout";
import { Route } from 'react-router-dom';

const DefaultHoc = ({ component: Component,...rest }) => {
    return (
        <Route
            {...rest}
     element={(
        <DefaultLayout>
            <Component />
        </DefaultLayout>
     )}
        />
    );
};

export default DefaultHoc;
