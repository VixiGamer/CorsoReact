export default function Sidebar({ projects, onAddProject, onSelectProject }) {
    return(
        <>
            <div className="h-screen bg-black w-1/3 rounded-tr-xl mt-6 px-8 py-16 text-stone-50">
                <h2 className="text-stone-200 text-3xl uppercase font-bold md:text-xl">YOUR PROJECTS</h2>
                <button onClick={onAddProject} className="text-stone-400 bg-stone-700 hover:bg-stone-600 hover:text-stone-100 px-4 py-2 text-xs md:text-base rounded-md mt-10">+ Add project</button>
                <ul className="mt-8 text-white">
                    {projects.map((project) => (
                        <li key={project.id}>
                            <button
                                type="button"
                                onClick={() => onSelectProject(project)}
                                className="text-gray-700 active:text-white active:bg-slate-400 px-2 py-1 rounded-lg"
                            >
                                {project.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
};
