import React from 'react';
import banner1 from "../../../images/bike1.png"
import banner2 from "../../../images/bike2.jpg"
import banner3 from "../../../images/bike4.jpg"
import "./Banner.css"
const Banner = () => {
    return (

        <div
            id="carouselExampleControls"
            className="carousel slide "
            data-bs-ride="carousel"
        >
            <div className="carousel-inner ">
                <div className="carousel-item active">
                    <div
                        className="
                row
                banner-bg-info
                bg-gradient
                d-flex
                align-items-center
                m-3
              "
                    >
                        <div className="col-lg-7">
                            <h1 className="text-success">RACE IN TO</h1>
                            <h3>Book a <span className={"text-warning"}> HONDA CBR </span></h3>
                            <h5>Race out With rewards</h5>
                            <p>
                                Every ride turns into preparation for the next race with the stret legal <b> CBR 250RR</b>
                            </p>
                        </div>
                        <div className="col-lg-5">
                            <img
                                href="#"
                                src={banner1}
                                className="d-block w-100 p-5"
                                alt="..."
                            />
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div
                        className="
                row
                banner-bg-info
                bg-gradient
                d-flex
                align-items-center
                m-5
              "
                    >
                        <div className="col-lg-7">
                            <h1 className="text-success">RACE IN TO</h1>
                            <h3>Book a<span className={"text-warning"}> YAMAHA </span></h3>
                            <h5>Race out With rewards</h5>
                            <p>
                                Every ride turns into preparation for the next race with the stret legal <b> YAMAHA YZF-R15</b>
                            </p>

                        </div>
                        <div className="col-lg-5">
                            <img
                                src={banner2}
                                className="d-block w-100 p-5"
                                alt="..."
                            />
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div
                        className="
                row
                banner-bg-info
                bg-gradient
                d-flex
                align-items-center
                m-5
              "
                    >
                        <div className="col-lg-7">
                            <h1 className="text-success">RACE IN TO</h1>
                            <h3>Book a<span className={"text-warning"}> Ktm </span></h3>
                            <h5>Race out With rewards</h5>
                            <p>
                                Every ride turns into preparation for the next race with the stret legal <b> KTM RC 200 </b>
                            </p>
                        </div>
                        <div className="col-lg-5">
                            <img
                                src={banner3}
                                className="d-block w-100 p-5"
                                alt="..."
                            />
                        </div>
                    </div>
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    );
};

export default Banner;