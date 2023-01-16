import ProjectTaskList from "./ProjectTaskList";

//A Function that creates an Array of ProjectTaskList and Returns it
const filterTasks = (allTasks) => {

  //Return if there are no tasks to filter
  if (allTasks == undefined) {
    return;
  }

  //Get the Name of each unique Project
  const groupedProjects = [];
  const projectNames = [...new Set(allTasks.map((task) => task._project))];

  //Create a new ProjectTaskList for each project that contains the appropriate tasks
  for (let i = 0; i < projectNames.length; i++) {
    let temp = new ProjectTaskList(projectNames[i]);

    let tasks = allTasks.filter((task) => {
      return task._project.toLowerCase() == projectNames[i].toLowerCase();
    });

    tasks.forEach((task) => {
      temp.addTask(task);
    });

    groupedProjects.push(temp);
  }

  return groupedProjects;
};
export default filterTasks;
