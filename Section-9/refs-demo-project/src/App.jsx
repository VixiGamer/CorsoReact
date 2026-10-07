import Sidebar from "./components/Sidebar";
import CreateProjectModal from "./components/CreateProjectModal";
import ProjectPage from "./components/ProjectPage";
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [openProject, setOpenProject] = useState();

  //^ Funzione per crare un progetto
  function handleCreateProject(project) {
    setProjects((currentProjects) => [
      ...currentProjects,
      { ...project, tasks: [] }
    ]);
    setIsModalOpen(false);
  }

  //^ Funzione per eliminare un progetto
  function handleDeleteProject(id) {
    setProjects((currentProjects) => (
      currentProjects.filter((project) => project.id !== id)
    ));
    setOpenProject(undefined);
  }

  //^ Funzione per crare una task
  function handleAddTask(projectId, taskTitle) {
    const task = { id: crypto.randomUUID(), title: taskTitle };

    setProjects((currentProjects) => currentProjects.map((project) => (
      project.id === projectId
        ? { ...project, tasks: [...project.tasks, task] }
        : project
    )));
    
    setOpenProject((currentProject) => ({
      ...currentProject,
      tasks: [...currentProject.tasks, task]
    }));
  }

  //^ Funzione per eliminare una task
  function handleDeleteTask(projectId, taskId) {
    setProjects((currentProjects) => currentProjects.map((project) => (
      project.id === projectId
        ? { ...project, tasks: project.tasks.filter((task) => task.id !== taskId) }
        : project
    )));
    setOpenProject((currentProject) => ({
      ...currentProject,
      tasks: currentProject.tasks.filter((task) => task.id !== taskId)
    }));
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar
        projects={projects}
        onAddProject={() => setIsModalOpen(true)}
        onSelectProject={setOpenProject}
      />
      <main className="flex-1">
        {openProject ? (
          <ProjectPage
            projectName={openProject.name}
            projectDesc={openProject.description}
            projectId={openProject.id}
            date={openProject.date}
            tasks={openProject.tasks}
            onAddTask={handleAddTask}
            onDeleteTask={handleDeleteTask}
            onDeleteProject={handleDeleteProject}
          />
        ) : (
          <p className="p-10 text-gray-500 text-center text-xl">Create or select a project to see its page.</p>
        )}
      </main>
      {isModalOpen && (
        <CreateProjectModal
          onClose={() => setIsModalOpen(false)}
          onCreateProject={handleCreateProject}
        />
      )}
    </div>
  );
}

export default App;
