import PaaraniShopImage from "../assets/paarani-shop-image.png";
import PaaraniClothesImage1 from "../assets/paarani-clothes-image-1.png";
import PaaraniClothesImage2 from "../assets/paarani-clothes-image-2.png";
import PropertydealzSiteImage from "../assets/propertydealz-site-image.png";

export const projects = [
  {
    id: 1,
    title: "PropertyDealz.in",
    slug: "propertydealz",
    category: "Real Estate Platform",
    tagline: "Zero Brokerage Property Marketplace",
    description:
      "PropertyDealz is a revolutionary real estate platform that connects buyers, sellers, and agents directly, eliminating traditional brokerage fees. Built with React and Spring Boot, deployed on AWS infrastructure.",
    longDescription:
      "PropertyDealz.in is a comprehensive real estate platform designed to transform the property transaction experience in India. The platform offers a zero-brokerage model, allowing buyers and sellers to connect directly while providing optional agent services. With advanced search filters, document management, deal tracking, and integrated payment processing through Razorpay, PropertyDealz streamlines the entire property transaction lifecycle.",
    image: PropertydealzSiteImage,
    thumbnail: PropertydealzSiteImage,
    images: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    ],
    technologies: [
      "React",
      "Spring Boot",
      "MySQL",
      "AWS EC2",
      "AWS S3",
      "Razorpay",
    ],
    features: [
      "Zero brokerage property listings",
      "Advanced search and filtering",
      "Document management with S3 integration",
      "Deal tracking and notifications",
      "Agent subscription management",
      "Secure payment processing",
      "Admin dashboard for oversight",
      "SEO optimized for organic traffic",
      "Google Analytics and Meta Pixel integration",
      "Mobile-responsive design",
    ],
    metrics: {
      users: "10,000+",
      properties: "5,000+",
      deals: "500+",
      uptime: "99.9%",
    },
    status: "Live",
    year: "2025",
    client: "Aspiron Software Solutions",
    url: "https://propertydealz.in",
    featured: true,
    testimonial: {
      text: "PropertyDealz has revolutionized how we list and manage properties. The zero-brokerage model combined with their excellent platform has given us a competitive edge.",
      author: "",
      role: "Marketing Director, Urban Spaces Realty",
    },
  },
  {
    id: 2,
    title: "Paarani",
    slug: "paarani",
    category: "E-commerce",
    tagline: "Modern Fashion & Lifestyle E-commerce",
    description:
      "A sophisticated e-commerce platform for Paarani, featuring an elegant shopping experience, secure payments, inventory management, and customer analytics.",
    longDescription:
      "Paarani Online is a full-featured e-commerce platform built for a premium fashion and lifestyle brand. The platform combines stunning visual design with powerful e-commerce functionality, including product catalog management, shopping cart, wishlist, secure checkout, order tracking, and customer account management. Integrated with payment gateways and shipping providers for seamless transactions.",
    image: PaaraniShopImage,
    thumbnail: PaaraniShopImage,
    images: [PaaraniShopImage, PaaraniClothesImage1, PaaraniClothesImage2],
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    features: [
      "Responsive product catalog",
      "Advanced search and filtering",
      "Shopping cart and wishlist",
      "Secure payment integration",
      "Order management system",
      "Customer account dashboard",
      "Inventory tracking",
      "Email notifications",
      "Admin panel for management",
      "SEO and social media integration",
    ],
    metrics: {
      products: "2,000+",
      orders: "10,000+",
      customers: "5,000+",
      revenue: "₹1Cr+",
    },
    status: "In Development",
    year: "2025",
    client: "Paarani",
    url: "https://paarani.com",
    featured: true,
    testimonial: {
      text: "Aspiron transformed our vision into reality. The e-commerce platform has exceeded our expectations and significantly boosted our online sales.",
      author: "Sai Krishna Reddy",
      role: "Founder & CEO, Paarani",
    },
  },
  // {
  //   id: 3,
  //   title: "Enterprise CRM Solution",
  //   slug: "enterprise-crm",
  //   category: "Business Software",
  //   tagline: "Comprehensive Customer Relationship Management",
  //   description:
  //     "A custom CRM system designed for enterprise sales teams, featuring lead management, pipeline tracking, analytics, and integrations.",
  //   longDescription:
  //     "This enterprise-grade CRM solution streamlines sales operations for large organizations. Built with scalability in mind, it handles thousands of leads and opportunities, provides real-time analytics, automates workflows, and integrates with existing business tools. The system includes mobile apps for field sales teams and comprehensive reporting for management.",
  //   image:
  //     "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  //   thumbnail:
  //     "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
  //   images: [
  //     "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  //   ],
  //   technologies: [
  //     "Java",
  //     "Spring Boot",
  //     "PostgreSQL",
  //     "React",
  //     "Docker",
  //     "Kubernetes",
  //   ],
  //   features: [
  //     "Lead and opportunity management",
  //     "Sales pipeline visualization",
  //     "Automated workflow engine",
  //     "Email and calendar integration",
  //     "Real-time analytics and reporting",
  //     "Mobile app for iOS and Android",
  //     "Role-based access control",
  //     "API for third-party integrations",
  //   ],
  //   metrics: {
  //     users: "500+",
  //     leads: "100,000+",
  //     deals: "₹100Cr+",
  //     efficiency: "+40%",
  //   },
  //   status: "Live",
  //   year: "2025",
  //   client: "Confidential Enterprise Client",
  //   url: null,
  //   featured: false,
  // },
  // {
  //   id: 4,
  //   title: "HealthCare Management System",
  //   slug: "healthcare-system",
  //   category: "Healthcare",
  //   tagline: "Digital Healthcare Operations Platform",
  //   description:
  //     "A comprehensive healthcare management system for clinics and hospitals, featuring patient records, appointments, billing, and telemedicine.",
  //   longDescription:
  //     "This HIPAA-compliant healthcare platform digitizes clinic operations end-to-end. From patient registration and appointment scheduling to electronic health records, prescription management, and billing - the system covers all aspects of healthcare delivery. Includes telemedicine capabilities for remote consultations.",
  //   image:
  //     "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
  //   thumbnail:
  //     "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop",
  //   images: [
  //     "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
  //   ],
  //   technologies: ["React", ".NET Core", "SQL Server", "Azure", "SignalR"],
  //   features: [
  //     "Electronic health records (EHR)",
  //     "Appointment scheduling",
  //     "Patient portal",
  //     "Telemedicine integration",
  //     "Prescription management",
  //     "Billing and insurance claims",
  //     "Lab results management",
  //     "HIPAA compliance",
  //   ],
  //   metrics: {
  //     patients: "50,000+",
  //     appointments: "200,000+",
  //     clinics: "15",
  //     satisfaction: "4.8/5",
  //   },
  //   status: "Live",
  //   year: "2025",
  //   client: "HealthFirst Clinics Network",
  //   url: null,
  //   featured: false,
  // },
];

export default projects;
