import React from 'react';


const Footer = props => <footer id="footer" className="page-footer">
    <div className="footer-copyright">
        <div className="container">
            <div className="container">
                <div className="row">
                    <p className="col s6">&copy; 2018 Copyright BIT</p>
                    <p className="col s6 right" > {props.updateDuration}</p>
                </div>
            </div>
        </div>
    </div>
</footer>

export default Footer;