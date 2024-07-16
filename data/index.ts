export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "my tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Banking Web App",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "MediCheck - Medication Verification System",
    des: "MediCheck prevents medication dispensing errors by prioritizing clarity between generic and brand drug names and leveraging neural networks to analyze the chosen medication against patient data, providing a confidence rating to the nurse.",
    img: "/p1.jpeg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://devpost.com/software/medicheck-ez0d9i",
  },
  {
    id: 2,
    title: "Fast React Pizza Co. - Online Ordering Platform",
    des: "An interactive web app for a pizza delivery service, enhancing customer experience through a dynamic menu system, integrated geolocation service for outlet suggestions and delivery time estimates. Uses Redux for state management across the application.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://fast-react-pizza-react-js.vercel.app/",
  },
  // {
  //   id: 3,
  //   title: "Management System for The Wild Oasis",
  //   des: "A management system for a boutique hotel designed to streamline operations and guest management. Features include real-time UI updates for cabin management and comprehensive dashboard with statistical analytics.",
  //   img: "/p3.svg",
  //   iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
  //   link: "",
  // },
  // {
  //   id: 4,
  //   title: "Customer Portal for The Wild Oasis",
  //   des: "Engineered a customer-facing website for hotel booking integrated with the management system. It includes user authentication, profile management, and a dynamic reservation system with custom date selectors.",
  //   img: "/p4.svg",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
  //   link: "",
  // },
];

export const testimonials = [
  {
    quote:
      "Working with Aastha was a fantastic experience. Her dedication, professionalism, and promptness in delivering high-quality results were evident throughout our project. Aastha's passion for frontend development and product management is truly remarkable. If you're looking to enhance your product and brand, Aastha is the perfect partner.",
    name: "Samyak Piya",
    title: "Software Engineer at Infineon Technologies",
  },
  {
    quote:
      "Aastha's expertise in frontend development and product management significantly contributed to the success of our project. Her ability to manage tasks efficiently and her attention to detail are commendable. I highly recommend Aastha for any team looking for a dedicated and skilled professional.",
    name: "Jane Smith",
    title: "Project Manager at UK Healthcare ITS",
  },
  {
    quote:
      "Aastha's proficiency in frontend development and her skills as a product manager have been invaluable to our team. Her commitment to delivering quality work on time is impressive. Aastha is a true asset to any team, and I look forward to the opportunity to work with her again.",
    name: "Robert Johnson",
    title: "Director of IT at UK Healthcare ITS",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Product Manager",
    desc: "Led the design and implementation of a patient safety enhancement project at UK Healthcare ITS, utilizing neural networks to reduce medication errors by 10%.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 2,
    title: "Front End Software Engineer",
    desc: "Developed multiple web applications including MediCheck, Fast React Pizza Co., and management systems for The Wild Oasis, using technologies like React, Next.js, Redux, and Supabase.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp1.svg",
  },
  {
    id: 3,
    title: "Teaching Assistant",
    desc: "Assisted in undergraduate courses, providing instruction in program design and mentoring independent computer science projects.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Software Developer",
    desc: "Developed a customer-facing portal for The Wild Oasis, enhancing user experience with features like user authentication and dynamic reservation management.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://www.github.com/aasthabhatt00",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/bhattaastha/",
  },
];
