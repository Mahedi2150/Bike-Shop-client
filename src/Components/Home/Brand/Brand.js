import React from 'react';
import "./Brand.css"
import brand1 from "./images/brands/brand1.jpg"
import brand2 from "./images/brands/brand2.jpg"
import brand3 from "./images/brands/brand3.jpg"
import brand4 from "./images/brands/brand4.jpg"
import brand5 from "./images/brands/brand5.jpg"
import brand6 from "./images/brands/brand6.jpg"
import brand7 from "./images/brands/brand7.jpg"
import brand8 from "./images/brands/brand8.jpg"
import brand9 from "./images/brands/brand9.png"
import brand10 from "./images/brands/brand10.jpg"
import brand11 from "./images/brands/brand11.png"
import brand12 from "./images/brands/brand12.png"
const Brand = () => {
    return (
        <section className="container my-5">
            <div className="text-center">
                <h1 className="fw-bold pt-5">
                    Choose Bikes By Brands
                </h1>
            </div>
            <div className="row row-cols-lg-4 row-cols-2 g-5">
                <div className="card border-0 p-5">
                    <img
                        src={brand1}
                        className="card-img w-100 h-100 gray-brand"
                        alt="..."
                    />
                </div>
                <div className="card border-0 p-5">
                    <img
                        src={brand2}
                        className="card-img w-100 h-100 gray-brand"
                        alt="..."
                    />
                </div>
                <div className="card border-0 p-5">
                    <img
                        src={brand3}
                        className="card-img w-100 h-100 gray-brand"
                        alt="..."
                    />
                </div>
                <div className="card border-0 p-5">
                    <img
                        src={brand4}
                        className="card-img w-100 h-100 gray-brand"
                        alt="..."
                    />
                </div>
                <div className="card border-0 p-5">
                    <img
                        src={brand5}
                        className="card-img w-100 h-100 gray-brand"
                        alt="..."
                    />
                </div>
                <div className="card border-0 p-5">
                    <img
                        src={brand6}
                        className="card-img w-100 h-100 gray-brand"
                        alt="..."
                    />
                </div>
                <div className="card border-0 p-5">
                    <img
                        src={brand7}
                        className="card-img w-100 h-100 gray-brand"
                        alt="..."
                    />
                </div>
                <div className="card border-0 p-5">
                    <img
                        src={brand8}
                        className="card-img w-100 h-100 gray-brand"
                        alt="..."
                    />
                </div>
                <div className="card border-0 p-5">
                    <img
                        src={brand9}
                        className="card-img w-100 h-100 gray-brand"
                        alt="..."
                    />
                </div>
                <div className="card border-0 p-5">
                    <img
                        src={brand10}
                        className="card-img w-100 h-100 gray-brand"
                        alt="..."
                    />
                </div>
                <div className="card border-0 p-5">
                    <img
                        src={brand11}
                        className="card-img w-100 h-100 gray-brand"
                        alt="..."
                    />
                </div>
                <div className="card border-0 p-5">
                    <img
                        src={brand12}
                        className="card-img w-100 h-100 gray-brand"
                        alt="..."
                    />
                </div>
            </div>
        </section>
    );
};

export default Brand;