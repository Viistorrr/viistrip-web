import React from 'react'
import { Features } from './Features'
import { Footer } from './Footer'
import { Header } from './Header'
import { Hero } from './Hero'
import { Testimonials } from './Testimonials'
import { Tours } from './Tours'

export const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <Tours />
            <Features />
            <Testimonials />
            <Footer />
        </>
    )
}
