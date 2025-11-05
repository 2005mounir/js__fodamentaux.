document.getElementById("btn").addEventListener("click", function() {
    let userInput = document.getElementById("input").value;
    let listItem = document.createElement("li");
    listItem.innerText = userInput;
    document.getElementById("list").appendChild(listItem);
    console.log(listItem);
    
  });


