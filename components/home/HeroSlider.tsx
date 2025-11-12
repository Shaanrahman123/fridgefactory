"use client";

import { useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

interface Slide {
    id: number;
    backgroundImage: string;
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
}

const slides: Slide[] = [
    {
        id: 1,
        backgroundImage: "/images/blast-freezer.svg",
        title: "Rapid Freezing for Uncompromised Quality",
        description: "Preserve freshness and extend shelf life with our state-of-the-art blast freezers and freezing technology.",
        buttonText: "View Blast Freezers",
        buttonLink: "/products/blast-freezers",
    },
    {
        id: 2,
        backgroundImage: "/images/cold-rooms.svg",
        title: "Precision Cold Storage Solutions",
        description: "Tailored cold rooms and storage plants designed for maximum efficiency and reliability for your business.",
        buttonText: "Explore Cold Rooms",
        buttonLink: "/products/cold-room",
    },
    {
        id: 3,
        backgroundImage: "/images/ripening-chamber.svg",
        title: "Advanced Fruit Ripening Chambers",
        description: "Achieve uniform color and perfect taste with our fully automated banana and fruit ripening solutions.",
        buttonText: "See Ripening Chambers",
        buttonLink: "/products/banana-ripening",
    },
];

export default function HeroSlider() {
    const prevElRef = useRef<HTMLDivElement>(null);
    const nextElRef = useRef<HTMLDivElement>(null);
    const swiperRef = useRef<SwiperType | null>(null);

    const [isPlaying, setIsPlaying] = useState(true);
    const [currentSlide, setCurrentSlide] = useState(1);

    const toggleAutoplay = () => {
        if (!swiperRef.current) return;
        if (isPlaying) {
            swiperRef.current.autoplay.stop();
        } else {
            swiperRef.current.autoplay.start();
        }
        setIsPlaying(!isPlaying);
    };

    const handleSlideChange = (swiper: SwiperType) => {
        setCurrentSlide(swiper.realIndex + 1);
    };

    return (
        <section className="relative h-screen w-full overflow-hidden">

            <Swiper
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                onSlideChange={handleSlideChange}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    el: '.hero-swiper-pagination', // Use a custom class
                }}
                navigation={{
                    prevEl: prevElRef.current,
                    nextEl: nextElRef.current,
                }}
                onBeforeInit={(swiper) => {
                    if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                        swiper.params.navigation.prevEl = prevElRef.current;
                        swiper.params.navigation.nextEl = nextElRef.current;
                    }
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="w-full h-full" // Sits at z-0
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={slide.id}>
                        {/* --- Background Image (z-0) --- */}
                        <div className="absolute inset-0">
                            <Image
                                src={slide.backgroundImage}
                                alt={slide.title}
                                fill
                                style={{ objectFit: "cover" }}
                                priority={index === 0}
                                quality={100}
                                sizes="100vw"
                            />
                        </div>

                        {/* --- Gradient Overlays (z-10) --- */}
                        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
                        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

                        {/* --- Slide Content (z-20) --- */}
                        {/* FIX: Changed flex items-center to flex flex-col justify-center items-center */}
                        <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center items-center">
                            {/* FIX: Added text-center to center all content */}
                            <div className="max-w-3xl text-white text-center">
                                <div
                                    className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                                    data-aos="fade-up"
                                >
                                    <span className="text-sm font-semibold text-white/90">Premium Solutions</span>
                                </div>

                                <h1
                                    className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
                                    data-aos="fade-up"
                                    data-aos-delay="100"
                                >
                                    <span className="bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                        {slide.title}
                                    </span>
                                </h1>

                                <p
                                    className="mt-6 text-lg lg:text-xl xl:text-2xl opacity-90 max-w-3xl leading-relaxed"
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                >
                                    {slide.description}
                                </p>

                                <div
                                    // FIX: Changed justify-start to justify-center
                                    className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                >
                                    <Link
                                        href={slide.buttonLink}
                                        className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 transform overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                                        <span className="relative flex items-center justify-center gap-2">
                                            {slide.buttonText}
                                            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

                {/* --- CONTROLS (All z-30) --- */}

                {/* --- Premium Navigation Buttons --- */}
                <div
                    ref={prevElRef}
                    className="group absolute top-1/2 -translate-y-1/2 left-8 z-30 cursor-pointer p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 hidden md:block"
                >
                    <ChevronLeft size={28} className="text-white" />
                </div>

                <div
                    ref={nextElRef}
                    className="group absolute top-1/2 -translate-y-1/2 right-8 z-30 cursor-pointer p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 hidden md:block"
                >
                    <ChevronRight size={28} className="text-white" />
                </div>


                <div className="absolute bottom-8 right-8 z-30 text-white/70 text-lg font-medium backdrop-blur-sm bg-black/20 px-4 py-2 rounded-full hidden md:flex items-center space-x-3">
                    <span className="text-white">{String(currentSlide).padStart(2, '0')}</span>
                    <span className="text-white/50">/</span>
                    <span className="text-white/50">{String(slides.length).padStart(2, '0')}</span>
                </div>


            </Swiper>
        </section>
    );
}