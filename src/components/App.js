import React, { Fragment, useContext, useEffect } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';

import Layout from './HOC/Layout';
import HomePage from './Home';

import AppStoreContext from '../contexts/AppStore';
import { debounce } from './utils'

import GetCourses from './courses/getCourses';
import CourseDetails from './courses/courseDetails'

import '../resources/scss/wild-style.scss'


const App = () => {

    const { state, dispatch } = useContext(AppStoreContext)

    const myEfficientFn = debounce(() => dispatch({ type: 'MENUDRAW_OPENED', payload: false }), 500)

    useEffect(() => {
        window.addEventListener('resize', myEfficientFn);
        return function cleanup() {
            window.removeEventListener('resize', myEfficientFn)
        }
    }, [myEfficientFn]);

    return (
        <Fragment>
            <Layout>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path={['/search/:query', '/:catagory/:subcatagory', '/:catagory/:subcatagory/:topic']} exact component={GetCourses} />
                    <Route path="/:catagory/:subcatagory/:topic/:id" exact component={CourseDetails} />
                    <Redirect to="/" />
                </Switch>
            </Layout>
        </Fragment>
    )
}

export default withRouter(App);


