import { useState } from "react";

export type PlayerCardProps = {
    name: string;
  };

const PlayerCard = ({ name }: PlayerCardProps) => {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <div>{name}</div>
            <button onClick={handleClick}>{count}</button>
        </div>
    );
}

export default PlayerCard;