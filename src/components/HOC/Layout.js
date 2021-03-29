import React from 'react';
import Header from '../Header';
import Footer from '../Footer'
import { mainNavMenu } from '../../menus' 

const Layout = (props) => {

    return (
            <div className="main" >
                {/* <AnimateHeader> */}
                    <Header nav={mainNavMenu} />
                {/* </AnimateHeader> */}
                {props.children}
                <Footer/>
            </div>

    )
}

export default Layout