// array
let interviewArry = [];
let rejectedArry = [];
let currentStatus ='all';

// get id all count
let totalCount = document.getElementById("totalCount");
let interviewCount = document.getElementById("interviewCount");
let rejectedCount = document.getElementById("rejectedCount");

let jobsCount = document.getElementById("count-jobs")



const allFilterBtn = document.getElementById("all-filter-btn")
const interviewFilterBtn = document.getElementById("interview-filter-btn")
const rejectedFilterBtn = document.getElementById("rejected-filter-btn")



// get card container children
const cardContainer = document.getElementById("card-container")


const mainContainer = document.querySelector("main")

const filterSection = document.getElementById("filtered-section")



// function 

function calCount() {
    totalCount.innerText = cardContainer.children.length;
    jobsCount.innerText = cardContainer.children.length;
    interviewCount.innerText = interviewArry.length;
    rejectedCount.innerText = rejectedArry.length;

}

calCount();


function toggleStyle(id) {

    // added background and text color
    allFilterBtn.classList.add('bg-white', 'text-gray-500');
    interviewFilterBtn.classList.add('bg-white', 'text-gray-500');
    rejectedFilterBtn.classList.add('bg-white', 'text-gray-500');

    // remove background and text colore 
    allFilterBtn.classList.remove('bg-sky-500', 'text-white');
    interviewFilterBtn.classList.remove('bg-sky-500', 'text-white');
    rejectedFilterBtn.classList.remove('bg-sky-500', 'text-white');


    const selected = document.getElementById(id);
    currentStatus = id

    selected.classList.remove('bg-white', 'text-gray-500')
    selected.classList.add('bg-sky-500', 'text-white')


    if (id == 'interview-filter-btn') {
        cardContainer.classList.add('hidden');
        filterSection.classList.remove('hidden');
        if(interviewArry.length == 0){
            showEmptyMessage(filterSection)
        }
        else{
            renderInterview()
        }
    }
   


}


mainContainer.addEventListener('click', function (event) {

    if (event.target.classList.contains('interview-btn')) {
        const parentDiv = event.target.parentNode.parentNode;

        const companyName = parentDiv.querySelector('.company-name').innerText
        const PositionName = parentDiv.querySelector('.position-name').innerText
        const location = parentDiv.querySelector('.location').innerText
        const type = parentDiv.querySelector('.type').innerText
        const salary = parentDiv.querySelector('.salary').innerText
        const status = parentDiv.querySelector('.not-applied').innerText
        const note = parentDiv.querySelector('.notes').innerText

        parentDiv.querySelector('.not-applied').innerText = 'Interview'

        const cardInfo = {
            companyName,
            PositionName,
            location,
            type,
            salary,
            status: 'Interview',
            note
        }

        const companyExist = interviewArry.find(item => item.companyName == cardInfo.companyName)
        parentDiv.querySelector('.not-applied').classList.add('bg-green-500', 'text-white')

        if (!companyExist) {
            interviewArry.push(cardInfo)
        }

        rejectedArry = rejectedArry.filter(item => item.companyName != cardInfo.companyName)

        if(currentStatus == 'rejected-filter-btn'){
            if(rejectedArry.length == 0){
                showEmptyMessage(filterSection)
            }
            else{
                renderRejected()
            }
        }
        calCount()
    }
   
})

// interview fuucntion

function renderInterview() {
    filterSection.innerHTML = ''

    for (let interview of interviewArry) {
        let div = document.createElement('div')
        div.className = 'card flex justify-between shadow-md bg-white p-8 rounded-xl'
        div.innerHTML = `
                <div class="left space-y-3">
                    <p class="company-name text-sky-900 text-3xl font-bold">${interview.companyName}</p>
                    <p class="position-name text-gray-500 text-xl">${interview.PositionName}</p>
                    <ul class="work-time list-inside list-disc lg:flex gap-3 text-gray-500">
                        <p class="location">${interview.location}</p>
                        <li class="type">${interview.type}</li>
                        <li class="salary">${interview.salary}</li>
                    </ul>


                    <span class="not-applied bg-green-500 text-white font-bold px-5 py-2 rounded-xl">${interview.status}</span>

                    <p class="notes text-gray-500 mt-3">${interview.note}</p>

                    <div class="flex gap-5">
                        <button
                            class="interview-btn border-2 border-green-500 text-green-500 font-bold px-4 py-2 rounded-xl">INTERVIEW</button>
                        <button
                            class="rejected-btn border-2 border-red-500 font-bold text-red-500 px-4 py-2 rounded-xl">REJECTED</button>
                    </div>
                </div>

                <div class="right">
                    <button class="btn-delete border-2 border-gray-300 text-gray-400 p-3  rounded-full"><i
                            class="fa-solid fa-trash-can"></i></button>
                </div>
        `
        filterSection.appendChild(div)

    }
}









































const jobs = [
    {
        companyName: "Mobile First Corp",
        position: "React Native Developer",
        location: "Remote",
        type: "Full Time",
        salary: "$130,000 - $175,000",
        status: "NOT APPLIED",
        notes: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide."
    },
    {
        companyName: "WebFlow Agency",
        position: "Web Designer & Developer",
        location: "Los Angeles, CA",
        type: "Part Time",
        salary: "$60,000 - $80,000",
        status: "NOT APPLIED",
        notes: "Create stunning websites for high-profile clients. Must have portfolio with modern web design trends."
    },
    {
        companyName: "DataViz Solutions",
        position: "Data Visualization Specialist",
        location: "Denver, CO",
        type: "Full Time",
        salary: "$95,000 - $105,000",
        status: "NOT APPLIED",
        notes: "Transform complex data into compelling visual stories. Experience with D3.js, Power BI, and strong analytical thinking."
    },
    {
        companyName: "CloudFirst Inc",
        position: "Backend Developer",
        location: "Austin, TX",
        type: "Full Time",
        salary: "$110,000 - $150,000",
        status: "NOT APPLIED",
        notes: "Design and maintain scalable backend services using Python and AWS. Work with modern DevOps practices."
    },
    {
        companyName: "Innovation Labs",
        position: "UI/UX Engineer",
        location: "Seattle, WA",
        type: "Hybrid",
        salary: "$90,000 - $120,000",
        status: "NOT APPLIED",
        notes: "Create beautiful and intuitive user interfaces for web products. Strong design skills and frontend experience required."
    },
    {
        companyName: "MegaCorp Solutions",
        position: "JavaScript Developer",
        location: "New York, NY",
        type: "Full Time",
        salary: "$100,000 - $135,000",
        status: "NOT APPLIED",
        notes: "Build enterprise applications using React and Node.js. Work on large-scale e-commerce systems."
    },
    {
        companyName: "StartUpXYZ",
        position: "Full Stack Engineer",
        location: "Remote",
        type: "Full Time",
        salary: "$85,000 - $120,000",
        status: "NOT APPLIED",
        notes: "Join a fast-growing startup and work on core platform features. Experience with MERN stack required."
    },
    {
        companyName: "TechCorp Industries",
        position: "Senior Frontend Developer",
        location: "San Francisco, CA",
        type: "Full Time",
        salary: "$115,000 - $175,000",
        status: "NOT APPLIED",
        notes: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript."
    }
];


// const container = document.getElementById("card-container");

// jobs.forEach(job => {
//   container.innerHTML += `
//     <div class="card flex justify-between shadow-md bg-white p-8 rounded-xl">
//       <div class="left space-y-3">
//         <p class="text-sky-900 text-3xl font-bold">${job.companyName}</p>
//         <p class="text-gray-500 text-xl">${job.position}</p>

//         <ul class="list-disc lg:flex gap- text-gray-500">
//           <p>${job.location}</p>
//           <li>${job.type}</li>
//           <li>${job.salary}</li>
//         </ul>

//         <span class="bg-blue-100 text-sky-900 font-bold px-5 py-2 rounded-xl">
//           ${job.status}
//         </span>

//         <p class="text-gray-500 mt-3">${job.notes}</p>

//         <div class="flex gap-5">
//           <button class="border-2 border-green-500 text-green-500 font-bold px-4 py-2 rounded-xl">
//             INTERVIEW
//           </button>
//           <button class="border-2 border-red-500 font-bold text-red-500 px-4 py-2 rounded-xl">
//             REJECTED
//           </button>
//         </div>
//       </div>
//     </div>
//   `;
// });


