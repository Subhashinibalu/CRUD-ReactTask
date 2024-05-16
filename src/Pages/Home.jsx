import React from 'react';

const Home = () => {
    return (
        <div>
            <header className="bg-dark py-5">
                <div className="container px-5">
                    <div className="row gx-5 align-items-center justify-content-center">
                        <div className="col-lg-8 col-xl-7 col-xxl-6">
                            <div className="my-5 text-center text-xl-start">
                                <h1 className="display-5 fw-bolder text-white mb-2">AN ADMIN HANDLE WEBPAGE ON PERSON DETAILS</h1>
                                <p className="lead fw-normal text-white-50 mb-4">This webpage contains informations of persons who are willing to share their details, where the datas can be updated and deleted by the admin! The main purpose here is to improve the global connections/contact among people.</p>
                                
                            </div>
                        </div>
                        <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><img className="img-fluid rounded-3 my-5 homeimage" src="https://img.freepik.com/free-vector/employee-group-portrait-illustration_74855-5495.jpg?t=st=1715793531~exp=1715797131~hmac=87d7356a28b284094ea43348b1829a4a41ea6717967c80d6a7594b0411f52a3b&w=996" alt="..."/></div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Home;