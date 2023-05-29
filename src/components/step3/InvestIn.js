import React from 'react'
import { useState } from 'react';

export default function InvestIn() {
    const [selectedOption2, setSelectedOption2] = useState('');

    const [selected, setSelected] = useState([]);

    const handleClick = (index) => {
        if (selected.includes(index)) {
            setSelected(selected.filter((item) => item !== index));
        } else {
            setSelected([...selected, index]);
        }
    };

    const handleOptionClick2 = (option) => {
        setSelectedOption2(option);
    };
    return (
        <div className='container-fluid'>

            <div className='row w-90 justify-content-md-evenly justify-content-around mx-auto rounded pb-5'>
                <h3 className='fs-33 text-center fw-bold mb-4 dark-blue-text'>
                    What type of properties do you invest in?
                </h3>
                <p className='formgray-text text-center'>
                    Select all that apply
                </p>

                <div onClick={() => handleClick(1)} className={`col-md-2 pointer col-5 light-green border rounded text-center p-3 mb-4 ${selected.includes(1) ? 'light-green ' : 'bg-white'}`}>
                    <img src='/asset/Single Family.png' alt='' className='img-fluid' />
                    <p className='fw-bold dark-blue-text mt-2 mb-0 '>
                        Single-family house
                    </p>
                </div>
                <div onClick={() => handleClick(2)} className={`col-md-2 pointer col-5 light-green border rounded text-center p-3 mb-4 ${selected.includes(2) ? 'light-green ' : 'bg-white'}`}>
                    <img src='/asset/ICONS S2R-05 1.png' alt='' className='img-fluid' />
                    <p className='fw-bold dark-blue-text mt-2 mb-0 '>
                        Multi Family house
                    </p>
                </div>
                <div onClick={() => handleClick(3)} className={`col-md-2 pointer col-5 light-green border rounded text-center p-3 mb-4 ${selected.includes(3) ? 'light-green ' : 'bg-white'}`}>
                    <img src='/asset/Townhouse.png' alt='' className='img-fluid' />
                    <p className='fw-bold dark-blue-text mt-2 mb-0 '>
                        Townhouse
                    </p>
                </div>

                <div onClick={() => handleClick(4)} className={`col-md-2 pointer col-5 light-green border rounded text-center p-3 mb-4 ${selected.includes(4) ? 'light-green ' : 'bg-white'}`}>
                    <img src='/asset/other.png' alt='' className='img-fluid' />
                    <p className='fw-bold dark-blue-text mt-2 mb-0 '>
                        Other
                    </p>
                </div>

            </div>

            <div className='row w-90 justify-content-center mx-auto rounded pb-5'>
                <h3 className='fs-33 text-center fw-bold mb-4 dark-blue-text'>
                    Are you open to buying occupied properties?
                </h3>
                <div onClick={() => handleOptionClick2('like')} className={`col-md-2 pointer col-5 light-green border rounded text-center p-3 me-3 ${selectedOption2 === 'like' ? 'light-green ' : 'bg-white'}`}>
                    <img src='/asset/like.png' alt='' className='img-fluid' />

                </div>
                <div onClick={() => handleOptionClick2('unlike')} className={`col-md-2 pointer col-5 light-green border rounded text-center p-3 ms-3 ${selectedOption2 === 'unlike' ? 'light-green ' : 'bg-white'}`}>
                    <img src='/asset/like.png' alt='' className='img-fluid unlike-img' />
                </div>
            </div>

        </div>
    )
}
