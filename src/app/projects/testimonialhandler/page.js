"use client"

import { title } from "process"
import "./page.css"
import Image from "next/image"

const screenshots = [
    {
        src: "",
        alt: "",
        title: "",
        description: ""
    },
    {
        src: "",
        alt: "",
        title: "",
        description: ""
    },
    {
        src: "",
        alt: "",
        title: "",
        description: ""
    },
    {
        src: "",
        alt: "",
        title: "",
        description: ""
    }
]

export default function testimonialHandlerPage() {
    return(
        <section className="page-section">
            <div>
                <h1>Pictures (to be made into slideshow)</h1>
            </div>
            <div>
                <p>
                    The `Testimonial Handler Solution` is a project that I have worked on during my internship from Janurary-March 2026 as part of my 5th, and last semester in my degree. 
                </p>
                <p>
                    Kristofferskolen in Roskilde, Denmark has the yearly task of creating testimonials for their students in year 2, 4, 6, and 9, due to them not getting grades like normal schools. These testimonials are rather long files that usually gets put together manually by the administration. This is a rather time consuming task that also proves to be rather tedious.
                </p>
                <p>
                    They sought a solution, which could take the manual assembly aspect away from the equation, and make a standardised layout for the testimonials, which was easy to create and deal with.
                </p>
            </div>

            <div className="screenshots-section">

            </div>
        </section>
    )
}

