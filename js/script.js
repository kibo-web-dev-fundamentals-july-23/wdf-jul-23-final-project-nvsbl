// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // 1. Change the displayed text of an element
    const h1Element = document.querySelector("h1"); // Select the h1 element
    // Check if h1Element is not null (element exists)
    if (h1Element) {
      h1Element.addEventListener("click", function () {
        h1Element.textContent = "Text changed!";
      });
    } else {
      console.error("h1 element not found"); // Log an error if h1 element is not found
    }
  
    // 2. Change an element's color
    const section1 = document.querySelector(".Section1");
    section1.addEventListener("mouseover", function () {
      section1.style.color = "purple"; /*red*/
    });
    section1.addEventListener("mouseout", function () {
      section1.style.color = "black";
    });
  
    // 3. Change an element's background color
    const section2 = document.querySelector(".Section2");
    section2.addEventListener("mouseenter", function () {
      section2.style.backgroundColor = "lightblue";
    });
    section2.addEventListener("mouseleave", function () {
      section2.style.backgroundColor = "white";
    });
  
    // 4. Create a new element
    const newElementButton = document.querySelector(".foot button");
    newElementButton.addEventListener("click", function () {
      const newParagraph = document.createElement("p");
      newParagraph.textContent = "New paragraph added!";
      document.body.appendChild(newParagraph);
    });
  
    // 5. Delete an existing element
    const deleteElementButton = document.querySelector(".menu1 a.active");
    deleteElementButton.addEventListener("click", function () {
      const elementToDelete = document.querySelector(".Section3");
      elementToDelete.remove();
    });
  
    // 6. Hide an element
    const hideElementButton = document.querySelector(".box1-2 img");
    hideElementButton.addEventListener("dblclick", function () {
      hideElementButton.style.display = "none";
    });
  
    // 7. Display an element
    const displayElementButton = document.querySelector(".box1-3 img");
    displayElementButton.addEventListener("dblclick", function () {
      displayElementButton.style.display = "block";
    });
  
    // 8. Change the color of a link
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("mouseover", function () {
        link.style.color = "black"; /*green*/
      });
      link.addEventListener("mouseout", function () {
        link.style.color = "";
      });
    });
  
    // 9. Change the font size of a paragraph
    const paragraphs = document.querySelectorAll("p");
    paragraphs.forEach((paragraph) => {
      paragraph.addEventListener("click", function () {
        paragraph.style.fontSize = "20px";
      });
    });
  
    // 10. Toggle a class on an element
    const toggleButton = document.querySelector(".navbar");
    toggleButton.addEventListener("click", function () {
      toggleButton.classList.toggle("active");
    });
  });
  