'use strict';

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

// Print member data into console
for (let i = 0; i < members.length; i++) {
    console.log(`Member ${i+1}:`)
    for (let key in members[i]) {
        console.log(`${key}: ${members[i][key]}`);
    }
}