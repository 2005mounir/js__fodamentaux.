let  bibliotheque = [

{code:1,titre: "Eloquent Javascript", auteur: "Robert C. Martin", annee: 2008, disponible: true, prix: 150 },
{code:2 ,titre: "gggggg", auteur: "Marijn Haverbeke", annee: 2018, disponible: true, prix: 200 },
{code:3 ,titre: "Ehhhhhh", auteur: "Marijn Haverbeke", annee: 2018, disponible: true, prix: 200 },
{code:4 ,titre: "Elllllllll", auteur: "Marijn Haverbeke", annee: 2020, disponible: true, prix: 400 },
{code:5 ,titre: "Elohhhhhhhhh", auteur: "Marijn Haverbeke", annee: 2021, disponible: true, prix: 500 },
{code:6 ,titre: "mmmmmmmmmmm", auteur: "Marijn Haverbeke", annee: 2022, disponible: true, prix: 600 },
{code:7 ,titre: "Elkkkkkkkkk", auteur: "Marijn Haverbeke", annee: 2023, disponible: true, prix: 700 },
{code:8 ,titre: "Esssssssss", auteur: "Marijn Haverbeke", annee: 2024, disponible: true, prix: 800 },

];

let container = document.querySelector('.container');


bibliotheque.forEach((livre)=>{
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML=`
     <h2> ${livre.titre}<h2/>
     <p>auteur<p/>
     <p>annee<p/>
     <p>disponible<p/>
     <button>Suprimé</button>     
    `
    container.appendChild(card)
    
    




})


