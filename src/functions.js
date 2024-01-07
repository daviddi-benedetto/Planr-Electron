//   _____                _         __  __            _       _
//  / ____|              | |       |  \/  |          | |     | |
// | |     _ __ ___  __ _| |_ ___  | \  / | __ _ _ __| | ____| | _____      ___ __
// | |    | '__/ _ \/ _` | __/ _ \ | |\/| |/ _` | '__| |/ / _` |/ _ \ \ /\ / / '_ \
// | |____| | |  __/ (_| | ||  __/ | |  | | (_| | |  |   < (_| | (_) \ V  V /| | | |
//  \_____|_|  \___|\__,_|\__\___| |_|  |_|\__,_|_|  |_|\_\__,_|\___/ \_/\_/ |_| |_|
//
// A function to create a markdown file to be used in the add/delete task container function

function createMarkdownFile(){
    const fileName = "Example.md"
    const filePath = path.join(__dirname, fileName);

    fs.writeFile(filePath,"Hello",() => {});
};

// Expose the function for debugging purposes
window.createMarkdownFile = createMarkdownFile;


//      _       _     _    ______       _      _         _____         _           ____            _        _
//     / \   __| | __| |  / /  _ \  ___| | ___| |_ ___  |_   _|_ _ ___| | _____   / ___|___  _ __ | |_ __ _(_)_ __   ___ _ __
//    / _ \ / _` |/ _` | / /| | | |/ _ \ |/ _ \ __/ _ \   | |/ _` / __| |/ / __| | |   / _ \| '_ \| __/ _` | | '_ \ / _ \ '__|
//   / ___ \ (_| | (_| |/ / | |_| |  __/ |  __/ ||  __/   | | (_| \__ \   <\__ \ | |__| (_) | | | | || (_| | | | | |  __/ |
//  /_/   \_\__,_|\__,_/_/  |____/ \___|_|\___|\__\___|   |_|\__,_|___/_|\_\___/  \____\___/|_| |_|\__\__,_|_|_| |_|\___|_|
//

const addNewTaskContainerButton = document.querySelector(".fa-circle-plus");

// ADD NEW TASK CONTAINER FUNCTION
function addNewTaskContainer() {
    /// BACK END ///


    /// FRONT END ///
    // Make a new div for the task and give it a class
    const taskContainerDiv = document.createElement("div");
    taskContainerDiv.className = "task-list-container";

    // Set the HTML content for the new task CONTAINER
    taskContainerDiv.innerHTML = `
    <!--- Task-Container Below --->
    <div class="tasks-container">
        <!-- Task List Header -->
        <div class="task-list-header">
            <div class="task-list-header-left-side">
                <i class="fa-solid fa-caret-up"></i>
                <h2 id="task-list-header-text">New Project</h2>
            </div>
            <div class="task-list-header-right-side">
                <i id="task-list-header-plus" class="fa-solid fa-plus plus-header"></i>
                <p id="task-list-header-counter">0/0</p>
                <i id="task-list-header-delete" class="fa-solid fa-xmark x-header"></i>
            </div>
        </div>

        <!-- Tasks -->
        <div id="task-list" class="task-list"></div>
    </div>
    `;

    // Append the new task container to the projects sections
    document.getElementById("projects-section").appendChild(taskContainerDiv);

    // Add event listener to the delete button of the new task and make it remove its own div when clicked
    taskContainerDiv.querySelector(".fa-xmark").addEventListener("click", function() {
        this.parentElement.parentElement.parentElement.parentElement.remove();
    });

    console.log("This shit has been clicked!")

}

// Event listener for adding a new task on click
addNewTaskContainerButton.addEventListener("click", addNewTaskContainer);
addNewTaskContainerButton.addEventListener("click", createMarkdownFile);


//      _       _     _    ______       _      _         _____         _
//     / \   __| | __| |  / /  _ \  ___| | ___| |_ ___  |_   _|_ _ ___| | _____
//    / _ \ / _` |/ _` | / /| | | |/ _ \ |/ _ \ __/ _ \   | |/ _` / __| |/ / __|
//   / ___ \ (_| | (_| |/ / | |_| |  __/ |  __/ ||  __/   | | (_| \__ \   <\__ \
//  /_/   \_\__,_|\__,_/_/  |____/ \___|_|\___|\__\___|   |_|\__,_|___/_|\_\___/
//

// Get the plus button and assign it to a variable
const addNewTaskButton = document.querySelector(".plus-header");

// ADD NEW TASK FUNCTION
function addNewTask() {
    // Make a new div for the task and give it a class
    const taskDiv = document.createElement("div");
    taskDiv.className = "task";

    // Set the HTML content for the new task
    taskDiv.innerHTML = `
        <i class="fa-regular fa-circle task-icon-incomplete"></i>
        <div class="task-text" contenteditable="true"></div>
        <i class="fa-solid fa-xmark"></i>
    `;

    // Append the new task to the task list
    document.getElementById("task-list").appendChild(taskDiv);

    // Add event listener to the delete button of the new task and make it remove its own div when clicked
    taskDiv.querySelector(".fa-xmark").addEventListener("click", function() {
        this.parentElement.remove();
    });

    // Add event listener to stop enter key making text box larger
    taskDiv.querySelector(".task-text").addEventListener("keypress", e => {
        if (e.key === "Enter") {
            e.preventDefault(); // This prevents the enter key from making a new line
        }
    });

}

// Event listener for adding a new task on click
// addNewTaskButton.addEventListener("click", addNewTask);