import React from 'react'

import RangeSlider from 'react-bootstrap-range-slider';
import { useState } from 'react';


export default function Built() {
    const [value, setValue] = useState(5000);
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    const handlevalue = (value) => {
        const formattedValue = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      
            return `${formattedValue} Sq.Ft`;
      
    }
    return (
        <div className='container-fluid'>


            <div className='row w-90 justify-content-md-between justify-content-around mx-auto rounded  '>
                <div className="row w-80 mx-auto text-white">
                    <h3 className='fs-33 fw-bold text-center mb-3 dark-blue-text'>
                        Year Built
                    </h3>
                    <div className=" col-12  px-0 formgray-text text-center">
                        <label htmlFor="built">What is the earliest year of construction you would consider for a home you’d like to purchase?</label>
                        <input type='text' id="built" className='rounded p-2 mt-3 w-100 credit-card-input dark-blue-text' />
                    </div>
                </div>
                <div className="row w-80 mx-auto text-white my-5">
                    <h3 className='fs-33 fw-bold text-center mb-3 dark-blue-text'>
                        Home Size
                    </h3>
                    <div className=" col-12  px-0 formgray-text text-center">
                        <label htmlFor="home-size">What is the minimum square footage you would consider for a home you’d like to purchase?</label>
                        <input type='text' id="home-size" className='rounded p-2 my-3 w-100 credit-card-input dark-blue-text' />
                    </div>

                </div>
                <RangeSlider
                    min={500}
                    step={50}
                    max={10000}
                    tooltip='on'
                    tooltipPlacement="top"
                    value={value}
                    onChange={handleChange}
                    tooltipLabel={handlevalue}
                />
                <div className='d-flex justify-content-between dark-blue-text fw-bold'>
                    <p className='mb-0'>
                        500 Sq. Ft.
                    </p>
                    <p className='mb-0'>
                        10,000 Sq. Ft.
                    </p>
                </div>
            </div>
        </div>
    )
}
