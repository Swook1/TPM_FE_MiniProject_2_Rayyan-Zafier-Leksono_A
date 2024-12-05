const Skillinput = document.getElementById("input-skill");
const addButton = document.getElementById("add-button");
const skillContainer = document.querySelector(".skill-list");

addButton.addEventListener("click", function(){
    const SkillValue = Skillinput.value.trim();

    const SkillBubble = document.createElement("div");
    SkillBubble.classList.add("item");

    const skillName = document.createElement("p");
    skillName.classList.add("skill-text");
    skillName.textContent = SkillValue;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "×";

    deleteButton.addEventListener("click", function(){
        skillContainer.removeChild(SkillBubble);
    });

    skillContainer.appendChild(SkillBubble);
    SkillBubble.appendChild(skillName);
    SkillBubble.appendChild(deleteButton);

    Skillinput.value = "";
});


