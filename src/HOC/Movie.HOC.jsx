import React from 'react'
import MovieLayout from '../layouts/MovieLayout'
import { Route } from 'react-router-dom';

const MovieHOC = ({ component: Component, ...rest }) => {
    return (
        <>

            <Route
                {...rest}
                element={(
                    <MovieLayout>
                        <Component />
                    </MovieLayout>
                )}
            />
        </>
    )
}

export default MovieHOC