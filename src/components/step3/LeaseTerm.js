import React from 'react'
import { Link } from 'react-router-dom'

export default function LeaseTerm() {

    return (
        <div className='container-fluid'>

            <div className='row w-90 justify-content-md-between justify-content-around mx-auto rounded '>
                <h3 className='fs-33 fw-bold text-center mb-3 dark-blue-text'>
                    How do you typically invest in real estate?
                </h3>
                <p className='formgray-text text-center'>
                    Select all that apply
                </p>

                <label className='check-box-parent mb-3'>
                    <input type="radio" name='year' />
                    <span className=''>Fix and Flip</span>
                </label>

                <label className='check-box-parent mb-3'>
                    <input type="radio" name='year' />
                    <span className=''>Buy and Hold</span>
                </label>

                <label className='check-box-parent mb-3'>
                    <input type="radio" name='year' />
                    <span className=''>Assign the Contract</span>
                </label>

                <label className='check-box-parent'>
                    <input type="radio" name='year' />
                    <span className=''>Other</span>
                </label>

            </div>

            <div className='text-center py-5'>
                <Link to="/step2">
                    <p className='me-2 pointer d-inline-block border p-3 px-md-5 px-4 fw-semibold dark-blue-text mb-0 fw-normal rounded roboto'>
                        &lt; &lt; Back
                    </p>
                </Link>
                <Link to="/step4">
                    <p className='ms-2 pointer d-inline-block light-green p-3 px-md-5 px-4 fw-semibold dark-blue-text mb-0 fw-normal rounded roboto'>
                        Next &gt; &gt;
                    </p>
                </Link>
            </div>
        </div>
    )
}
