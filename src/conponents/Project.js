import React from 'react'
import Button from '@mui/material/Button';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Footer from './Footer';
const Project = () => {
    return (
        <>
            <div className='container-fluid mt-5'>
                <h1 className='text-center text-secondary'>Projects</h1>
            </div>
            <div class="row row-cols-1 row-cols-md-3 g-4 mt-2">
                <div class="col">
                    <div class="card h-100">
                        <img src="https://plus.unsplash.com/premium_photo-1661879449050-069f67e200bd?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="Skyscrapers" />
                        <div class="card-body text-center">
                            <h5 class="card-title">Belogistics</h5>
                            <p class="card-text">
                                Belogistics is a leading logistics company in India. They provide all types of logistics services.
                            </p>
                            <Button href='https://belogistics.in/' target='_blank' variant="outlined" startIcon={<ArrowOutwardIcon />}>
                                View Website
                            </Button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp" class="card-img-top" alt="Los Angeles Skyscrapers" />
                        <div class="card-body text-center">
                            <h5 class="card-title">Palm Jebel Ali</h5>
                            <p class="card-text">
                            A world of island living, waking up to a beach resort environment with instant city access.
                            </p>
                            <Button href='#' target='_blank' variant="outlined" startIcon={<ArrowOutwardIcon />}>
                                View Website
                            </Button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="Palm Springs Road" />
                        <div class="card-body text-center">
                            <h5 class="card-title">Ecommerce</h5>
                            <p class="card-text">
                                An E-commerce website where you can buy and sell products online.
                            </p>
                            <Button href='#' target='_blank' variant="outlined" startIcon={<ArrowOutwardIcon />}>
                                View Website
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Project
