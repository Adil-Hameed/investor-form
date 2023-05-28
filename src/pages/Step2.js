import React from 'react'
import Map from '../components/step2/Map'
import PreNavbar from '../components/common/PreNavbar'
import Navbar from '../components/common/Navbar'
import StepBar from '../components/common/StepBar'
import Footer from '../components/common/Footer'
import Mapchart from '../components/step2/Mapchart'



export default function Step2() {
    return (
        <>
            <PreNavbar />
            <Navbar />
            <StepBar step2 />
            <Map />
            <Mapchart />
            <Footer />
        </>
    )
}
