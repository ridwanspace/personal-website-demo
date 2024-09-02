// components/Hero.tsx
import { Button } from "@/components/ui/button"
import Image from 'next/image'

import HeroImage from "../../public/hero.png"


export default function Hero() {
    return (
        <section className="bg-gradient-to-r from-gray-900 via-blue-900 to-blue-800 text-white py-20">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 mb-10 lg:mb-0">
                    <div className="bg-blue-500 text-sm font-bold py-1 px-3 rounded-full inline-block mb-4">
                        Data Engineer | Cloud Expert | Innovator
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                        Transforming Data <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                            Into Insights and Innovation
                        </span>
                    </h1>
                    <p className="mb-6 text-gray-300">
                        With over 3 years of experience in modernizing data management and fostering innovative solutions,
                        I specialize in creating cutting-edge data pipelines, optimizing cloud infrastructures, and driving
                        data-driven decision making. My expertise spans Python, SQL, AWS, and Google Cloud Platform,
                        allowing me to tackle complex data challenges and deliver impactful results.
                    </p>
                    <div className="flex space-x-4">
                        <Button className="bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white rounded-full">
                            Get Started
                        </Button>
                        <Button
                            variant="outline"
                            className="rounded-full border-white text-blue-600 hover:bg-white hover:text-blue-900"
                            asChild
                        >
                            <a href="https://www.ucmo.edu/offices/career-and-life-design-center/internal-resources/shared/atssampleresume.pdf" download>Download my CV</a>
                        </Button>
                    </div>
                </div>
                <div className="lg:w-1/2 relative">
                    <Image
                        src={HeroImage}
                        alt="Next Generation Data Engineering"
                        width={500}
                        height={500}
                        className="rounded-lg"
                    />
                    <div className="absolute -top-10 -left-10 w-20 h-20 bg-blue-400 rounded-full opacity-50 animate-pulse"></div>
                    <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-emerald-400 rounded-full opacity-50 animate-pulse"></div>
                </div>
            </div>
        </section>
    )
}