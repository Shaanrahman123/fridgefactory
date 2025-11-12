import { Leaf, Diamond, CheckCircle, Clock, Wallet, Award } from "lucide-react";

const features = [
    {
        icon: Leaf,
        title: "Resource-efficient",
        description: "Large storage facilities designed to keep goods at low temperatures.",
    },
    {
        icon: Diamond,
        title: "Premium quality",
        description: "Since the system is centralized, accessing and maintaining the filters becomes more convenient.",
    },
    {
        icon: CheckCircle,
        title: "Compact design",
        description: "With the system located in one central spot, filter access and maintenance are streamlined.",
    },
    {
        icon: Clock,
        title: "Prompt delivery",
        description: "Centralized air cooling systems generally operate more quietly compared to several smaller units.",
    },
    {
        icon: Wallet,
        title: "Economically efficient",
        description: "They typically cost less to install compared to several smaller air conditioning units.",
    },
    {
        icon: Award,
        title: "Top-notch quality",
        description: "Since the system is centralized, accessing and maintaining the filters is more convenient.",
    },
];

export default function CoreCompetitiveEdge() {
    return (
        <section className="py-20 lg:py-32 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <span
                        className="text-blue-600 font-bold text-lg uppercase tracking-wide"
                        data-aos="fade-up"
                    >
                        Why Choose Us
                    </span>
                    <h2
                        className="text-4xl lg:text-5xl font-extrabold mt-3 mb-6 text-gray-900 leading-tight"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        Our Core Competitive Edge
                    </h2>
                    <p
                        className="text-lg text-gray-600 leading-relaxed"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        We deliver unmatched value through innovation, efficiency, and a relentless focus on quality.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                            data-aos="fade-up"
                            data-aos-delay={100 * (index + 1)}
                        >
                            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                                <feature.icon className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}