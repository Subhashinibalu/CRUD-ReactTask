import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer text-center mt-5 p-5">
            <div className="container">
                <div className="row d-flex  justify-content-evenly ">
                    
                    <div className="col-lg-3 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">website</h4>
                        <a className="lead mb-0 web" href="#">
                            
                        <i className="bi bi-globe2"></i> www.persondetails.in
                        </a>
                    </div>
                    
                    <div className="col-lg-3 mb-5 mt-5">
                       
                        <p className="lead mb-0 bold">
                        Copyrights © 2024 
                           
                        </p>
                    </div>
                    
                    
                    <div className="col-lg-3 ">
                        <h4 className="text-uppercase mb-4"></h4>
                        <p className="lead mb-0">
                           Get to know more persons with the help of our wesite
                            .
                        </p>
                    </div>
                </div>
            </div>
        </footer>
        </div>
    );
};

export default Footer;