import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton.jsx"
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";


export default function Examples() {
    useState();

    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton)
    }

    return(
        <Section title="Examples" id="examples">
            <Tabs ButtonsContainer="menu" buttons={
                <>
                    {/* COMPONENT COMPOSITION */}
                    <TabButton isSelected={selectedTopic === "components"} onClick={() => handleSelect("components")}>Components</TabButton>
                    <TabButton isSelected={selectedTopic === "jsx"} onClick={() => handleSelect("jsx")}>JSX</TabButton>
                    <TabButton isSelected={selectedTopic === "props"} onClick={() => handleSelect("props")}>Props</TabButton>
                    <TabButton isSelected={selectedTopic === "state"} onClick={() => handleSelect("state")}>State</TabButton>
                </>
            }>
                {/* Se il topic non e selezionato, fa vedere questa scritta */}
                {!selectedTopic && <p>Please select a topic.</p>}

                {/* Se il topic e selezionato allora fa vedere la card di quel topic */}
                {selectedTopic && <div id="tab-content">
                    <h3>{EXAMPLES[selectedTopic].title}</h3>
                    <p>{EXAMPLES[selectedTopic].description}</p>
                    <pre>
                        <code>
                        {EXAMPLES[selectedTopic].code}
                        </code>
                    </pre>
                </div>}
            </Tabs>
            <menu>
            </menu>
        </Section>
    )
} 