import React from 'react';
import { connect } from 'react-redux';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Cat from "../../Cat";

const Home = ({ cats }) => {
    const LinkRouter = (props) => <Link {...props} component={RouterLink} />;
    return (
        <>
            <Breadcrumbs aria-label="breadcrumb">
                <LinkRouter color="inherit" to="/">
                    Home
                </LinkRouter>
                <LinkRouter color="inherit" to="/upload">
                    Upload
                </LinkRouter>
            </Breadcrumbs>
            <Grid container spacing={3}>
                {cats.map((cat, index) => (
                    <Cat key={index} cat={cat} />
                ))}
            </Grid>
        </>
    );
};

export default connect((state) => state)(Home);
