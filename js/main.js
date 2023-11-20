'use strict';

// FUNCTIONS

// Function to create a member element
function createMemberElement(member) {
    // Create member div
    const memberDiv = document.createElement('div');
    memberDiv.classList.add('member');

    // Create image div
    const imgDiv = document.createElement('div');
    imgDiv.classList.add('member-img');
    const img = document.createElement('img');
    img.src = `img/${member.photo}`;
    img.alt = member.name;
    imgDiv.appendChild(img);

    // Create details div
    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('member-details');
    const h2 = document.createElement('h2');
    h2.textContent = member.name;
    const p = document.createElement('p');
    p.textContent = member.position;
    detailsDiv.appendChild(h2);
    detailsDiv.appendChild(p);

    // Append image and details to member div
    memberDiv.appendChild(imgDiv);
    memberDiv.appendChild(detailsDiv);

    return memberDiv;
}

// DATA

// Make objects array
const members = [
    {
        name: "Wayne Barnett",
        position: "Founder & CEO",
        photo: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        position: "Chief Editor",
        photo: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        position: "Office Manager",
        photo: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        position: "Social Media Manager",
        photo: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        position: "Developer",
        photo: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        position: "Graphic Designer",
        photo: "barbara-ramos-graphic-designer.jpg"
    }
];

// EXECUTION

// Print member data into console
for (let i = 0; i < members.length; i++) {
    console.log(`Member ${i+1}:`)
    for (let key in members[i]) {
        console.log(`${key}: ${members[i][key]}`);
    }
}

// Select members-box in the DOM
const membersBox = document.querySelector('.members-box');

// Create document fragment
const fragment = document.createDocumentFragment();

// Use a for loop to create the slides and append them to the fragment
for (let i = 0; i < members.length; i++) {
    const memberElement = createMemberElement(members[i]);
    fragment.appendChild(memberElement);
}

// Append entire fragment to members box
membersBox.appendChild(fragment);