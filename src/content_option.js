import logoB from "./logos/logoBlack.png";
import image1 from "./pages/portfolio/portfolioImages/image1.jpg";

const logotext = <img src={logoB} alt="logo" width="100" height="40" />;
const meta = {
    title: "Alisher",
    description: "I am Alisher, an information technology enthusiast",
};

const introdata = {
    title: "Hi, I'm Alisher",
    education: "Front-End developer",
    animated: {
        first: "Html",
        second: "Css",
        third: "Bootstrap",
        fourth: "Sass",
        fifth: "JavaScript",
        sixth: "React.js",
        seven: "Git",
        eight: "Github",
    },
    description: "An avid learner who can't get enough of uncovering the intricacies of our digital world.",
};

const dataabout = {
    title: "Who am I?",
    aboutme: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};

const worktimeline = [{
    jobtitle: "Example 1",
    where: "Google",
    date: "2023",
},
{
    jobtitle: "Example 2",
    where: "Micosoft",
    date: "2022",
},
{
    jobtitle: "Example 3",
    where: "Meta",
    date: "2021",
},
];

const skills = [{
    name: "Html",
},
{
    name: "Css",
},
{
    name: "Bootstrap",
},
{
    name: "Sass",
},
{
    name: "Git",
},
{
    name: "Github",
},
{
    name: "JavaScript",
},
{
    name: "React.js",
},
];

const dataportfolio = [{
    img: <img src={image1} alt="img1" />,
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
},
{
    img: "https://picsum.photos/400/800/?grayscale",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
},
{
    img: "https://picsum.photos/400/?grayscale",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
},
{
    img: "https://picsum.photos/400/600/?grayscale",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
},
{
    img: "https://picsum.photos/400/300/?grayscale",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
},
{
    img: "https://picsum.photos/400/700/?grayscale",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
},

{
    img: "https://picsum.photos/400/600/?grayscale",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
},
{
    img: "https://picsum.photos/400/300/?grayscale",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
},
{
    img: "https://picsum.photos/400/?grayscale",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
},
{
    img: "https://picsum.photos/400/550/?grayscale",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
},
{
    img: "https://picsum.photos/400/?grayscale",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
},
{
    img: "https://picsum.photos/400/700/?grayscale",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
},
];

const contactConfig = {
    YOUR_EMAIL: "alishersodiqov09@gmail.com",
    YOUR_TELEGRAM: "https://t.me/Sodiqov_Alisher",
    description: "Looking forward to hearing from you!",
    YOUR_SERVICE_ID: "SERVICE_ID",
    YOUR_TEMPLATE_ID: "TEMPLATE_ID",
    YOUR_USER_ID: "USER_ID (PUBLIC_KEY)",
};

const socialprofils = {
    github: "https://github.com/Alisher0903",
    facebook: "https://www.facebook.com/profile.php?id=100091953420281",
    telegram: "https://t.me/Sodiqov_Alisher",
    instagram: "https://www.instagram.com/al1sher_o9o3/"
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};