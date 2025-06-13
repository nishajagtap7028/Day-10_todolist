function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  // Mark as completed
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // Delete on right-click
  li.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    li.remove();
  });

  // Delete on click of the ❌ (span simulation)
  li.addEventListener("click", function (e) {
    if (e.target === li && e.offsetX > li.clientWidth - 30) {
      li.remove();
    }
  });

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
