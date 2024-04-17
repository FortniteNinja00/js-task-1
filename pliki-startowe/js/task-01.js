

let xd = document.getElementById("categories").children.length;
        console.log("Number of categories: "+xd, '\n');


    const fortnite = document.getElementById("categories").children;



    for(let i = 0 ; i < xd ; i++){

        console.log("Category: "+   fortnite[i].children[0].textContent);
        console.log("Elements: "+fortnite[i].children[1].childElementCount);

        
    }
