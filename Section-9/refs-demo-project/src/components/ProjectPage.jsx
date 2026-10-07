import { useState } from "react";

export default function ProjectPage({ projectName, projectDesc, projectId, date, tasks, onAddTask, onDeleteTask, onDeleteProject }) {
    const formattedDate = `${String(date.getDate()).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(2, "0")}/${date.getFullYear()}`;
    const [taskTitle, setTaskTitle] = useState("");

    const isAddTaskDisabled = !taskTitle.trim();
    const addTaskStyle = isAddTaskDisabled ? "text-gray-200" : "active:text-gray-500";

    function handleAddTask() {
        if (isAddTaskDisabled) return;

        onAddTask(projectId, taskTitle.trim());
        setTaskTitle("");
    }

    return (
        <section className="min-h-screen bg-slate-100 p-10">
            <div className="max-w-4xl mt-16 flex place-content-between">
                <div>
                    <h2 className="text-4xl font-bold text-slate-900">{projectName}</h2>
                    <h3 className="mt-3 text-sm text-slate-500">Created on {formattedDate}</h3>
                    <p className="mt-8 text-lg text-slate-700">{projectDesc}</p>
                </div>

                <button onClick={() => onDeleteProject(projectId)} className="mt-10 text-gray-700 hover:text-red-600">
                    Delete
                </button>
            </div>
            <hr className="my-5" />
            <div>
                <h2 className="text-4xl font-bold text-slate-900">Tasks</h2>
                <div className="mt-8">
                    <input
                        type="text"
                        value={taskTitle}
                        onChange={(event) => setTaskTitle(event.target.value)}
                        className="bg-gray-300 rounded-lg h-10 px-3"
                    />
                    <button onClick={handleAddTask} disabled={isAddTaskDisabled} className={`ml-5 ${addTaskStyle}`}>Add task</button>
                </div>
                <div className="mt-8 bg-gray-200 p-5 rounded-lg w-1/2">
                    {tasks.map((task) => (
                        <div key={task.id} className="mb-3 flex place-content-between items-center gap-4 border-b border-slate-300 pb-3 last:border-b-0 last:pb-0">
                            <p className="text-slate-700">{task.title}</p>
                            <button onClick={() => onDeleteTask(projectId, task.id)} className="text-red-600 hover:text-red-800">
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};
