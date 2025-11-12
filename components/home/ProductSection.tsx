"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { productDetails } from "../data";
interface Product {
    name: string;
    href: string;
    description: string;
    imageUrl: string;
}

interface ProductCardProps {
    product: Product;
}

function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="h-full bg-white rounded-xl shadow-lg overflow-hidden flex flex-col group border border-gray-100 hover:shadow-2xl transition-all duration-300 ease-in-out">

            {/* Image Container */}
            <div className="overflow-hidden h-60">
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={500}
                    height={350}
                    className="object-cover w-full h-full transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
            </div>

            {/* Content Container */}
            <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2 truncate">
                    {product.name}
                </h3>
                <p className="text-gray-600 text-base flex-1 line-clamp-3">
                    {product.description}
                </p>

                {/* Button */}
                <Link
                    href={product.href}
                    className="inline-flex items-center mt-6 text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300"
                >
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
            </div>
        </div>
    )
}

// --- MAIN PRODUCT SECTION COMPONENT ---
export default function ProductSection() {
    const prevElRef = useRef<HTMLDivElement>(null);
    const nextElRef = useRef<HTMLDivElement>(null);

    return (
        <section className="pt-20 lg:pt-32 relative overflow-hidden ">

            <div className="absolute bottom-4 left-0 w-full h-96 ">
                <div className="absolute bottom-0 left-0 w-full h-full bg-linear-to-r from-blue-600 via-purple-500 to-pink-500"
                    style={{
                        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 80% 60%, 60% 30%, 40% 70%, 20% 40%, 0% 80%)"
                    }}
                />
            </div>
            {/* "Illustrator" Background Effect */}
            {/* <div
                className="absolute inset-0 z-0 opacity-10"
                aria-hidden="true"
            >
                <div className="absolute top-0 left-0 w-200 h-200 bg-radial-gradient from-blue-200 to-transparent -translate-x-1/2 -translate-y-1/2 blur-3xl" />
                <div className="absolute bottom-0 right-0 w-200 h-200 bg-radial-gradient from-blue-300 to-transparent translate-x-1/2 translate-y-1/2 blur-3xl" />
            </div> */}

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <span
                        className="text-blue-600 font-bold text-lg uppercase tracking-wide"
                        data-aos="fade-up"
                    >
                        Our Products
                    </span>
                    <h2
                        className="text-4xl lg:text-5xl font-extrabold mt-3 mb-6 text-gray-900 leading-tight"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        Engineered for Excellence
                    </h2>
                    <p
                        className="text-lg text-gray-600 leading-relaxed"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        Explore our comprehensive range of high-performance cold storage and refrigeration solutions, designed for reliability and efficiency.
                    </p>
                </div>

                {/* Swiper Slider */}
                <div data-aos="fade-up" data-aos-delay="300" className="relative">
                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        onBeforeInit={(swiper) => {
                            if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                                swiper.params.navigation.prevEl = prevElRef.current;
                                swiper.params.navigation.nextEl = nextElRef.current;
                            }
                        }}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation={{
                            prevEl: prevElRef.current,
                            nextEl: nextElRef.current,
                        }}
                        pagination={{
                            clickable: true,
                            el: '.product-pagination', // Custom class for pagination
                        }}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        // === YOUR CUSTOM BREAKPOINTS ===
                        breakpoints={{
                            640: { // sm
                                slidesPerView: 2,
                            },
                            1024: { // lg
                                slidesPerView: 3,
                            },
                            1280: { // xl
                                slidesPerView: 4,
                            },
                            1536: { // 2xl
                                slidesPerView: 4,
                            }
                        }}
                        className="product-slider !pb-20" // Add padding-bottom for pagination
                    >

                        {/* --- 4. FIX: MAP OVER THE IMPORTED DATA --- */}
                        {/* Change 'productDetails' to 'productsData' */}
                        {productDetails.map((product) => (
                            <SwiperSlide key={product.name} className="h-full">
                                <ProductCard product={product} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* --- Premium Navigation (STYLES COPIED FROM YOUR HERO) --- */}
                    {/* <div ref={prevElRef} className="swiper-button-prev-custom group">
                        <div className="relative p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                            <ChevronLeft size={28} className="text-white" />
                            <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-white/30 transition-all duration-300" />
                        </div>
                    </div>

                    <div ref={nextElRef} className="swiper-button-next-custom group">
                        <div className="relative p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                            <ChevronRight size={28} className="text-white" />
                            <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-white/30 transition-all duration-300" />
                        </div>
                    </div>

                    <div className="swiper-pagination product-pagination !bottom-0 pt-12"></div> */}
                </div>
            </div>

            {/* --- STYLES --- */}
            <style jsx global>{`
                /* === NAVIGATION (Copied from your HeroSlider for consistency) === */
                
                .swiper-button-prev-custom,
                .swiper-button-next-custom {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    z-index: 20;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    
                    /* Change: Adjusting position to be outside the container */
                    /* This looks more premium on desktop */
                    top: 45%; /* Aligns with the card center, not the image */
                }

                .swiper-button-prev-custom {
                    left: -1rem; /* Start slightly outside */
                }

                .swiper-button-next-custom {
                    right: -1rem; /* Start slightly outside */
                }

                .swiper-button-prev-custom:hover,
                .swiper-button-next-custom:hover {
                    transform: translateY(-50%) scale(1.1);
                }
                
                /* Hiding arrows on smaller screens (like your hero) */
                @media (max-width: 1024px) {
                    .swiper-button-prev-custom,
                    .swiper-button-next-custom {
                        display: none;
                    }
                }
                
                /* === PAGINATION (Adapted for light background) === */

                .product-pagination {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 0.75rem; /* 12px */
                }

                .product-pagination .swiper-pagination-bullet {
                    width: 12px;
                    height: 12px;
                    background: ${'rgba(0, 0, 0, 0.2)'}; /* Gray dot for light BG */
                    border-radius: 50%;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    border: 2px solid transparent;
                    opacity: 0.8;
                }

                .product-pagination .swiper-pagination-bullet:hover {
                    background: ${'rgba(0, 0, 0, 0.4)'};
                    transform: scale(1.2);
                }
                
                /* Active bullet uses your BLUE theme color */
                .product-pagination .swiper-pagination-bullet-active {
                    background: #2563EB; /* Tailwind blue-600 */
                    transform: scale(1.1);
                    width: 32px; /* Premium "pill" shape */
                    border-radius: 8px;
                    opacity: 1;
                }
            `}</style>
        </section>
    );
}