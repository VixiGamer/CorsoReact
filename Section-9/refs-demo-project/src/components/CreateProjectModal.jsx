import { useEffect, useRef, useState } from "react"

export default function CreateProjectModal({ onClose, onCreateProject }) {
    const modal = useRef();
    const projectName = useRef();
    const projectDesc = useRef();

    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
    const submitStyle = isSubmitDisabled
        ? "text-gray-600 bg-gray-300"
        : "text-green-600 bg-green-300 active:bg-green-400";

    useEffect(() => {
        modal.current.showModal();
    }, []);

    function handleSubmit() {
        onCreateProject({
            id: crypto.randomUUID(),
            name: projectName.current.value,
            description: projectDesc.current.value,
            date: new Date()
        });
    }

    function handleVerification() {
        const hasEmptyField = !projectName.current.value.trim() || !projectDesc.current.value.trim();
        setIsSubmitDisabled(hasEmptyField);
    }

    return (
        <dialog ref={modal} onClose={onClose} className="p-10 rounded-xl">
            <div className="flex gap-4">
                <div className="mb-5">
                    <p className="font-bold">Project name:</p>
                    <input onChange={handleVerification} className="border-2 rounded-lg h-8 mt-3" ref={projectName} type="text" />
                </div>

                <div className="mb-5">
                    <p className="font-bold">Project description:</p>
                    <textarea onChange={handleVerification} className="border-2 rounded-lg h-8 mt-3" ref={projectDesc} type="text" />
                </div>
            </div>
            <menu className="flex place-content-between">
                <button type="button" onClick={() => modal.current.close()} className="text-red-600 bg-red-300 active:bg-red-400 px-2 py-1 rounded-xl">
                    Close
                </button>
                <button type="button" onClick={handleSubmit} disabled={isSubmitDisabled} className={`${submitStyle} px-2 py-1 rounded-xl`}>
                    Submit
                </button>
            </menu>
        </dialog>
    )
};
