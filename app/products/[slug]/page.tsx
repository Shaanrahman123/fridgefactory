import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle, Home, ChevronRight } from "lucide-react";

// Import your data functions
import { getProductBySlug, ProductDetail, getAllProductSlugs } from "@/lib/productDetailsData"; // Adjust path as needed
import ContactSection from "@/components/common/ContactSection";
import { title } from "process";

// This function correctly runs on the server
export async function generateStaticParams() {
    const slugs = getAllProductSlugs();
    return slugs.map((slug) => ({
        slug: slug,
    }));
}

// Define props for the page
interface ProductPageProps {
    params: {
        slug: string;
    };
}


// -------------------------
// 2. Dynamic Metadata (SEO)
// -------------------------
export async function generateMetadata({ params }: ProductPageProps) {
    const resolvedParams = await params; // 👈 Unwrap the Promise

    const product = getProductBySlug(resolvedParams.slug);

    if (!product) {
        return {
            // title: "Product Not Found", // Fallback title
            title: "Star Refrigeration"
        };
    }

    // ✅ Correct: Just return the title property
    return {
        title: `${product.name} | Star Refrigeration`,
    };
}


// This is a Server Component
export default async function ProductPage({ params }: ProductPageProps) {
    const resolvedParams = await params; // 👈 Unwrap the Promise

    const product = getProductBySlug(resolvedParams.slug);

    if (!product) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-20">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
                <p className="text-lg text-gray-600 mb-8">Could not find product for slug: {params.slug}</p>
                <Link href="/" aria-label="Star Refrigeration" className="inline-flex items-center px-6 py-3 bg-indigo-700 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-800 transition-colors">
                    <ArrowLeft className="w-5 h-5 mr-2" /> Back to Home
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-white text-gray-800">
            {/* --- 1. Hero Section --- */}
            <section className="relative h-[50vh] w-full overflow-hidden flex items-center justify-center p-6 text-center">
                <Image
                    src={product.heroImageUrl || product.imageUrl}
                    alt={product.name}
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                    quality={80}
                    className="absolute inset-0 z-0 brightness-75"
                />
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-gray-900/70 via-gray-900/50 to-transparent" />
                <div className="absolute inset-0 z-10 bg-gradient-to-r from-gray-900/60 via-gray-900/30 to-transparent" />

                <div className="relative z-20 max-w-4xl text-white">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight" data-aos="fade-up">
                        {product.name}
                    </h1>
                    <p className="text-lg md:text-xl opacity-90" data-aos="fade-up" data-aos-delay="100">
                        {product.shortDescription}
                    </p>
                </div>
            </section>

            {/* --- 2. Breadcrumbs --- */}
            <nav className="bg-gray-50 border-b border-gray-200">
                <div className="container mx-auto px-6 py-3">
                    <ol className="flex items-center space-x-2 text-sm text-gray-500">
                        <li>
                            <Link href="/" aria-label="Star Refrigeration" className="flex items-center hover:text-blue-600 transition-colors">
                                <Home size={16} className="mr-2" />
                                Home
                            </Link>
                        </li>
                        <li><ChevronRight size={16} /></li>
                        <li>
                            <span className="font-medium text-gray-700">{product.name}</span>
                        </li>
                    </ol>
                </div>
            </nav>

            {/* --- 3. Main Content Area (Light Theme) --- */}
            <section className="bg-white py-16 lg:py-24">
                <div className="container mx-auto px-6">
                    {/* Product Overview */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div data-aos="fade-right" data-aos-duration="800">
                            <Image
                                src={product.imageUrl}
                                alt={product.name}
                                width={800}
                                height={600}
                                className="rounded-xl shadow-lg border border-gray-100 object-cover w-full h-auto"
                            />
                        </div>
                        <div data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
                            <span className="text-blue-600 font-bold text-lg uppercase tracking-wide">
                                Overview
                            </span>
                            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 my-3">
                                {product.name}
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                {product.description}
                            </p>

                            {/* --- Premium Features List --- */}
                            {product.features && product.features.length > 0 && (
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h3>
                                    <ul className="space-y-3">
                                        {product.features.map((feature, index) => (
                                            <li key={index} className="flex items-center" data-aos="fade-left" data-aos-delay={100 * index}>
                                                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full">
                                                    <CheckCircle className="w-5 h-5 text-blue-600" />
                                                </div>
                                                <span className="ml-3 text-lg text-gray-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <Link
                                href="/contact"
                                className="inline-flex items-center px-10 py-4 bg-indigo-700 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-indigo-800 
                                         hover:shadow-lg hover:-translate-y-0.5 transform transition-all duration-300 ease-in-out"
                            >
                                Enquire Now
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 4. Sub Products / Gallery Section (Light Theme) --- */}
            {product.subProducts && product.subProducts.length > 0 && (
                <section className="bg-gray-50 py-16 lg:py-24 border-t border-gray-100">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <span
                                className="text-blue-600 font-bold text-lg uppercase tracking-wide"
                                data-aos="fade-up"
                            >
                                Product Gallery
                            </span>
                            <h2 className="text-4xl lg:text-5xl font-extrabold mt-3 mb-6 text-gray-900 leading-tight" data-aos="fade-up" data-aos-delay="100">
                                Explore Our {product.name} Varieties
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {product.subProducts.map((subProduct, index) => (
                                <div
                                    key={index}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    {/* --- Re-using the Product Card from your slider --- */}
                                    <div className="h-full bg-white rounded-xl shadow-lg overflow-hidden flex flex-col group border border-gray-100 hover:shadow-2xl transition-all duration-300 ease-in-out">
                                        <div className="overflow-hidden h-60">
                                            <Image
                                                src={subProduct.imageUrl}
                                                alt={subProduct.name}
                                                width={500}
                                                height={350}
                                                className="object-cover w-full h-full transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                                            />
                                        </div>
                                        <div className="p-6 flex flex-col flex-1">
                                            <h3 className="text-xl font-bold text-gray-900 mb-2 truncate">
                                                {subProduct.name}
                                            </h3>
                                            <p className="text-gray-600 text-base flex-1 line-clamp-3">
                                                {subProduct.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}


            <ContactSection />
        </div>
    );
}