const accordionData = [
  { label: "Section 1", value: "Content for section 1" },
  { label: "Section 2", value: "Content for section 2" },
  { label: "Section 3", value: "Content for section 3" },
  { label: "Section 4", value: "Content for section 4" },
];

//we pass an obj
//we need to create dynamic html based on target div

// const accElement = document.getElementById("element")

// console.log(accElement)

document.addEventListener("DOMContentLoaded", function(){
    const accordianContainer = document.querySelector("#element")

    accordionData.forEach((item) => {
        const sectionItem = document.createElement("div")
        sectionItem.classList.add("accordion-item")
        
        const sectionHeader = document.createElement("div")
        sectionHeader.classList.add("accordion-header")
        sectionHeader.innerHTML = item.label

        const sectionContent = document.createElement("div")
        sectionContent.classList.add("accordion-content")
        sectionContent.innerHTML = `<p>${item.value}</p>`
        sectionContent.style.display = "none";

        sectionItem.appendChild(sectionHeader)
        sectionItem.appendChild(sectionContent)
        accordianContainer.appendChild(sectionItem)
    })

    accordianContainer.addEventListener("click", function(event){
        const header = event.target.closest(".accordion-header");
        if(!header) return;

        const sectionItem = header.parentNode;
        const content = sectionItem.querySelector(".accordion-content")
        const isActive = sectionItem.classList.contains("active")

        document.querySelectorAll(".accordion-item").forEach((item) => {
            item.classList.remove("active")
          item.querySelector(".accordion-content").style.display = "none";
        })

        if (!isActive) {
            sectionItem.classList.add("active");
            content.style.display = "block";
        }
    })


})