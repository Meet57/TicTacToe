import React, { createContext, useState, useEffect } from 'react'

export const GameContext = createContext()

export const GameContextProvider = (props) => {

    const [Square, setSquare] = useState(Array(9).fill(null))
    // const [Square, setSquare] = useState([null, "O", "O", "X", "X", "X", "O", null, null])
    const [Xturn, setXturn] = useState(false)
    const [Winner, setWinner] = useState(false)


    useEffect(() => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (Square[a] && Square[a] === Square[b] && Square[a] === Square[c]) {
                console.log('Winner', Winner)
                setWinner(Square[a])
            }
        }
    }, [Square,Winner])

    const ChangeSquare = (id) => {
        if (Square[id] === null && Winner === false) {
            if (Xturn) {
                Square[id] = "X"
            } else {
                Square[id] = "O"
            }

            setXturn(!Xturn)
            setSquare([...Square])
        }
    }

    const NewGame = () => {
        setSquare(Array(9).fill(null))
        setWinner(false)
        setXturn(false)
    }

    return (
        <GameContext.Provider
            value={{
                Square,
                Winner,
                NewGame,
                ChangeSquare
            }}
        >
            {props.children}
        </GameContext.Provider>
    )
}
