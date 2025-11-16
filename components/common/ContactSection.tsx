import Link from 'next/link';
import { Send } from 'lucide-react';

export default function ContactSection() {
    return (
        <section className="py-20 lg:py-32 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <span
                        className="text-blue-600 font-bold text-lg uppercase tracking-wide"
                        data-aos="fade-up"
                    >
                        Connect With Us
                    </span>
                    <h2
                        className="text-4xl lg:text-5xl font-extrabold mt-3 mb-6 text-gray-900 leading-tight"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        Get In Touch
                    </h2>
                    <p
                        className="text-lg text-gray-600 leading-relaxed"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        Got questions or need assistance? Reach out to us today and we'll be happy to help!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    <div
                        className="bg-white p-8 lg:p-10 rounded-xl shadow-lg border border-gray-100"
                        data-aos="fade-right"
                        data-aos-delay="300"
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

                    <div data-aos="fade-left" data-aos-delay="300">
                        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 mb-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Star Refrigeration
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Village-Sakri,Post-Sakri Madhubani,Bihar-847239
                            </p>
                        </div>
                        <div className="rounded-xl shadow-lg overflow-hidden h-96 lg:h-[calc(100%-8.5rem)]">
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
    );
}