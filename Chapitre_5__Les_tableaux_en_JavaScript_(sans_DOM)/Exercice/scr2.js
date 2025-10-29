let livres = [
    { titre: "Le Petit Prince", auteur: "Antoine de Saint-Exupéry", prix: 120 },
    { titre: "1984", auteur: "George Orwell", prix: 90 },
    { titre: "L'Alchimiste", auteur: "Paulo Coelho", prix: 150 }
  ];
  
  console.log("Tableau initial :", livres);
  
  
  for (let i = 0; i < livres.length; i++) {
    console.log(livres[i].titre);
  }
  
  
  let totalPrix = 0;
  for (let i = 0; i < livres.length; i++) {
    totalPrix += livres[i].prix;
  }
  console.log("Prix total :", totalPrix);
  
   
  for (let i = 0; i < livres.length; i++) {
    if (livres[i].prix > 100) {
      console.log("Livre cher :", livres[i].titre);
    }
  }
  
  
  livres.push({ titre: "Le Seigneur des Anneaux", auteur: "J.R.R. Tolkien", prix: 200 });
  console.log("Tableau après ajout :", livres);
  