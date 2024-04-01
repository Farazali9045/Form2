let inputFields = document.querySelectorAll(".inputField");
document.addEventListener("click", (event) => {
    // Check if the click is not inside any input field
    if (!event.target.closest(".inputField")) {
        inputFields.forEach(inputField => {
            let inputLabel = inputField.nextElementSibling; // Assumes the inputLabel is the immediate sibling after the inputField
            inputLabel.style.top = ""; // Reset to default style
        });
    }
});

inputFields.forEach(inputField => {
    inputField.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent the click event from propagating to the document
        let inputLabel = inputField.nextElementSibling; // Assumes the inputLabel is the immediate sibling after the inputField
        inputLabel.style.top = "0px";
    });
});




let inputLabels = document.querySelectorAll(".inputLabel");


// document.addEventListener("click", () => {
//     inputFields.forEach(inputField => {
//         inputField.classList.remove("active");
//     });
//     inputLabel.forEach(inputLabel => {
//         inputLabel.classList.remove("active");
//     });

// });

// inputFields.forEach(inputField => {
//     inputField.addEventListener("click", (event) => {
//         event.stopPropagation();
//         inputFields.forEach(field => {
//             if (field !== inputField) {
//                 field.classList.remove("active");
//             }
//         });

//         inputFields.forEach(field => {
//             if (field !== inputLabel) {
//                 field.classList.remove("active");
//             }
//         });
//         inputField.classList.add("active");
//         inputLabel.classList.add("active");
        
//     });
// });

document.addEventListener("click", () => {
    inputFields.forEach(inputField => {
        inputField.classList.remove("active");
    });
    inputLabels.forEach(inputLabel => {
        inputLabel.classList.remove("active");
    });
});

inputFields.forEach((inputField, index) => {
    inputField.addEventListener("click", (event) => {
        event.stopPropagation();
        inputFields.forEach(field => {
            field.classList.remove("active");
        });
        inputLabels.forEach(label => {
            label.classList.remove("active");
        });

        inputField.classList.add("active");
        inputLabels[index].classList.add("active");
    });
});
