// CREO ARRAY DI OGGETTI 

const memberInfo = [
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
]

// console.log(memberInfo);


// STAMPO IN CONSOLE CON CICLO FOR

for (let i= 0; i < memberInfo.length; i++){
    let currMember = memberInfo [i]; //object

//   console.log(currMember);
//   console.log ("***********************")

// stampo in console con dot notation e braket notation i valori dell'oggetto

//   console.log(currMember.name);
//   console.log(currMember ["position"]);


// STAMPO TUTTE LE INFORMAZIONI DI OGNI MEMBRO DEL TEAM IN CONSOLE UTILIZZANDO IL CICLO FOR IN

    for (let key in currMember){
    console.log (currMember[key]);
    }
}












