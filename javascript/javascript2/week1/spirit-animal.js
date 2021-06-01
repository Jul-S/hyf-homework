const animals = ["The bored panda", "The crying butterfly", " The fullmoon wolf", "The fat beaver", "The bearded kangaroo",
    "The loonar racoon", "The silke toad", "The bigfooted gazelle", "The seaweed opposum", "The lunar hawk"];

const btn = document.getElementById('button');
const input = document.getElementById("nameInput"); 
const radios = document.getElementsByName('type');
radios.forEach(radio => radio.addEventListener('change', changeType));

function changeType() {
for (const radio of radios) {
    if (radio.checked) {
        switch (radio.value) {
            case "click":
                input.removeEventListener("input", generateName);
                input.removeEventListener("mouseover", generateName);       
                btn.addEventListener(radio.value, generateName);
                break;
            case "mouseover": 
                btn.removeEventListener("click", generateName);
                input.removeEventListener("input", generateName);
                input.addEventListener(radio.value, generateName);
                break;
            case "input":
                btn.removeEventListener("click", generateName);
                input.removeEventListener("mouseover", generateName); 
                input.addEventListener(radio.value, generateName);
                break;
        }
    }
}
}


function generateName() {
    const inputValue = document.getElementById("nameInput").value;
    inputValue ? document.getElementById("displayName").innerText = `${inputValue} - ${animals[Math.floor(Math.random() * 10)]}`
        : document.getElementById("displayName").innerText = `Enter your name first`;
}