//  Department Section
// Array of departments with their details
const departmentDetails = [
  {
    name: "First Year",
    image: "./images/first.jpg",
    description: "Baitho beta abhi bahot kuch seekhna baaki hai Jeevan me..",
    animation: "fade-right",
    link1: "http://paperfactorymnnit.pythonanywhere.com/",
    link2:
      "https://drive.google.com/drive/folders/1-2Ecfzlgj5Kr260HKx1B8pgCDtWbiDhF",
  },
  {
    name: "Computer Science and Engineering",
    image: "./images/cse (4).jpg",
    description:
      "Abundance of DSA on the internet, now abundance of academic resources on this Page.",
    animation: "fade-up",
    link1:
      "https://drive.google.com/drive/u/1/folders/1MLMiaW0vq0K0lWtUakqLNXjBIfSa9Nw0",
  },
  {
    name: "Electronics & Communication Engineering",
    image: "./images/ece.jpg",
    description:
      "Hardwork amplified and concepts doped. And this leads to saturation of success.",
    animation: "fade-left",
    link1:
      "https://drive.google.com/drive/folders/16g1SvodQLuXZknBlNXjVJXmBMUkcmZ8V",
  },
  {
    name: "Electrical Engineering",
    image: "./images/electrical.jpg",
    animation: "fade-left",
    description:
      "Electrifying the academics with least resistance and conducting knowledge through wires of SMP Resources..",
    link1:
      "https://drive.google.com/drive/u/4/folders/1qI6i_v7dTvWirq8syp60VAo750c-xXlH",
  },
  {
    name: "Civil Engineering",
    image: "./images/civil.jpg",
    animation: "fade-down",
    description:
      "Survey fields, not the internet for notes. Here's your one stop destination for all civil resources-SMP Resource Hub",
    link1:
      "https://drive.google.com/drive/folders/1Ly4pGcHli_UU1XmLgtbT6qE_EV43LYjY",
  },
  {
    name: "Mechanical Engineering",
    image: "./images/mech.jpg",
    animation: "fade-right",
    description:
      "Use the SMP Resource Hub to study the inner-workings of our world with less power and maximum efficiency",
    link1:
      "https://drive.google.com/drive/folders/12Bv_TftkQwZtE7ho9Zzm0UXKbYx1CBeg",
  },
  {
    name: "Chemical Engineering",
    image: "./images/chemical.jpg",
    animation: "fade-down",
    description:
      "Hard time finding the notes? We have the 'solution' to keep you in 'equilibrium'.",
    link1:
      "https://drive.google.com/drive/folders/1LS5fXhC0G5ykhd8-yl_WD4Cjj-mC6VzT?usp=share_link",
  },
  {
    name: "Biotechnology",
    image: "./images/biotech.jpg",
    animation: "fade-up",
    description:
      "Resources so concise and complete that it would never 'cell' you out..",
    link1:
      "https://drive.google.com/drive/u/3/folders/10Gl296BcmzT2v8oaKSQQsBthFT8USjex",
  },
  {
    name: "Production & Industrial Engineering",
    image: "./images/pie.jpg",
    animation: "fade-down",
    description:
      "Use the SMP Resource Hub to study the inner-workings of our world with less power and maximum efficiency",
    link1:
      "https://drive.google.com/drive/folders/1THq-Nv3vxPxsDle_HhvKeEBmroz8LWDi?usp=share_link",
  },
  {
    name: "Final Year Open Electives",
    image: "./images/final.jpg",
    animation: "fade-left",
    description: "Finally you came to this.. Let's end this sem with a Bang !!",
    link1: "https://drive.google.com/drive/u/5/folders/1x534EdiyftOrjEb_KYeMXazxbvi7Qlkw",
  },
  // {
  //   name: "Internship & Placement Preparation",
  //   image: "./images/intern.jpg",
  //   animation: "fade-right",
  //   description:
  //     "Naukari ke bina kuch nahi hai Beta !! Abhi bhi time hai padh lo..",
  //   link1: "#",
  // },
];

// Function to create department cards dynamically
function createDepartmentCard(department) {
  // Check the department name and set links accordingly
  let linksContent;
  if (department.name === "First Year") {
    linksContent = `
            <a href="${department.link1}" class="btn btn-primary">Click here (Paper Factory)</a> <br>
            <a href="${department.link2}" class="btn btn-primary">Click here (New)</a>
        `;
  } else {
    linksContent = `
            <a href="${department.link1}" class="btn btn-primary">Click here</a> <br>
        `;
  }

  return `
        <div class="card" data-aos=${department.animation} style="transition: all 1.5s;">
            <div class="face face1">
                <div class="content">
                    <img src="${department.image}" height="120px">
                    <h3>${department.name}</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>${department.description}</p>
                    ${linksContent}
                </div>
            </div>
        </div>
    `;
}

// Get the container to append department cards
const departmentContainer = document.getElementById("department-container");

// Loop through the departments and append cards to the container
departmentDetails.forEach((department) => {
  const departmentCard = createDepartmentCard(department);
  departmentContainer.innerHTML += departmentCard;
});
