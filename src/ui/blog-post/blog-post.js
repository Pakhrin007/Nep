import Admin from "../../assets/Images/Admin.jpg"
const BlogPost = [
    {
        id: 1,
        title: "Connecting care: How Healthdirect helps up to 26 million people access healthcare with Infermedica",
        excerpt: "Learn how the implementation of Infermedica’s AI tools is helping 26 million Australians have a connected, efficient, and user-friendly healthcare experience.",
        image: Admin, // Make sure the image is available
        link: "/blog/1",
    detail:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
},
{
    id: 2,
    title: "Virtual triage for public health and governments",
    excerpt: "Benefits of virtual triage for public health and governments—navigating patients, improving access, crisis management, increasing use of preventative services.",
    image: Admin,
    link: "/blog/2",
        detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    }

]

const BlogPost2 = [
    {
        id: 3  ,
        title: "Optimizing nurse triage call centers with virtual triage: Benefits for organizations, nurses, and patients",
        excerpt: "AI-powered virtual triage improves efficiency, nurse retention, and care continuity compared to traditional methods.",
        image: Admin,
        link: "/blog/1",
        detail: "This article discusses how virtual triage solutions optimize operations in nurse call centers...",
    },


]
const company = [
    {
        id: 4,
        name: "xAI",
        description: "Accelerating human scientific discovery through artificial intelligence and advanced computational models.",
        image: "https://x.ai/images/xai-logo.svg",
        foundedYear: 2023,
        headquarters: "Austin, TX, USA",
        industry: "Artificial Intelligence",
        employeeCount: "100-500"
    },
    {
        id: 5,
        name: "DeepMind",
        description: "Pioneering AI research to solve complex scientific problems and advance general intelligence.",
        image: "https://www.deepmind.com/static/images/deepmind-logo.svg",
        foundedYear: 2010,
        headquarters: "London, United Kingdom",
        industry: "Artificial Intelligence",
        employeeCount: "1000-1500"
    },
    {
        id: 6,
        name: "Anthropic",
        description: "Building safe, interpretable, and value-aligned AI systems for widespread societal benefit.",
        image: "https://www.anthropic.com/images/anthropic-logo.svg",
        foundedYear: 2021,
        headquarters: "San Francisco, CA, USA",
        industry: "Artificial Intelligence",
        employeeCount: "50-200"
    }
];


export { BlogPost, BlogPost2, company };
