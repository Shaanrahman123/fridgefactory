// lib/productDetailsData.ts

// 1. Define the detailed Product interface
export interface ProductDetail {
    slug: string; // This MUST match the URL, e.g., "cold-storage-room"
    name: string;
    shortDescription: string;
    description: string;
    imageUrl: string;
    heroImageUrl?: string;
    features?: string[];
    subProducts?: {
        name: string;
        description: string;
        imageUrl: string;
    }[];
}

// 2. Your new, detailed product data array
const productsData: ProductDetail[] = [
   {
  "slug": "cold-storage-room",
  "name": "Cold Storage Room",
  "shortDescription": "Large-scale industrial solutions for preserving perishables.",
  "description": "Our Cold Storage Rooms are engineered for large-scale industrial applications, providing optimal conditions for preserving a wide range of perishables. With advanced insulation and precise climate control, we ensure your products maintain their freshness and quality.",
  "imageUrl": "/images/products/1.jpg",
  "heroImageUrl": "/images/products/1.jpg",
  "features": [
    "Advanced thermal insulation",
    "Energy-efficient refrigeration",
    "Customizable configurations"
  ],
  "subProducts": [
    {
      "name": "Fully Automatic Cold Storage Room",
      "description": "A fully automated system for efficient and precise cold storage.",
      "imageUrl": "/images/cold-storage-room/1.jpg"
    },
    {
      "name": "Potato Cold Storage Room",
      "description": "Specialized storage designed to maintain the optimal environment for potatoes.",
      "imageUrl": "/images/cold-storage-room/2.jpg"
    },
    {
      "name": "Blue Star Modular Cold Storage Room",
      "description": "Modular and scalable cold room solutions from Blue Star.",
      "imageUrl": "/images/cold-storage-room/3.jpg"
    },
    {
      "name": "Automatic Cold Storage Room",
      "description": "Automated cold storage for streamlined operations and access.",
      "imageUrl": "/images/cold-storage-room/4.jpg"
    },
    {
      "name": "Commercial Cold Storage Room",
      "description": "Durable and spacious cold storage for commercial businesses like restaurants and hotels.",
      "imageUrl": "/images/cold-storage-room/5.jpg"
    },
    {
      "name": "Vegetables Cold Storage Room",
      "description": "Climate-controlled rooms to preserve the freshness and extend the shelf life of vegetables.",
      "imageUrl": "/images/cold-storage-room/6.jpg"
    },
    {
      "name": "Blue Star Cold Storage Room",
      "description": "Reliable and efficient general-purpose cold storage room solutions by Blue Star.",
      "imageUrl": "/images/cold-storage-room/7.jpg"
    },
    {
      "name": "Dairy Products Cold Storage Room",
      "description": "Temperature-specific storage for dairy products, ensuring safety and quality.",
      "imageUrl": "/images/cold-storage-room/8.jpg"
    },
    {
      "name": "Carrier Cold Storage Room",
      "description": "High-performance cold storage solutions from Carrier, known for reliability.",
      "imageUrl": "/images/cold-storage-room/9.jpg"
    },
    {
      "name": "Industrial Cold Storage Room",
      "description": "Large-scale, heavy-duty cold storage for industrial and logistical applications.",
      "imageUrl": "/images/cold-storage-room/10.jpg"
    }
  ]
},
  {
  "slug": "cold-room",
  "name": "Cold Room",
  "shortDescription": "Versatile, modular cold rooms for restaurants and supermarkets.",
  "description": "Versatile, modular cold rooms for restaurants and supermarkets. Our cold rooms are designed for reliability and efficiency, ensuring your products are always kept at the perfect temperature.",
  "imageUrl": "/images/products/2.jpg",
  "heroImageUrl": "/images/products/2.jpg",
  "features": [
    "Easy to assemble",
    "Precise temperature control",
    "Hygienic and durable"
  ],
  "subProducts": [
    
    {
      "name": "Medicine Cold Room",
      "description": "Specialized, temperature-controlled storage for pharmaceutical and medical supplies.",
      "imageUrl": "/images/cold-room/1.jpg"
    },
    {
      "name": "Cold Room",
      "description": "General-purpose modular cold room for various commercial applications.",
      "imageUrl": "/images/cold-room/2.jpg"
    },
    {
      "name": "Ice Cream Cold Room",
      "description": "Deep-freezer cold rooms designed to maintain the optimal temperature and consistency for ice cream.",
      "imageUrl": "/images/cold-room/3.jpg"
    },
    {
      "name": "Frozen Chicken Cold Room",
      "description": "Specialized freezer storage for poultry, ensuring long-term preservation and food safety.",
      "imageUrl": "/images/cold-room/4.jpg"
    }
  ]
},
    {
  "slug": "walk-in-freezer",
  "name": "Walk In Freezer",
  "shortDescription": "High-performance freezers for deep-frozen storage.",
  "description": "High-performance freezers for deep-frozen storage. Ideal for businesses requiring long-term storage of frozen goods without compromising quality.",
  "imageUrl": "/images/products/3.jpg",
  "heroImageUrl": "/images/products/3.jpg",
  "features": [
    "Rapid freezing capability",
    "Superior insulation",
    "Heavy-duty construction"
  ],
  "subProducts": [
    {
      "name": "Walk In Freezer",
      "description": "A spacious walk-in freezer unit for commercial or industrial use, complete with shelving.",
      "imageUrl": "/images/walkin-freezer/1.jpg"
    },
    {
      "name": "Walking Freezer",
      "description": "A durable walking freezer with ample shelving for organized, accessible frozen storage.",
      "imageUrl": "/images/walkin-freezer/2.jpg"
    }
  ]
},
   {
  "slug": "banana-ripening-chambers",
  "name": "Banana Ripening Chambers",
  "shortDescription": "State-of-the-art control for uniform, perfect ripening.",
  "description": "Employing modern technology, these are smartly developed by our sincere professionals. Our Banana Ripening Chambers are widely appreciated for their low maintenance cost, temperature control function, low power consumption and durability.",
  "imageUrl": "/images/products/4.jpg",
  "heroImageUrl": "/images/products/4.jpg",
  "features": [
    "Low maintenance cost",
    "Precise temperature control",
    "Low power consumption"
  ],
  "subProducts": [
    {
      "name": "Blue Star Banana Ripening Chambers",
      "description": "Optimized for Blue Star systems, ensuring peak performance.",
      "imageUrl": "/images/banana-ripening-chamber/1.jpg"
    },
    {
      "name": "Industrial Banana Ripening Chambers",
      "description": "Large-scale solutions for commercial banana ripening.",
      "imageUrl": "/images/banana-ripening-chamber/2.jpg"
    },
    {
      "name": "Banana Ripening Chambers",
      "description": "Standard chambers for efficient, uniform banana ripening.",
      "imageUrl": "/images/banana-ripening-chamber/3.jpg"
    }
  ]
},

{
  "slug": "multipurpose-cold-storage",
  "name": "Multipurpose Cold Storage",
  "shortDescription": "Versatile and reliable cold storage solutions for various needs.",
  "description": "Our Multipurpose Cold Storage units are engineered for flexibility and reliability, catering to a wide range of industries including food processing, pharmaceuticals, and logistics. These units provide precise temperature control to ensure product integrity, optimized for high efficiency and low operational costs. Built with high-quality materials, they offer durability and long-lasting performance.",
  "imageUrl": "/images/products/5.jpg",
  "heroImageUrl": "/images/products/5.jpg",
  "features": [
    "Wide temperature range (e.g., -20°C to +10°C)",
    "Modular and customizable design",
    "Energy-efficient refrigeration systems",
    "Suitable for various applications",
    "Advanced monitoring and control"
  ],
  "subProducts": []
},
{
  "slug": "commercial-cold-room",
  "name": "Commercial Cold Room",
  "shortDescription": "Reliable and efficient cold storage for your business needs.",
  "description": "Our Commercial Cold Rooms are designed for businesses that require dependable and efficient refrigeration. Ideal for restaurants, hotels, and retail, these units provide reliable temperature management to keep a wide rangeof products, including food, beverages, and pharmaceuticals, fresh and safe. Built with advanced refrigeration technology, our cold rooms ensure optimal storage conditions, preventing spoilage and extending the shelf life of your valuable inventory. We prioritize quality and performance, delivering solutions that meet the highest industry standards.",
  "imageUrl": "/images/products/6.jpg",
  "heroImageUrl": "/images/products/6.jpg",
  "features": [
    "Precise temperature control",
    "Consistent and reliable performance",
    "Energy-efficient refrigeration technology",
    "Durable construction built to last",
    "Customizable to specific business requirements"
  ],
  "subProducts": []
},
{
  "slug": "ice-cream-cold-storage-room",
  "name": "Ice Cream Cold Storage Room",
  "shortDescription": "Specialized deep-freezing solutions for ice cream.",
  "description": "We offer a wide range of Ice Cream Cold Storage Rooms, tailored by our experienced manufacturing unit to suit any industry. These units are designed to store products for extended periods without any loss of quality, taste, or texture. Featuring varied temperature settings to cater to specific requirements, these rooms are also lightweight, simple to clean, and hassle-free to move, offering the perfect solution for ice cream and frozen dessert storage.",
  "imageUrl": "/images/products/7.jpg",
  "heroImageUrl": "/images/products/7.jpg",
  "features": [
    "Specialized deep-freezing capabilities",
    "Maintains consistent low temperatures",
    "Preserves product taste, texture, and quality",
    "Customizable designs",
    "Easy to clean and maintain",
    "Lightweight and easy to relocate"
  ],
  "subProducts": []
},
{
  "slug": "cold-room-indoor-unit",
  "name": "Cold Room Indoor Unit",
  "shortDescription": "Efficient indoor evaporator units for cold rooms.",
  "description": "Since our establishment, we have been a leading manufacturer and supplier of Cold Room Indoor Units. These units are developed using high-quality fiberglass and insulating materials, making them ideal for storing medicine, food, and other materials hygienically. Our indoor units protect stored materials against harmful bacteria and contamination. We can also customize these units to meet different client specifications and requirements.",
  "imageUrl": "/images/products/8.jpg",
  "heroImageUrl": "/images/products/8.jpg",
  "features": [
    "High-efficiency cooling",
    "Made with fiberglass and insulating materials",
    "Ensures hygienic storage conditions",
    "Protects against bacteria and contamination",
    "Customizable to client specifications"
  ],
  "subProducts": []
},
{
  "slug": "cold-room-outdoor-unit",
  "name": "Cold Room Outdoor Unit",
  "shortDescription": "Robust outdoor condensing units for cold room systems.",
  "description": "With rich industry experience and knowledge, we are committed to offering an excellent quality range of AC Cold Room Outdoor Units. This unit is fabricated with the use of optimum quality raw materials and highly advanced techniques as per international quality standards. Due to its longer life, the provided unit is safely used for storing vegetables and other produce in a secure way. In addition to this, the offered AC Cold Room Outdoor Unit can be availed at marginal prices from us.",
  "imageUrl": "/images/products/9.jpg",
  "heroImageUrl": "/images/products/9.jpg",
  "features": [
    "High-quality raw material construction",
    "Advanced manufacturing techniques",
    "Adheres to international quality standards",
    "Durable and long operational life",
    "Weather-resistant design",
    "Ideal for produce and vegetable storage"
  ],
  "subProducts": []
},
{
  "slug": "fruit-ripening-chamber",
  "name": "Fruit Ripening Chamber",
  "shortDescription": "Advanced, air-tight chambers for uniform fruit ripening.",
  "description": "With a vision to be a pioneer in our domain, we are engaged in the business of manufacturing and supplying premium quality Fruit Ripening Chambers. These chambers are extremely air-tight with attractively designed doors and are used to ripen various types of fruits including bananas, apples, and mangoes. Our chambers maintain a constant temperature between 14 and 23 degrees Celsius for easy ripening of fruits. Components of the Fruit Ripening Chamber include centralized refrigeration with multiple compressors.",
  "imageUrl": "/images/products/10.jpg",
  "heroImageUrl": "/images/products/10.jpg",
  "features": [
    "Air-tight construction",
    "Precise temperature control (14-23°C)",
    "Suitable for various fruits (bananas, mangoes, apples)",
    "Centralized refrigeration system",
    "Multiple compressors for reliability"
  ],
  "subProducts": []
},
{
  "slug": "walk-in-chiller-room",
  "name": "Walk In Chiller Room",
  "shortDescription": "Reliable walk-in chillers with advanced safety features.",
  "description": "Our company is a celebrated manufacturer and supplier of Walk In Chiller Room. The chiller room has inbuilt safety feature installed to shut down the system in case of a fault of pressure control or any other device which is similar to it. Apart from this, the acoustic signal is also there to detect the probe error. Moreover, the Walk In Chiller Room can be availed from us in varied specifications at reasonable price point.",
  "imageUrl": "/images/products/11.jpg",
  "heroImageUrl": "/images/products/11.jpg",
  "features": [
    "Inbuilt safety shut-down system",
    "Acoustic signal for probe error detection",
    "Available in varied specifications",
    "Reliable pressure control monitoring"
  ],
  "subProducts": []
},
{
  "slug": "chiller-room",
  "name": "Chiller Room",
  "shortDescription": "Reliable chillers with advanced safety features.",
  "description": "Our company is a celebrated manufacturer and supplier of Chiller Room. The chiller room has inbuilt safety feature installed to shut down the system in case of a fault of pressure control or any other device which is similar to it. Apart from this, the acoustic signal is also there to detect the probe error. Moreover, the Chiller Room can be availed from us in varied specifications at reasonable price point.",
  "imageUrl": "/images/products/12.jpg",
  "heroImageUrl": "/images/products/12.jpg",
  "features": [
    "Inbuilt safety shut-down system",
    "Acoustic signal for probe error detection",
    "Available in varied specifications",
    "Reliable pressure control monitoring"
  ],
  "subProducts": [
    {
      "name": "PUF Panel Cold Room",
      "description": "Insulated PUF panel cold rooms for efficient temperature maintenance.",
      "imageUrl": "/images/chiller-room/1.jpg"
    },
    {
      "name": "Chiller Room",
      "description": "Standard chiller rooms for various commercial applications.",
      "imageUrl": "/images/chiller-room/2.jpg"
    }
  ]
},
{
  "slug": "blast-freezers",
  "name": "Blast Freezers",
  "shortDescription": "High-performance blast freezers for rapid cooling and preservation.",
  "description": "We have established a tremendous function within the marketplace with the useful resource of affianced in production, servicing and presenting an extremely good examined array of Blast Freezers for our crucial clients. We have vast experience in setting the standards for these cold storage and is appreciated due to its effectiveness and its excessive top notch and remarkable capabilities. Our Clients can avail the Blast Freezers from us at marketplace essential expenses.",
  "imageUrl": "/images/products/13.jpg",
  "heroImageUrl": "/images/products/13.jpg",
  "features": [
    "Rapid freezing capabilities",
    "High effectiveness",
    "Top-notch performance",
    "Durable construction",
    "Reliable servicing"
  ],
  "subProducts": []
},
{
  "slug": "mushroom-cold-room",
  "name": "Mushroom Cold Room",
  "shortDescription": "Specialized cold rooms for mushroom cultivation and storage.",
  "description": "The Mushroom Room is used to extend shelf life and keep pharmaceuticals and other sensitive materials free from bacteria. The offered room provides the humidity stability in compliance with set FDA standards. Its regenerating gel desiccant system produces exceptional dry air flow for smooth working. Moreover, this Mushroom Room can be used to keep moisture out of the air to inhibit rotting, corrosion and the growth of mold and mildew.",
  "imageUrl": "/images/products/14.jpg",
  "heroImageUrl": "/images/products/14.jpg",
  "features": [
    "Extends shelf life",
    "Keeps materials free from bacteria",
    "Provides humidity stability (FDA standards)",
    "Regenerating gel desiccant system",
    "Produces exceptional dry air flow",
    "Inhibits rotting, corrosion, mold, and mildew"
  ],
  "subProducts": []
},
{
  "slug": "mushroom-cold-storage-plant",
  "name": "Mushroom Cold Storage Plant",
  "shortDescription": "Large-scale cold storage plants for mushroom preservation.",
  "description": "We are known as the reputed organization in this field of operation, engaged in offering a wide array of excellent quality Mushroom Plant. This plant is widely used to store food, beverages and other allied material for long time in order to maintain their freshness and purity. Offered plant helps to protect from harmful bacteria, fungi, combat airborne present in the atmosphere. Moreover, this Mushroom Plant is extensively demanded in the industry for its optimum cooling efficiency and control the temperature automatically.",
  "imageUrl": "/images/products/15.jpg",
  "heroImageUrl": "/images/products/15.jpg",
  "features": [
    "Maintains freshness and purity",
    "Protects from bacteria, fungi, and airborne contaminants",
    "Optimum cooling efficiency",
    "Automatic temperature control",
    "Suitable for food, beverages, and allied materials"
  ],
  "subProducts": []
},
{
  "slug": "ac-spare-parts",
  "name": "AC Spare Parts",
  "shortDescription": "A comprehensive range of high-quality AC spare parts.",
  "description": "We provide a complete inventory of high-quality AC spare parts for various models and systems. From compressors and coils to fan motors and electrical components, our parts ensure reliable performance, efficiency, and longevity for your air conditioning units. All parts are sourced from trusted manufacturers to meet rigorous quality standards.",
  "imageUrl": "/images/products/16.jpg",
  "heroImageUrl": "/images/products/16.jpg",
  "features": [
    "Wide availability for all major AC brands",
    "Genuine and high-quality OEM parts",
    "Ensures optimal performance and energy efficiency",
    "Durable materials for long-lasting repairs"
  ],
  "subProducts": []
}
   
];

// 3. Helper functions to get data from THIS file
export function getProductBySlug(slug: string): ProductDetail | undefined {
    return productsData.find(product => product.slug === slug);
}

export function getAllProductSlugs(): string[] {
    return productsData.map(product => product.slug);
}