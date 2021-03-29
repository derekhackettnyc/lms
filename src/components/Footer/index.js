import React from 'react';

const Footer = () => {
    return (
        <footer className='footer'>
                <div className="footer__navigation_grid" style={{backgroundColor:'#FCD900'}}>
                    <div>
                        <h3 className="footer__navigation-title margins-small t-ruled-after"style={{color:"white"}}>Resouces</h3>
                        <ul className="footer__list">
                            <li className="footer__item"><button className="footer__button">Catalog</button></li>
                            <li className="footer__item"><button className="footer__button">Hire Talent</button></li>
                            <li className="footer__item"><button className="footer__button">Student Success</button></li>
                            <li className="footer__item"><button className="footer__button">Scholarships</button></li>
                            <li className="footer__item"><button className="footer__button">Classrooms</button></li>
                        </ul>
                    </div>
                </div>
                <div className="footer__navigation_grid" style={{backgroundColor:'#002664',color:"white"}}>
                    <div>
                        <h3 className="footer__navigation-title margins-small t-ruled-after">Shopping</h3>
                        <ul className="footer__list">
                            <li className="footer__item"><button className="footer__button">Build A New Life</button></li>
                            <li className="footer__item"><button className="footer__button">Special Offers</button></li>
                            <li className="footer__item"><button className="footer__button">Find A Course</button></li>
                            <li className="footer__item"><button className="footer__button">Schedule a Chat</button></li>
                            <li className="footer__item"><button className="footer__button">Money Back</button></li>
                        </ul>
                    </div>
                </div>  
                <div className="footer__navigation_grid" style={{backgroundColor:'#002664',color:"white"}}>
                    <div>
                        <h3 className="footer__navigation-title margins-small t-ruled-after">Support</h3>
                        <ul className="footer__list">
                            <li className="footer__item"><button className="footer__button">Contact</button></li>
                            <li className="footer__item"><button className="footer__button">Help Center</button></li>
                            <li className="footer__item"><button className="footer__button">FAQ</button></li>
                            <li className="footer__item"><button className="footer__button">Privacy policy</button></li>
                            
                        </ul>
                    </div>
                </div>
                <div className="footer__navigation_grid" style={{backgroundColor:'#002664',color:"white"}}>
                    <div>
                        <h3 className="footer__navigation-title margins-small t-ruled-after">Legal</h3>
                        <ul className="footer__list">
                            <li className="footer__item"><button className="footer__button">Safety</button></li>
                            <li className="footer__item"><button className="footer__button">Recalls</button></li>
                            <li className="footer__item"><button className="footer__button">Contact Us</button></li>
                            <li className="footer__item"><button className="footer__button">FAQ</button></li>
                            <li className="footer__item"><button className="footer__button">Privacy & Legal</button></li>
                        </ul>
                    </div>
                </div>                                                    
            {/* <div className="footer__copyright">
                <p className="">
                    Copyright 2019 FYXR
	                    </p>
            </div> */}

        </footer>

    );
};

export default Footer;