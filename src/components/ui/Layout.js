import React from 'react';
import Footer from '../Footer';
import Navigation from '../Navigation';

const Layout = props => {
    return(
        <React.Fragment>
            <Navigation />
            <main>
                {props.children}
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default Layout;