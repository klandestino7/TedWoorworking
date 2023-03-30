import Head from 'next/head'
import Image from 'next/image'

import Reuniao from '@/components/Home/Reuniao'
import ShortAbout from '@/components/Home/ShortAbout'
import Headline from '@/components/Home/Headline'
import ExplainProduct from '@/components/Home/ExplainProduct'
import ProjectsTypes from '@/components/Home/ProjectsTypes'
import Testimonials from '@/components/Home/Testimonials'
import Offer from '@/components/Home/Offer'
import ButtonSection from '@/components/Home/ButtonSection'
import { Button, Link } from '@chakra-ui/react'




export default function Home() {
    return (
        <>
            <Head>
                <title>Instant Access to 16,000 Woodworking Plans and Projects - TedsWoodworking</title>
                <meta name="description" content="Get instant access to thousands of high quality woodworking plans and projects" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <ButtonSection />
                <ShortAbout />
                {/* <ButtonSection /> */}
                <Headline
                    headline={"“Here's Some Advice That'll Save You $$$ On Your Next Woodworking Project...”"}
                    color={"rgb(32,92,118)"}
                    fontColor={"white"}
                />

                <ExplainProduct />

                <ButtonSection />

                <Headline
                    headline={`“Woodworking Made EASY”
                    With Earth's Largest Database of Woodworking Projects!`}
                    color={"rgb(163,77,0)"}
                    fontColor={"white"}
                />

                <ProjectsTypes />
                
                <ButtonSection />

                {/* <Headline
                    headline={`Listen To What Our Satisfied Customers Are Saying:`}
                    color={"rgb(32,92,118)"}
                    fontColor={"white"}
                />
                <Testimonials /> */}
                {/* <ButtonSection /> */}
                {/* <Offer /> */}
            </main> 
        </>
    )
}


