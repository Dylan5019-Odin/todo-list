import ProjectTasks from "./ProjectTaskList";


//A Function that creates a TaskList for each unqiue Project
const filterTasks = (allTasks) => {
    
    const groupedProjects = [];
    const projectNames = [...new Set(allTasks.map((task) => task.project))];
    
    for(let i = 0; i < projectNames.length; i++) {

        let tasks = allTasks.filter((task) => {
          return task.project == projectNames[i];
        });

       let temp = new ProjectTasks(projectNames[i], tasks);

       groupedProjects.push(temp);
    }
    
    return groupedProjects;
} 
export default filterTasks;
