document.body.addEventListener("keydown", (event) => {
    let key = event.key.toLowerCase();
    let keyElement = document.getElementById(key);

    if (keyElement) {
        pressKey(keyElement);
    }
});

document.body.addEventListener("keyup", (event) => {
    let key = event.key.toLowerCase();
    let keyElement = document.getElementById(key);

    if (keyElement) {
        releaseKey(keyElement);
    }
});

let allKeys = document.querySelectorAll("#white-keys li, #black-keys li");

allKeys.forEach((key) => {
    key.addEventListener("mousedown", () => pressKey(key));
    key.addEventListener("mouseup", () => releaseKey(key));
    key.addEventListener("mouseleave", () => releaseKey(key));
});

function pressKey(el) {
    el.style.transform = "translateY(4px)";
    el.style.boxShadow = "0 0 0 0";

    let soundName = el.id;
    let audioPath = `Sounds/${soundName}.mp3`;

    let audio = new Audio(audioPath);
    audio.currentTime = 0;
    audio.play().catch(() => {});
}

function releaseKey(el) {
    el.style.transform = "translateY(0px)";
    el.style.boxShadow = "0 6px 2px rgba(156,156,156,0.589)";
}

let notes = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
    "7.png"
]; 

let notesContainer = document.querySelector(".notes-container");
let piano = document.querySelector(".piano");

piano.addEventListener("click", createFloatingNote);

document.addEventListener("keydown", createFloatingNote);


function createFloatingNote() {
    // 1. Create note element
    let note = document.createElement("img");
    note.classList.add("note");

    // 2. Pick random note image
    let randomIndex = Math.floor(Math.random() * notes.length);
    note.src = "./notes/" + notes[randomIndex];

    // 3. Random horizontal position
    let randomX = Math.random()*900;  
    note.style.left = (randomX + 500) + "px";

    // 4. Add note inside container
    notesContainer.appendChild(note);

    // 5. Start floating animation (slight delay for transition to work)
    setTimeout(() => {
        note.style.opacity = 0.8;
        note.style.transform = "translateY(-200px)";
    }, 5);

    // 6. Remove note after animation
    setTimeout(() => {
        note.remove();
    }, 2000);
}
