import React from 'react'
import { Link } from 'react-router-dom'
import RangeSlider from 'react-bootstrap-range-slider';
import { useState } from 'react';


export default function Number() {
    const [value, setValue] = useState(500000);
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    const handlevalue = (value) => {
        if (value >= 1000000) {
            const millionValue = (value / 1000000).toFixed(1);
            return `$${millionValue} M`;
        } else if (value >= 1000) {
            const thousandValue = (value / 1000).toFixed(0);
            return `$${thousandValue}k`;
        } else {
            return `$${value}`;
        }
    }
    return (
        <div className='container-fluid'>

            <div className='row w-90 justify-content-md-between justify-content-around mx-auto rounded pt-5'>
                <div className="row w-80 mx-auto text-white">


                    <h3 className='fs-33 fw-bold text-center mb-3 dark-blue-text px-0'>
                        What is the minimum number of bedrooms you look for?
                    </h3>
                    <div className='col-12 d-flex justify-content-center px-0'>
                        <label className='check-box-parent-number mb-3 me-2'>
                            <input type="radio" name='bedroom' />
                            <span className=''>1</span>
                        </label>

                        <label className='check-box-parent-number  mb-3 ms-2'>
                            <input type="radio" name='bedroom' />
                            <span className=''>2</span>
                        </label>

                    </div>
                    <div className='col-12 d-flex justify-content-center px-0'>
                        <label className='check-box-parent-number mb-3 me-2'>
                            <input type="radio" name='bedroom' />
                            <span className=''>3</span>
                        </label>

                        <label className='check-box-parent-number  mb-3 ms-2'>
                            <input type="radio" name='bedroom' />
                            <span className=''>4</span>
                        </label>

                    </div>
                </div>
                <div className="row w-80 mx-auto text-white mt-5">


                    <h3 className='fs-33 fw-bold text-center mb-3 dark-blue-text px-0'>
                        What is the minimum number of bathrooms you look for?
                    </h3>
                    <div className='col-12 d-flex justify-content-center px-0'>
                        <label className='check-box-parent-number mb-3 me-2'>
                            <input type="radio" name='bathroom' />
                            <span className=''>1</span>
                        </label>

                        <label className='check-box-parent-number  mb-3 ms-2'>
                            <input type="radio" name='bathroom' />
                            <span className=''>2</span>
                        </label>

                    </div>
                    <div className='col-12 d-flex justify-content-center px-0'>
                        <label className='check-box-parent-number mb-3 me-2'>
                            <input type="radio" name='bathroom' />
                            <span className=''>3</span>
                        </label>

                        <label className='check-box-parent-number  mb-3 ms-2'>
                            <input type="radio" name='bathroom' />
                            <span className=''>4</span>
                        </label>

                    </div>
                </div>
                <div className="row w-80 mx-auto text-white mt-5">


                    <h3 className='fs-33 fw-bold text-center mb-3 dark-blue-text px-0'>
                        Do you buy properties with a pool?
                    </h3>
                    <div className='col-12 d-flex justify-content-center px-0'>
                        <label className='check-box-parent-number mb-3 me-2'>
                            <input type="radio" name='pool' />
                            <span className=''>Yes</span>
                        </label>

                        <label className='check-box-parent-number  mb-3 ms-2'>
                            <input type="radio" name='pool' />
                            <span className=''>No</span>
                        </label>

                    </div>
                </div>
                <div className="row w-80 mx-auto text-white mt-5">
                    <h3 className='fs-33 fw-bold text-center mb-3 dark-blue-text px-0'>
                        What’s your maximum purchase price?
                    </h3>
                </div>
            </div>

            <div className='row w-90 justify-content-md-between justify-content-around mx-auto rounded pt-5'>
                <RangeSlider
                    min={0}
                    step={5000}
                    max={1000000}
                    tooltip='on'
                    tooltipPlacement="top"
                    value={value}
                    onChange={handleChange}
                    tooltipLabel={handlevalue}
                />
                <div className='d-flex justify-content-between dark-blue-text fw-bold'>
                    <p className='mb-0'>
                        $0
                    </p>
                    <p className='mb-0'>
                        $1M+
                    </p>
                </div>


            </div>
            <div className='row w-90 justify-content-md-between justify-content-around mx-auto rounded pt-5'>

                <div className="row w-80 mx-auto text-white">
                    <div className="text-start col-12 px-md-4 px-0 dark-blue-text">
                        <label htmlFor="other-info formgray-text">Any other information that you think might be relevant?:</label>
                        <textarea rows="7" type='text' id="other-info" className='rounded p-2 my-3 w-100 credit-card-input dark-blue-text' >
                        </textarea>
                    </div>

                    <div className="text-start d-flex col-12 align-items-start mt-2 px-md-4 px-0 dark-blue-text">
                        <input type='checkbox' id="policy" className='rounded mt-1 me-2 flex-shrink-0 ' />
                        <label htmlFor="policy" className='formgray-text'>By checking the box, you agree to our privacy policy and allow us to use your information to contact you about our services. Please read our <span style={{ color: "#2CAAE6" }} >privacy policy</span>  for more information.</label>
                    </div>
                </div>

            </div>

            <div className='text-center py-5'>
                <Link to="/success">
                    <p className='ms-2 pointer d-inline-block light-green p-3 px-md-5 px-4 fw-semibold dark-blue-text mb-0 fw-normal rounded roboto'>
                        Submit
                    </p>
                </Link>
            </div>
        </div>
    )
}
