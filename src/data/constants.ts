import { FaLightbulb, FaChartLine, FaUsers, FaLeaf } from "react-icons/fa";
import { FaCubes, FaHandsHelping, FaHandshake, FaBuilding, FaChartBar } from "react-icons/fa";

import { IAboutDetail } from "../interface/interface";


export enum MainCategories {
    Commercial = "Commercial",
    Hospitality = "Hospitality",
    Educational = "Educational",
    Healthcare = "Healthcare",
    PublicSpaces = "Public Spaces"
}
export enum subCategories {
    Seating = "Seating",
    Office = "Office",
    Desk = "Desk",
    Street = "Street",
    Restaurant = "Restaurant",

}
export const bio = {
    email: "info@promax-direct.com",
    phone: '971565322012',
    address: 'P.O. Box: 50433, Compass Building, Al-Shohada Road, Al-Hamra Industrial Zone-FZ, Ras-Al-Khaima, UAE',
    services: [
        "Commercial Furniture",
        "Hospitality Furniture",
        "Educational Furniture",
        "Healthcare Furniture",
        "Public spaces Furniture"

    ],
    description:
        "We remain excited about the future  and committed to our mission of driving  discipline progress and innovation",

    copyRights: "© 2024 Promax. All rights reserved.",
    footerText: "PROMAX Furniture, founded in 2021 and based in Ras-Al-Khaimah, UAE, offers high-quality ergonomic furniture for commercial, hospitality, educational, and healthcare spaces. With a focus on innovative, modern, and classic designs, we consistently exceed customer expectations",

    whoWeAre: `PROMAX Furniture was founded in Sep-2021 by a self-motivated-individual(proprietor) then startup with a old vision as PROMAX Furniture FZ-LLC at Ras-Al-Khaimah Industrial Zone, United Arab Emirates in Jun-2024 and as since become synonymous with the supply of ergonomically designed modern & classical furniture in the Commercial, Hospitality, Educational, Healthcare and Public space industries successfully.
    
    We offer broad range of quality products and continue to uphold our dedicated, standard & tradition of not meeting but exceeding customers’ expectation.
    
    All of our exclusive suppliers who have advance equipment and machinery to maintain the day to day research, development & technical force around the globe for shaping the future through innovative solutions.`,

    mission: "We create the optimal working environment based on effective space with ergonomic, dynamic and cost effective design. We keep each customers loyalty with great impact.",

    vision: "We look forward to be the Leading Solution Provider in the industry by expanding our global footprint, entering new markets and illustrate modern designs that meet the challenges of tomorrow.",
    whatwedo:
    {
        title: "What we Do",
        desc: "We deliver innovative solutions tailored to your needs, enhancing performance and fostering sustainable relationships. Our focus is on driving success through strategic, reliable, and eco-friendly practices."
    },
    gurantee:
    {
        title: "gurantee",
        desc: "We stand behind the quality of our products and services. Our commitment to excellence ensures that each item we offer is designed to meet the highest standards. If you're not completely satisfied, we offer a hassle-free return policy and dedicated customer support to resolve any issues promptly."
    },
    overview:
    {
        title: "Our Journey",
        desc: "From a small startup to a leading firm, PROMAX Furniture FZ-LLC has navigated through highs and lows to carve out a significant place in the furniture industry & project systems. Our history is a testament to the resilience, creativity, and vision of our team. We remain excited about the future and committed to driving progress and innovation."
    },

};
export const whatWeDo: IAboutDetail[] = [
    {
        title: "Solution",
        description: "We design solutions that comprehensively handles the project needs of our client from concept to installation through support rather than just fulfilling requirements",
        icon: FaLightbulb,
        color: 'text-blue-500'
    },
    {
        title: "Performance",
        description: "Implementing at the highest-level possible performance by delivering quality results that exceed the customers expectation and satisfaction",
        icon: FaChartLine,
        color: ' text-green-500'
    },
    {
        title: "Relationship",
        description: "We work hard to maintain long-term and mutual-beneficial relationship – with our customers, our suppliers, and our staff. ",
        icon: FaUsers,
        color: 'text-purple-500'
    },
    {
        title: "Sustainability",
        description: "We work with a supply chain that are committed to developing sustainable business practices that meet the needs of the present, without compromising the welfare of future generations.",
        icon: FaLeaf,
        color: 'text-teal-500'
    },
];
export const gurantee: IAboutDetail[] = [
    {
        title: "Continuity of Supply",
        description: "We strive to maintain supply continuity, providing furniture true to the original design for as long as possible, with a commitment to top-tier design and quality control standards.",
        icon: FaCubes,
        color: ' text-green-500'
    },
    {
        title: "Customer Support",
        description: "Orders are delivered promptly within the specified timeframe. Our skilled and friendly installation team ensures seamless setup, even under pressure.",
        icon: FaHandsHelping,
        color: ' text-green-500'
    },
    {
        title: "After Sales Service",
        description: "We prioritize lasting relationships with customers, staff, and suppliers, emphasizing support and partnership beyond the initial sale.",
        icon: FaHandshake,
        color: ' text-green-500'
    },
];
export const overviewData = [
    {
        title: "Our Foundation",
        description: "A strong foundation built on trust, creativity, and a commitment to quality.",
        icon: FaBuilding,
        color: "text-blue-500", // Icon color
    },
    {
        title: "Growth & Progress",
        description: "Achieving milestones and driving consistent growth in a competitive market.",
        icon: FaChartBar,
        color: "text-green-500", // Icon color
    },
    {
        title: "Our Team",
        description: "A dedicated and skilled team committed to excellence and customer satisfaction.",
        icon: FaUsers,
        color: "text-purple-500", // Icon color
    },
    {
        title: "Community Engagement",
        description: "Fostering strong relationships with clients, partners, and communities for lasting success.",
        icon: FaHandsHelping,
        color: "text-orange-500", // Icon color
    },
];
export const contacts = [
    {
        id: 1,
        title: "P.O. Box: 50433, Compass Building, Al-Shohada Road, Al-Hamra Industrial Zone-FZ, Ras-Al-Khaima, UAE",
        icon: "location"
    },
    {
        id: 2,
        title: "(+971)-56-862-6802",
        icon: "call"
    },
    {
        id: 3,
        title: 'info@promax-direct.com',
        icon: "mail"
    },
]

export const banners = Array.from({ length: 23 }, (_, index) => ({
    id: index + 1,
    image: `/banners/banner${index + 1}.jpg`,
}));


export const newArrivals = [
    {
        id: 1,
        image: '/products/office-modular.webp',
        title: "Office Modular Couch",
        category: MainCategories.Commercial,
        desc: "Superman, office modular sofa has different module, you can make different shapes of sofas for different office Spaces. This sofa is suitable for reception area, public leisure area, conference room and other different office space."
    },

    {
        id: 3,
        image: '/products/educational.png',
        title: "Durable Preschool Classroom Tables and Chairs",
        category: MainCategories.Educational,
        desc: "This light-colored wood is durable and aesthetically pleasing and is commonly used in classroom desks, requiring a sleek finish. Birch’s uniform texture and ability to take on various finishes, from natural to painted, make it a versatile choice for school furniture. It’s also valued for its strength-to-weight ratio, providing sturdy yet manageable pieces ideal for children’s classroom tables."
    },
    {
        id: 2,
        image: '/products/officech.webp',
        title: "Office Table Set System Workstation",
        category: MainCategories.Commercial,
        desc: "office table set system& Smart workstation: The design inspiration comes from the tough image of mountain workers described in the article 'Tiaoshangong'. The designer simplified the lines and enhanced the stability to create SMART, a table system with a unique style and very suitable for a wide range of applications."
    },
    {
        id: 4,
        image: '/products/rece.avif',
        title: "Reception Single Covers Sofa",
        category: MainCategories.Commercial,
        desc: "The Modern Design Reception Single Covers Sofa provides a versatile modular sectional fit for public areas. Its sleek, contemporary style offers both comfort and resilience, making it suitable for reception spaces, lobbies, or lounges."
    },
    {
        id: 5,
        image: '/products/office.avif',
        title: "Cubicle Workstation Office Partition",
        category: MainCategories.Commercial,
        desc: "Optimize your office layout with our Modern Modular Office Furniture, designed to enhance productivity and space efficiency. This versatile set offers a sleek table for cubicle workstations complemented by durable yet soundproof office partitions providing privacy."
    }
]
export const subCategoriesProducts = [
    {
        id: 1,
        image: '/categories/1.jpg',
        title: "OFFICE FURNITURE",
        category: subCategories.Office,
        desc: "Superman, office modular sofa has different module, you can make different shapes of sofas for different office Spaces. This sofa is suitable for reception area, public leisure area, conference room and other different office space."
    },

    {
        id: 3,
        image: '/categories/restaurant.jpg',
        title: "Restaurant Tables + Desks",
        category: subCategories.restaurant,
        desc: "This light-colored wood is durable and aesthetically pleasing and is commonly used in classroom desks, requiring a sleek finish. Birch’s uniform texture and ability to take on various finishes, from natural to painted, make it a versatile choice for school furniture. It’s also valued for its strength-to-weight ratio, providing sturdy yet manageable pieces ideal for children’s classroom tables."
    },
    {
        id: 2,
        image: '/categories/siting.png',
        title: "Living Room Seating",
        category: MainCategories.Commercial,
        desc: "office table set system& Smart workstation: The design inspiration comes from the tough image of mountain workers described in the article 'Tiaoshangong'. The designer simplified the lines and enhanced the stability to create SMART, a table system with a unique style and very suitable for a wide range of applications."
    },
    {
        id: 4,
        image: '/categories/street.jpg',
        title: "Street Tables",
        category: subCategories.street,
        desc: "The Modern Design Reception Single Covers Sofa provides a versatile modular sectional fit for public areas. Its sleek, contemporary style offers both comfort and resilience, making it suitable for reception spaces, lobbies, or lounges."
    },
    {
        id: 5,
        image: '/categories/desk.webp',
        title: "Desks + Tables",
        category: subCategories.desk,
        desc: "Optimize your office layout with our Modern Modular Office Furniture, designed to enhance productivity and space efficiency. This versatile set offers a sleek table for cubicle workstations complemented by durable yet soundproof office partitions providing privacy."
    }
]
export const projects = [
    {
        id: 1,
        image: ["/categories/OFFICE.webp"],
        title: "OFFICE FURNITURE",
        category: subCategories.Office,
        desc: "Superman, office modular sofa has different module, you can make different shapes of sofas for different office Spaces. This sofa is suitable for reception area, public leisure area, conference room and other different office space."
    },

    {
        id: 3,
        image: '/categories/restaurant.jpg',
        title: "Restaurant Tables + Desks",
        category: subCategories.Restaurant,
        desc: "This light-colored wood is durable and aesthetically pleasing and is commonly used in classroom desks, requiring a sleek finish. Birch’s uniform texture and ability to take on various finishes, from natural to painted, make it a versatile choice for school furniture. It’s also valued for its strength-to-weight ratio, providing sturdy yet manageable pieces ideal for children’s classroom tables."
    },
    {
        id: 2,
        image: '/categories/siting.png',
        title: "Living Room Seating",
        category: MainCategories.Commercial,
        desc: "office table set system& Smart workstation: The design inspiration comes from the tough image of mountain workers described in the article 'Tiaoshangong'. The designer simplified the lines and enhanced the stability to create SMART, a table system with a unique style and very suitable for a wide range of applications."
    },
    {
        id: 4,
        image: '/categories/street.jpg',
        title: "Street Tables",
        category: subCategories.Street,
        desc: "The Modern Design Reception Single Covers Sofa provides a versatile modular sectional fit for public areas. Its sleek, contemporary style offers both comfort and resilience, making it suitable for reception spaces, lobbies, or lounges."
    },
    {
        id: 5,
        image: '/categories/desk.webp',
        title: "Desks + Tables",
        category: subCategories.Desk,
        desc: "Optimize your office layout with our Modern Modular Office Furniture, designed to enhance productivity and space efficiency. This versatile set offers a sleek table for cubicle workstations complemented by durable yet soundproof office partitions providing privacy."
    }
]

export const products = [

]
let uniqueIdCounter = 1;

const generateProducts = (category: string, count: number, imagePattern: string) => {
    return Array.from({ length: count }, (_, index) => ({
        uid: `${category.slice(0, 3)}${index + 1}`,
        id: uniqueIdCounter + 1,
        image: `${imagePattern} (${index + 1}).jpg`,
        category: category,
    }));
};
const subGenerateProducts = (category: string, count: number, imagePattern: string,imgType="jpg") => {
    return Array.from({ length: count }, (_, index) => ({
        uid: `${category.slice(0, 3)}${index + 1}`,
        id: uniqueIdCounter + 1,
        image: `${imagePattern} (${index + 1}).${imgType}`,
        category: category,
    }));
};

// Use the function to generate the product arrays
export const commericalProducts = generateProducts(MainCategories.Commercial, 9, '/commercial/sofa');
export const educationProducts = generateProducts(MainCategories.Educational, 17, '/edu/edu');
export const healthCareProducts = generateProducts(MainCategories.Healthcare, 3, '/healthcare/health');
export const hospitalityProducts = generateProducts(MainCategories.Hospitality, 3, '/hospital/hos');
export const publicSpaceProducts = generateProducts(MainCategories.PublicSpaces, 25, '/public/public');
export const office_chair = subGenerateProducts(subCategories.Seating, 21, '/office_chair/office_chair','png');
export const sofaProducts = generateProducts(subCategories.Seating, 9, '/commercial/sofa');
export const sitingProducts = [...office_chair,...sofaProducts]
export const restaurantProducts = generateProducts(subCategories.Restaurant, 8, '/restu/rest');
export const tblProducts = generateProducts(subCategories.Desk, 7, '/table/tbl');
export const AllProducts = [...commericalProducts, ...educationProducts, ...healthCareProducts, ...hospitalityProducts, ...publicSpaceProducts]

console.log(AllProducts);
export const ourSolutions = [
    {
        id: 2,
        image: '/solutions/hositalityMain.jpg',
        title: "Hospitality",
        desc: "We are driven by our purpose of enhancing the life experience. Our hospitality collections enable iWork creates spaces that pleasant people. A place where you are supported, welcomed and engaged.",
        category: MainCategories.Hospitality,
        data: hospitalityProducts

    },
    {
        id: 1,
        image: '/solutions/commericalMain.jpg',
        title: "Commercial",
        desc: "iWork designs inspiring commercial spaces, combining innovative, human-centered design with research-driven insights. We create environments that boost productivity, creativity, and overall business performance.",
        category: MainCategories.Commercial,
        data: commericalProducts


    },

    {
        id: 3,
        image: '/solutions/educationMain.jpg',
        title: "Educational",
        desc: "With a human-centered approach informed by ongoing research into effective spaces, iWork helps schools, training agencies and colleges create effective and inspiring active learning environment.",
        category: MainCategories.Educational,
        data: educationProducts


    },
    {
        id: 4,
        image: '/solutions/healthcareMain.jpg',
        title: "Healthcare",
        desc: "As an ISO13485 approved one, iWork have been meeting the needs of healthcare environments, it’s our privilege to build strong partnerships with architects, contactors and developers through constant dialogue to understand and fulfill their needs.",
        category: MainCategories.Healthcare,
        data: healthCareProducts


    },
    {
        id: 5,
        image: '/solutions/publicMain.jpg',
        title: "Public Spaces",
        desc: "iWork specializes in custom, high-quality furniture solutions, designed to enhance comfort and functionality. From ergonomic office chairs to modular seating, our furniture transforms any space.",
        category: MainCategories.PublicSpaces,
        data: publicSpaceProducts


    },
]

export const quickLinks = [
    {
        id: 1,
        title: "Seating",
        category: subCategories.Seating
    },
    {
        id: 2,
        title: "Desks + Tables",
        category: subCategories.Desk
    },
    // {
    //     id: 3,
    //     title: "Street Furniture",
    //     category:subCategories.Street
    // },
    {
        id: 4,
        title: "Restaurant Tables + Desks",
        category: subCategories.Restaurant
    },
    {
        id: 5,
        title: "Office Chairs",
        category: subCategories.Office
    },
]