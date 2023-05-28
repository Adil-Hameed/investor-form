import React from 'react'
import { Link } from 'react-router-dom'

export default function Mapchart() {
    
    return (
        <div className='container-fluid'>
            <div className="row w-80 mx-auto text-white">
                <div className="text-start col-md-6 px-md-4 px-0 dark-blue-text">
                    <label htmlFor="first-name">What cities are you interested in:</label>
                    <input type='text' id="first-name" className='rounded p-2 my-3 w-100 credit-card-input dark-blue-text' />
                </div>
                <div className="text-start col-md-6 px-md-4 px-0 dark-blue-text">
                    <label htmlFor="Last-name">Zip code - Any specific ones you prefer (Optional): </label>
                    <input type='text' id="Last-name" className='rounded p-2 my-3 w-100 credit-card-input dark-blue-text' />
                </div>
                <div className="text-start col-12 px-md-4 px-0 dark-blue-text">
                    <label htmlFor="mobile">Counties - Any specific ones you prefer (Optional):</label>
                    <input type='text' id="mobile" className='rounded p-2 my-3 w-100 credit-card-input dark-blue-text' />
                </div>

                <div className='text-center py-5'>
                    <Link to="/">
                        <p className='me-2 pointer d-inline-block border p-3 px-md-5 px-4 fw-semibold dark-blue-text mb-0 fw-normal rounded roboto'>
                            &lt; &lt; Back
                        </p>
                    </Link>
                    <Link to="/step3">
                        <p className='ms-2 pointer d-inline-block light-green p-3 px-md-5 px-4 fw-semibold dark-blue-text mb-0 fw-normal rounded roboto'>
                            Next &gt; &gt;
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    )
}
