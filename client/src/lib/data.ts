import financeImg from "@assets/generated_images/finance_dashboard_ui_mockup.png";
import travelImg from "@assets/generated_images/travel_app_ui_mockup.png";
import ecommerceImg from "@assets/generated_images/e-commerce_ui_mockup.png";

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  tags: string[];
  client: string;
  role: string;
  year: string;
  description: string;
  challenge: string;
  solution: string;
  results: string;
  images: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "FinTech Dashboard",
    category: "UI/UX",
    image: financeImg,
    tags: ["Figma", "React", "Chart.js"],
    client: "FinTech Co.",
    role: "Lead Designer",
    year: "2024",
    description: "A comprehensive financial dashboard for enterprise clients.",
    challenge: "The client needed a way to visualize complex financial data in a user-friendly manner without sacrificing depth or accuracy. The existing solution was cluttered and difficult to navigate.",
    solution: "We designed a modular dashboard system that allows users to customize their view. Using a clean card-based layout and distinctive data visualization patterns, we improved readability and reduced cognitive load.",
    results: "Increased user engagement by 40% and reduced support tickets related to data interpretation by 60%.",
    images: [financeImg, financeImg, financeImg]
  },
  {
    id: 2,
    title: "Wanderlust App",
    category: "Mobile",
    image: travelImg,
    tags: ["iOS", "SwiftUI", "Prototyping"],
    client: "Wanderlust Inc.",
    role: "Product Designer",
    year: "2023",
    description: "A travel companion app for the modern explorer.",
    challenge: "Users struggled to organize their travel itineraries and find local recommendations in one place. Competitor apps were either too focused on booking or too focused on reviews.",
    solution: "We created a seamless experience that combines itinerary planning with curated local guides. The interface relies on high-quality imagery and gesture-based navigation.",
    results: "Featured in the App Store 'Apps of the Day' and achieved 100k downloads in the first month.",
    images: [travelImg, travelImg, travelImg]
  },
  {
    id: 3,
    title: "Vogue E-Commerce",
    category: "Web Design",
    image: ecommerceImg,
    tags: ["Shopify", "Design System", "Conversion"],
    client: "Vogue Fashion",
    role: "UI Designer",
    year: "2024",
    description: "A luxury e-commerce experience for a high-end fashion brand.",
    challenge: "The brand needed to translate their high-touch in-store experience to the digital realm. The previous site had high cart abandonment rates and poor mobile performance.",
    solution: "We implemented a minimal, editorial-style layout that puts the product photography front and center. The checkout process was streamlined to 3 steps.",
    results: "Conversion rate increased by 25% and average order value grew by 15%.",
    images: [ecommerceImg, ecommerceImg, ecommerceImg]
  },
  {
    id: 4,
    title: "Neon Banking",
    category: "UI/UX",
    image: financeImg, 
    tags: ["App Design", "Dark Mode"],
    client: "Neon Bank",
    role: "UX Designer",
    year: "2023",
    description: "A neo-banking app focused on younger demographics.",
    challenge: "Traditional banking apps feel corporate and cold. Neon wanted to appeal to Gen Z with a vibrant, dark-mode-first aesthetic.",
    solution: "We used neon gradients and dark backgrounds to create a distinct visual language. Gamification elements were added to savings goals.",
    results: "User retention for the under-25 demographic improved by 30%.",
    images: [financeImg, financeImg, financeImg]
  },
  {
    id: 5,
    title: "Urban Fashion",
    category: "Web Design",
    image: ecommerceImg,
    tags: ["Webflow", "Animation", "Branding"],
    client: "Urban Streetwear",
    role: "Creative Director",
    year: "2024",
    description: "Streetwear brand identity and e-commerce platform.",
    challenge: "The brand needed a website that felt as edgy and dynamic as their clothing line.",
    solution: "We built a Webflow site with heavy use of scroll interactions and parallax effects to create a dynamic browsing experience.",
    results: "Brand awareness metric increased significantly, with social shares of the website design going viral.",
    images: [ecommerceImg, ecommerceImg, ecommerceImg]
  },
  {
    id: 6,
    title: "EcoTravel",
    category: "Mobile",
    image: travelImg,
    tags: ["Green Tech", "Mobile App", "UX Research"],
    client: "EcoTravel NGO",
    role: "Lead Product Designer",
    year: "2023",
    description: "Sustainable travel planning application.",
    challenge: "Helping travelers find eco-friendly accommodation and transport options was difficult due to scattered data.",
    solution: "We aggregated data from certified sustainable providers and presented it in an easy-to-compare format.",
    results: "Partnered with 5 major eco-tourism boards and helped offset 500 tons of CO2 in the first year.",
    images: [travelImg, travelImg, travelImg]
  }
];
