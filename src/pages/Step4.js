import React from 'react'
import PreNavbar from '../components/common/PreNavbar'
import Navbar from '../components/common/Navbar'
import StepBar from '../components/common/StepBar'
import Footer from '../components/common/Footer'
import Built from '../components/step4/Built'
import Number from '../components/step4/Number'

export default function Step4() {
    return (
        <>
            <PreNavbar />
            <Navbar />
            <StepBar step4 />
            <Built />
            <Number />
            <Footer />
        </>
    )
}
