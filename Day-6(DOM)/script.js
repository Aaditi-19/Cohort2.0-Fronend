const employees = [
  {
    profilePic: "images/marko.jpg",
    charges: "$40/hr",
    e_name: "Marko Kooh",
    role: "UI/UX Designer",
    currentCompany: "Freelancer",
    skills: ["UI,UX", "Photoshop", "Figma"],
    skill_count:4,
    info: "Creative UI/UX designer focused on clean, user-friendly designs."
  },

  {
    profilePic: "images/emma.jpg",
    charges: "$55/hr",
    e_name: "Emma Wilson",
    role: "Frontend Developer",
    currentCompany: "Google",
    skills: ["HTML,CSS", "JS,Ract"],
    skill_count:2,
    info: "Frontend developer skilled in building fast, responsive interfaces."
  },

  {
    profilePic: "images/ryan.jpg",
    charges: "$60/hr",
    e_name: "Ryan Carter",
    role: "Backend Developer",
    currentCompany: "AWS",
    skills: ["Node.js", "Express", "MongoDB", "API Development"],
    skill_count:4,
    info: "Backend engineer specializing in scalable and secure server systems."
  },

  {
    profilePic: "images/sophia.jpg",
    charges: "$48/hr",
    e_name: "Sophia Mendes",
    role: "Graphic Designer",
    currentCompany: "Behance",
    skills: ["Branding", "Typography"],
    skill_count:5,
    info: "Graphic designer with strong visual storytelling skills."
  },

  {
    profilePic: "images/aarav.jpg",
    charges: "$30/hr",
    e_name: "Aarav Sharma",
    role: "Data Analyst",
    currentCompany: "TCS",
    skills: ["Excel", "Power BI", "SQL", "Python"],
    skill_count:2,
    info: "Data analyst turning raw data into clear insights."
  },

  {
    profilePic: "images/lucas.jpg",
    charges: "$80/hr",
    e_name: "Lucas Martin",
    role: "DevOps Engineer",
    currentCompany: "Microsoft",
    skills: ["Docker", "Kubernetes", "CI/CD", "Linux"],
    skill_count:1,
    info: "DevOps engineer focused on automation and cloud systems."
  },

  {
    profilePic: "images/julia.jpg",
    charges: "$50/hr",
    e_name: "Julia Brown",
    role: "Digital Marketer",
    currentCompany: "Meta",
    skills: ["SEO","Google Ads", "Content Strategy", "Analytics"],
    skill_count:3,
    info: "Digital marketer helping brands grow with data-driven strategies."
  },

  {
    profilePic: "images/kai.jpg",
    charges: "$70/hr",
    e_name: "Kai Nakamura",
    role: "Full Stack Developer",
    currentCompany: "StartupX",
    skills: ["React", "Node.js", "MySQL", "AWS"],
    skill_count:5,
    info: "Full stack developer building scalable end-to-end applications."
  },

  {
    profilePic: "images/elena.jpg",
    charges: "$45/hr",
    e_name: "Elena Rodriguez",
    role: "Content Writer",
    currentCompany: "Upwork",
    skills: ["Copywriting","Editing", "SEO Writing"],
    skill_count:2,
    info: "Content writer crafting engaging and SEO-friendly content."
  },

  {
    profilePic: "images/liam.jpg",
    charges: "$90/hr",
    e_name: "Liam Anderson",
    role: "AI/ML Engineer",
    currentCompany: "OpenAI",
    skills: ["ML", "Python", "TensorFlow", "NLP"],
    skill_count:3,
    info: "AI engineer creating smart, real-world machine learning solutions."
  }
];


let main = document.querySelector('main');

let sum ='';

employees.forEach(function(e){
  sum = sum + `<div class="card">

            <h5>${e.charges}</h5>

            <div id="profile-pic">
                <img src="${e.profilePic}" alt="">
            </div>

            <h3>${e.e_name}</h3>

            <div id="profession">
                <p>${e.role}</p>
            </div>

            <div id="current-company">
                <p><i class="ri-building-line"></i>${e.currentCompany}</p>
            </div>

            <div class="skills">
                <p>${e.skills[0]}</p>
                <p>${e.skills[1]}</p>
                <span>
                    <p>+${e.skill_count}</p>
                </span>
            </div>

            <div id="about">
                <p>${e.info}</p>
            </div>

            <button>VIEW PROFILE</button>

        </div>`
console.log(e);
});


main.innerHTML = sum;