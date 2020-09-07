import React, { useContext } from 'react'
import { GameContext } from '../Context/GameContext'

export const Table = () => {

    const { Square, ChangeSquare, Winner, NewGame } = useContext(GameContext)

    const handleChange = (e) => {
        ChangeSquare(e)
    }


    return (
        <>
            <table>
                <tr>
                    <td onClick={() => handleChange(0)}> {Square[0]} </td>
                    <td onClick={() => handleChange(1)}> {Square[1]} </td>
                    <td onClick={() => handleChange(2)}> {Square[2]} </td>
                </tr>
                <tr>
                    <td onClick={() => handleChange(3)}> {Square[3]} </td>
                    <td onClick={() => handleChange(4)}> {Square[4]} </td>
                    <td onClick={() => handleChange(5)}> {Square[5]} </td>
                </tr>
                <tr>
                    <td onClick={() => handleChange(6)}> {Square[6]} </td>
                    <td onClick={() => handleChange(7)}> {Square[7]} </td>
                    <td onClick={() => handleChange(8)}> {Square[8]} </td>
                </tr>
            </table>

            { Winner ?
            <h2>Winner : {Winner} <br/>
            <button onClick={NewGame} >New Game</button> 
            </h2>
            : <></> }

        </>
    )
}
