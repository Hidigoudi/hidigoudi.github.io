let dateElement = document.querySelector(".date");
let lastModifiedDate = document.lastModified;
let date = new Date(lastModifiedDate);
let formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

dateElement.innerHTML += formattedDate;