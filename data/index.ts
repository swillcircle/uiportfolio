export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "Promoting open communication, prioritizing collaboration with teams",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "./b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "Adaptable to global time zone communications with teams worldwide",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My knowledge",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Designer with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "./grid.svg",
      spareImg: "./b4.svg",
    },
  
    {
      id: 5,
      title: "Currently learning about Aceternity UI 🤯",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-[30rem] w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "./b5.svg",
      spareImg: "./grid.svg",
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
      title: "SmithTrade",
      hovTitle: "Visit",
      des: "E-Commerce marketplace for electronic components",
      img: "./p2.svg",
      iconLists: ["./figma-icon.svg", "./tail.svg", "./google-md-icon.svg", "./angular-icon.svg"],
      link: "https://trade.smithweb.com/",
    },
    {
      id: 2,
      title: "Veeva Systems",
      hovTitle: "Visit",
      des: "Led project revamping navigation for company's product expansion, alongside creating standardized templates for enhanced scalability..",
      img: "./p1.svg",
      iconLists: ["./adobe-xd-icon.svg", "./html-icon.svg", "./css-icon.svg", "./bootstrap-5-logo-icon.svg"],
      link: "https://www.veeva.com/",
    },
    {
      id: 3,
      title: "SimHUb",
      hovTitle: "Visit",
      des: "A re-imagining of SimHub's home page. SimHub is a program where you can add external hardware to your simulator.",
      img: "./p3.svg",
      iconLists: ["./figma-icon.svg","./re.svg", "./tail.svg", "./three.svg"],
      link: "https://simhub-vert.vercel.app/",
    },
    {
      id: 4,
      title: "Figma UI Designs and Code",
      hovTitle: "Visit",
      des: "UI designs with some links to the components code in CodePen",
      img: "./p4.svg",
      iconLists: ["./figma-icon.svg", "./tail.svg", "./codepen-icon.svg"],
      link: "https://www.figma.com/design/kJRxexJ6Fkf1M1g0VQgoET/Daniel-Painter-UI?node-id=0-1&t=V5hyWXDZItQflkwA-1",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Danny's expertise in UX design is evident in his work, particularly in enhancing the user experience for our suite of internal applications. Danny has great experience with both mobile and web design. His innovative approach and expert handling of tools like Figma have not only improved our design processes but also played a crucial role in the seamless transition from Sketch to Figma. This move was instrumental in rebuilding our internal design system, enhancing collaboration and efficiency across the team.",
      name: "Samuel (Sam) Hinkhouse",
      title: "Lead UX/UI Designer | Frontend Engineer ",
      img: "./SamHinkProfile.svg"
    },
    {
      quote:"I'm delighted to recommend Danny. He has been a mentor to me and continues to guide me with his wealth of knowledge and experience. Danny approaches every project with careful thought and thorough research, ensuring we fully understand our goals and the products we're creating.", 
      name: "Stacey Smith",
      title: "User Experience Professional | MLIS",
      img: "./staceySmith.svg"
    },
    {
      quote:"I've worked along side many designers and developers over the years, but Danny stands out due to his unique blend of creativity, technical acumen, and a deep understanding of user-centered design principles. Danny played a pivotal role in redesigning our websites navigation and promotional features. His innovative thinking and design skills significantly improved the overall user satisfaction, on our website according to user feedback surveys.",
      name: "Matt Wilkerson",
      title: "Senior Lead Ecommerce Frontend, UI/UX Web Developer",
      img: "./mattWilkerson.svg"
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "Smith",
      img: "./smith-logo.svg",
      nameImg: "./smith-words.svg",
    },
    {
      id: 2,
      name: "Veeva",
      img: "./veeva.svg",
      nameImg: "./Veeva_Systems_Logo.svg",
    },
    {
      id: 3,
      name: "Value City",
      img: "./vcf.svg",
      nameImg: "./vc-type-logo.svg",
    },
    {
      id: 4,
      name: "Victoria's Secret",
      img: "./vs-icon-logo.svg",
      nameImg: "./VS-logo.svg",
    },
    // {
    //   id: 5,
    //   name: "docker.",
    //   img: "/dock.svg",
    //   nameImg: "/dockerName.svg",
    // },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Senior UX/UI Designer",
      desc: "Designed an e-commerce platform to leverage surplus parts inventory, maximizing efficiency and increasing revenue streams",
      className: "md:col-span-2",
      thumbnail: "./exp2.svg",
    },
    {
      id: 2,
      title: "Web UI Designer & Developer",
      desc: "Identify, and address UI needs and redesign website's navigation to improve site engagement and usabilityÌ",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "./exp11.svg",
    },
    {
      id: 3,
      title: "Web Designer & Developer",
      desc: "Designed and developed landing pages collaboratively to achieve sales targets.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "./exp12.svg",
    },
    {
      id: 4,
      title: "Senior Graphic Designer",
      desc: "Specialize in problem solving, reworking creative, navigation, and execution of in store display elements.",
      className: "md:col-span-2",
      thumbnail: "./exp3.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "./git.svg",
      link:'https://github.com/swillcircle/',
    },
    {
      id: 2,
      img: "./twit.svg",
      link:'https://x.com/danjpain',
    },
    {
      id: 3,
      img: "./link.svg",
      link:'https://www.linkedin.com/in/danny-painter/',
    },
    {
      id: 4,
      img: "./dribble.svg",
      link:'https://dribbble.com/swillcircle',
    },
  ];