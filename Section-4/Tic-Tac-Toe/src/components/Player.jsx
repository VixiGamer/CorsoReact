import { useState } from "react"

export default function Player({initialName, symbol, isActive, onChangeName}) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    let editedPlayerName = <span className="player-name">{playerName}</span>

    if (isEditing === true) {
        editedPlayerName = <input type="text" required placeholder={playerName} onChange={handleChange}/>
    }

    function handleEditClick() {
        //setIsEditing(!isEditing)
        setIsEditing((editing) => !editing)
        
        if (isEditing) {
            onChangeName(symbol, playerName)
        }
        
        /*
            ! SPIEGAZIONE
            ^ E fortemente consiliato passare una funzione quando si cambia lo stato di una funzione (detto dal team di react)
            ? Passandogli una funzione gli diamo l'ultima versione di setEditing, e percio verra cambiato subbito.
            ? Per esempio se faccio:
            §   setIsEditing(!isEditing)
            §   setIsEditing(!isEditing)
            ? Mi aspetto che il valore di 'isEditing' cambia da: false(iniziale) => true(1°setEditing) => true(2°setEditing),
            ? ma non e cosi, perché tutti e due gli elementi prendolo lo stesso stato iniziale di 'isEditing' (fasle), perciò,
            ? lo cambiano tutti e due a true.
            ? Invece, se facciamo cosi:
            §   setIsEditing((editing) => !editing)
            §   setIsEditing((editing) => !editing)
            ? Qui invece la sitruazione vambia perché passandolgi la funzione prendolo lo stato attuale si 'isEditing',
            ? e perciò il flusso sarà: false(iniziale) => true(1°setEditing) => false(2°setEditing).

        */
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    return (
        <li className={isActive === true ? "active" : undefined}>
          <span className="player">
            {editedPlayerName}
            <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
};
