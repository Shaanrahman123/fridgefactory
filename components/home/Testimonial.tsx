"use client";

import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight, Star, ThumbsUp, User2Icon } from "lucide-react";

const testimonialData = [
    {
        name: "Mithlesh kumar",
        image: "/images/avatars/mithlesh.png",
        stars: 5,
        testimonial: "The best refrigeration company in Delhi. Highly professional."
    },
    {
        name: "Hamza Shaikh",
        image: "/images/avatars/hamza.png",
        stars: 5,
        testimonial: "The best refrigeration company in Delhi. Highly professional."
    },
    {
        name: "MD Dilshad",
        image: "/images/avatars/dilshad.png",
        stars: 5,
        testimonial: "The best refrigeration company in Delhi. Highly professional."
    },
    {
        name: "Sam Studio",
        image: "/images/avatars/sam.png",
        stars: 5,
        testimonial: "The best refrigeration company in Delhi. Highly professional."
    },
    {
        name: "R. K. Singh",
        image: "/images/avatars/placeholder.png",
        stars: 5,
        testimonial: "The best refrigeration company in Delhi. Highly professional."
    },
];

export default function TestimonialSection() {
    const prevElRef = useRef<HTMLDivElement>(null);
    const nextElRef = useRef<HTMLDivElement>(null);

    return (
        <section className="py-20 lg:py-32 bg-slate-900 relative overflow-hidden">
            <div
                className="absolute inset-0 -z-0 opacity-20"
                aria-hidden="true"
            >
                <div className="absolute top-0 left-0 w-[50rem] h-[50rem] bg-radial-gradient from-blue-600 to-transparent -translate-x-1/2 -translate-y-1/2 blur-3xl" />
                <div className="absolute bottom-0 right-0 w-[50rem] h-[50rem] bg-radial-gradient from-blue-700 to-transparent translate-x-1/2 translate-y-1/2 blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <span
                        className="text-blue-400 font-bold text-lg uppercase tracking-wide"
                        data-aos="fade-up"
                    >
                        Testimonials
                    </span>
                    <h2
                        className="text-4xl lg:text-5xl font-extrabold mt-3 mb-6 text-white leading-tight"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        What Our Clients Say
                    </h2>
                </div>

                <div data-aos="fade-up" data-aos-delay="200" className="relative">
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
                            el: '.testimonial-pagination',
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                            1280: {
                                slidesPerView: 4,
                            },
                        }}
                        className="testimonial-slider !pb-20"
                    >
                        {testimonialData.map((testimonial) => (
                            <SwiperSlide key={testimonial.name} className="h-full">
                                <div className="h-full bg-slate-800 p-8 rounded-xl flex flex-col items-center text-center shadow-lg border border-slate-700">
                                    <div className="p-5 rounded-full bg-slate-700 mb-4"><User2Icon className="text-white text-2xl" size={36} /></div>
                                    <h3 className="text-xl font-bold text-white mb-1">
                                        {testimonial.name}
                                    </h3>
                                    <div className="flex text-yellow-400 mb-4">
                                        {[...Array(testimonial.stars)].map((_, i) => (
                                            <Star key={i} size={20} fill="currentColor" />
                                        ))}
                                    </div>
                                    <p className="text-lg text-slate-300 italic">
                                        "{testimonial.testimonial}"
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* <div ref={prevElRef} className="swiper-button-prev-custom group">
                        <div className="relative p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                            <ChevronLeft size={28} className="text-white" />
                        </div>
                    </div>

                    <div ref={nextElRef} className="swiper-button-next-custom group">
                        <div className="relative p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                            <ChevronRight size={28} className="text-white" />
                        </div>
                    </div> */}

                    <div className="swiper-pagination testimonial-pagination !bottom-0 pt-12"></div>
                </div>
            </div>

            <style jsx global>{`
                .swiper-button-prev-custom,
                .swiper-button-next-custom {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    z-index: 20;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .swiper-button-prev-custom {
                    left: -1rem;
                }

                .swiper-button-next-custom {
                    right: -1rem;
                }
                
                @media (max-width: 768px) {
                    .swiper-button-prev-custom,
                    .swiper-button-next-custom {
                        display: none;
                    }
                }
                
                .testimonial-pagination {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 0.75rem;
                }

                .testimonial-pagination .swiper-pagination-bullet {
                    width: 12px;
                    height: 12px;
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    opacity: 0.8;
                }

                .testimonial-pagination .swiper-pagination-bullet:hover {
                    background: rgba(255, 255, 255, 0.5);
                    transform: scale(1.2);
                }
                
                .testimonial-pagination .swiper-pagination-bullet-active {
                    background: #3B82F6; 
                    transform: scale(1.1);
                    width: 32px;
                    border-radius: 8px;
                    opacity: 1;
                }
            `}</style>
        </section>
    );
}