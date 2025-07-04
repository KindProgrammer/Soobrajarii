import { useState } from "react";
import { usePlayers } from "./PlayerProvider";

export type PlayerCardProps = {
    name: string;
    id: symbol
  };

const PlayerCard = ({ id, name }: PlayerCardProps) => {
    const [count, setCount] = useState(0)
    const { removePlayer } = usePlayers()

    const handleClick = () => {
        setCount(count + 1);
    }

    const handleRemove = () => {
        removePlayer(id)
    }

    return (
        <div>
            <div>{name}</div>
            <button onClick={handleClick}>{count}</button>
            <button onAuxClick={handleRemove}>Удалить игрока</button>
        </div>
    );
}

export default PlayerCard;