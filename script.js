console.log("Script initialised");

function card() {
    let input = document.getElementById("work");

    if (input.value == '') {
        alert("Write something!!");
        return false;
    }
    let html1 = `<div class="task">
                    <span>${input.value}</span>
                    <button class="done_walabutton">Done</button>
                 </div>`;

    document.querySelector(".tasks_card").innerHTML += html1;
    input.value = "";
    attachDoneEventListeners();

    saveData();
}

function attachDoneEventListeners() {
    let doneButtons = document.querySelectorAll(".done_walabutton");

    doneButtons.forEach(button => {
        button.addEventListener("click", () => {
            let task = button.closest('.task');
            task.classList.add("done");
            saveData();
        });
    });
}

function saveData() {
    localStorage.setItem("data", document.querySelector(".tasks_card").innerHTML);
}

function showData() {
    let savedData = localStorage.getItem("data");
    if (savedData) {
        document.querySelector(".tasks_card").innerHTML = savedData;
        attachDoneEventListeners();
    }
}

showData();


