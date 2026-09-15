import CoreConcept from "./CoreConcept.jsx"
import { CORE_CONCEPTS } from "../data.js"

export default function CoreConcepts() {
    return(
        <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
                {/* 
                    Usiamo un map cosi da essere sicuri che tutti gli elementi che sono nel array sia visibbili,
                    anche perche se dovrebbe cambiare la dimensione delll'arry allora cosi non dovremmo cabiare
                    niente in app.jsx
                */}
                {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem} />)}

                {/* <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image} />
                <CoreConcept {...CORE_CONCEPTS[1]} />     -----Uso lo spread operator per inserire tutti gli elementi in CORE_CONCEPTS[X] 
                <CoreConcept {...CORE_CONCEPTS[2]} />
                <CoreConcept {...CORE_CONCEPTS[3]} /> */}
            </ul>
        </section>
    )
}