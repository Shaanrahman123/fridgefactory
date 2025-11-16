import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    Home,
    ChevronRight,
    MapPin,
    Phone,
    Mail,
    Facebook,
    Instagram,
    Linkedin,
    Send
} from "lucide-react";
import { ElementType } from "react"; // <-- 1. IMPORT ElementType


export const metadata = {
    title: "Contact Star Refrigeration & Air Conditioning | Call +91 8178198555",
    description:
        "Get in touch with Star Refrigeration & Air Conditioning for cold rooms, walk-in freezers, banana ripening chambers, and HVAC solutions.",
    alternates: {
        canonical: "https://www.starrefrigeration.in/contact",
    },
};

export default function ContactPage() {
    return (
        <div className="bg-gray-50 text-gray-800">
            {/* --- 1. Hero Section --- */}
            <section className="relative h-[50vh] w-full overflow-hidden flex items-center justify-center p-6 text-center">
                <Image
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2940&auto=format&fit=crop"
                    alt="Contact Star Refrigeration"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                    quality={80}
                    className="absolute inset-0 z-0 brightness-75"
                />
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-gray-900/80 via-gray-900/60 to-transparent" />
                <div className="absolute inset-0 z-10 bg-gradient-to-r from-gray-900/70 via-gray-900/30 to-transparent" />

                <div className="relative z-20 max-w-4xl text-white">
                    <span
                        className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm font-semibold text-white/90"
                        data-aos="fade-up"
                    >
                        Get In Touch
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight" data-aos="fade-up" data-aos-delay="100">
                        Contact Us
                    </h1>
                    <p className="text-lg md:text-xl opacity-90" data-aos="fade-up" data-aos-delay="200">
                        We're here to help. Reach out with any questions or for a project quote.
                    </p>
                </div>
            </section>

            {/* --- 2. Breadcrumbs --- */}
            <nav className="bg-white border-b border-gray-200">
                <div className="container mx-auto px-6 py-3">
                    <ol className="flex items-center space-x-2 text-sm text-gray-500">
                        <li>
                            <Link href="/" className="flex items-center hover:text-blue-600 transition-colors" aria-label="Contact Star Refrigeration">
                                <Home size={16} className="mr-2" />
                                Home
                            </Link>
                        </li>
                        <li><ChevronRight size={16} /></li>
                        <li>
                            <span className="font-medium text-gray-700">Contact Us</span>
                        </li>
                    </ol>
                </div>
            </nav>

            {/* --- 3. Main Content Area --- */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-6">
                    {/* Section Header */}
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2
                            className="text-4xl lg:text-5xl font-extrabold mt-3 mb-6 text-gray-900 leading-tight"
                            data-aos="fade-up"
                        >
                            Drop a Message to Get in Touch!
                        </h2>
                        <p
                            className="text-lg text-gray-600 leading-relaxed"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            Have questions or need assistance? Reach out to us today and we'll be happy to help.
                        </p>
                    </div>

                    {/* Main Grid: Form + Info */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                        {/* Column 1: Form */}
                        <div
                            className="bg-white p-8 lg:p-10 rounded-xl shadow-2xl border border-gray-100"
                            data-aos="fade-right"
                            data-aos-duration="800"
                        >
                            <form action="#" method="POST" className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        required
                                        className="block w-full px-4 py-3 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Your full name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        required
                                        className="block w-full px-4 py-3 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="you@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        className="block w-full px-4 py-3 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="+91 XXXXX XXXXX"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                                        Service of Interest
                                    </label>
                                    <select
                                        id="service"
                                        name="service"
                                        className="block w-full px-4 py-3 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white"
                                    >
                                        <option>Cold Storage Room</option>
                                        <option>Walk In Freezer</option>
                                        <option>Banana Ripening Chamber</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message (Optional)
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="block w-full px-4 py-3 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="How can we help you?"
                                    />
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="inline-flex w-full items-center justify-center px-8 py-3 bg-indigo-700 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-indigo-800 
                                                 hover:shadow-lg hover:-translate-y-0.5 transform transition-all duration-300 ease-in-out"
                                    >
                                        Submit
                                        <Send className="w-5 h-5 ml-2" />
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Column 2: Info & Map */}
                        <div data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
                            <h3 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6">
                                Contact Details
                            </h3>

                            {/* Info List */}
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start">
                                    <MapPin size={24} className="shrink-0 mr-4 mt-1 text-blue-600" />
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900">Address</h4>
                                        <p className="text-gray-600">Village-Sakri,Post-Sakri Madhubani,Bihar-847239</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <Phone size={24} className="shrink-0 mr-4 mt-1 text-blue-600" />
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900">Phone</h4>
                                        <p className="text-gray-600">+91-8178198555</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <Mail size={24} className="shrink-0 mr-4 mt-1 text-blue-600" />
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                                        <p className="text-gray-600">irshadali90905@gmail.com</p>
                                        {/* <p className="text-gray-600">abdulaziz230693@gmail.com</p> */}
                                    </div>
                                </li>
                            </ul>

                            {/* Follow Us */}
                            <h3 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6">
                                Follow Us
                            </h3>
                            <div className="flex space-x-4 mb-8">
                                <SocialIcon href="#" icon={Facebook} name='facebook' />
                                <SocialIcon href="#" icon={Instagram} name='instagram' />
                                <SocialIcon href="#" icon={Linkedin} name='linkedin' />
                            </div>

                            {/* Map */}
                            <div className="rounded-xl shadow-lg overflow-hidden h-96">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4441.56151626964!2d86.07756867610543!3d26.217859389604666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39edcfcf1ba20f81%3A0xf6dc5bf2cd77afd7!2sSakri%20Post%20Office!5e1!3m2!1sen!2sin!4v1763304389016!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

// --- 2. FIX: Added types for TypeScript ---
function SocialIcon({ href, icon: Icon, name }: { href: string; icon: ElementType, name: string }) {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full text-blue-600 hover:bg-indigo-700 hover:text-white transition-all"
            aria-label={`${name} Star Refrigeration`}
        >
            <Icon size={24} />
        </Link>
    );
}