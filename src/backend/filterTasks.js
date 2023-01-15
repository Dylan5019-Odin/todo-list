import ProjectTaskList from "./ProjectTaskList";

//A Function that creates a TaskList for each unqiue Project
const filterTasks = (allTasks) => {
  const groupedProjects = [];
  const projectNames = [...new Set(allTasks.map((task) => task._project))];

  for (let i = 0; i < projectNames.length; i++) {
    let temp = new ProjectTaskList(projectNames[i]);

    let tasks = allTasks.filter((task) => {
      return task._project == projectNames[i];
    });

    tasks.forEach((task) => {
      temp.addTask(task);
    });

    groupedProjects.push(temp);
  }

  return groupedProjects;
};
export default filterTasks;
