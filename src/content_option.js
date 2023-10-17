import logoB from "./logos/logoBlack.png";
import img1 from "./pages/portfolio/portfolioImages/image1.jpg";
import img2 from "./pages/portfolio/portfolioImages/image2.jpg";
import img3 from "./pages/portfolio/portfolioImages/image3.jpg";
import img4 from "./pages/portfolio/portfolioImages/image4.jpg";
import img5 from "./pages/portfolio/portfolioImages/image5.jpg";
import img6 from "./pages/portfolio/portfolioImages/image6.jpg";
import img7 from "./pages/portfolio/portfolioImages/image7.jpg";
import img8 from "./pages/portfolio/portfolioImages/image8.jpg";
import img9 from "./pages/portfolio/portfolioImages/image9.jpg";
import language from "./language.json";

const logotext = <img src={logoB} alt="logo" width="100" height="40" />;
const meta = {
    title: "Alisher",
    description: "I am Alisher, an information technology enthusiast",
};

const introdata = {
    title: language.uz.home.myTitle,
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
    title: "About me briefly...",
    aboutme: "My name is Alisher. I was born on February 9, 2003 in Kashkadarya region. Currently, I am studying in the 3rd year of telecommunication technologies at the Karshi branch of the Tashkent University of Information Technologies (TUIT KF). In addition, I do frontend programming at IT CITY ACADEMY. To date I've made a few small sites and modified some of them. Click the link below to see my work",
};

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
    img: img1,
    description: "Technologies Used!",
    descriptionTech: "html, css, bootstrap, javascript, three.js, react.js",
    link: "https://frontend-groups.netlify.app",
},
{
    img: img2,
    description: "Technologies Used!",
    descriptionTech: "html, css, bootstrap, sass, javascript, react.js",
    link: "https://mysunuz.netlify.app",
},
{
    img: img3,
    description: "Technologies Used!",
    descriptionTech: "html, css, bootstrap, javascript, react.js",
    link: "https://reactloyiha.netlify.app",
},
{
    img: img4,
    description: "Technologies Used!",
    descriptionTech: "html, css, bootstrap, javascript",
    link: "https://random-generate.netlify.app",
},
{
    img: img5,
    description: "Technologies Used!",
    descriptionTech: "html, css, bootstrap",
    link: "https://davlatbek-sultonov-dev.netlify.app",
},
{
    img: img6,
    description: "Technologies Used!",
    descriptionTech: "html, css, bootstrap",
    link: "https://testoldpage.netlify.app",
},
{
    img: img7,
    description: "Technologies Used!",
    descriptionTech: "html, css",
    link: "https://loyiha1-old.netlify.app",
},
{
    img: img8,
    description: "Technologies Used!",
    descriptionTech: "html, css, bootstrap",
    link: "https://testoldpage2.netlify.app",
},
{
    img: img9,
    description: "Technologies Used!",
    descriptionTech: "html, css, bootstrap, scss, javascript, react.js",
    link: "https://kashkadaryotravel.uz",
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
    // whereStudy,
    skills,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};