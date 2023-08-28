document.addEventListener("DOMContentLoaded",()=>{
    const main = document.querySelector(".main");


    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            const summaryHeading = document.createElement("h3");
            summaryHeading.textContent = "Summary";
            main.appendChild(summaryHeading);

            data.forEach(category => {

                const dataDiv = document.createElement("div");
                dataDiv.classList.add("category");

                const icon=document.createElement("img");
                icon.src=category.icon;
                icon.alt=category.category;
                dataDiv.appendChild(icon)

                const categoryParagraph = document.createElement("p");
                categoryParagraph.textContent = category.category;
                dataDiv.appendChild(categoryParagraph)

                const categoryScore = document.createElement("p");
                categoryScore.textContent=`${category.score} / 100`
                dataDiv.appendChild(categoryScore);

                main.appendChild(dataDiv)
            });

            const continueParagraph = document.createElement("button");
            continueParagraph.textContent = "Continue";
            main.appendChild(continueParagraph);
             
        })
        .catch(error => console.error("Error fectching JSON", error));

});