import React, { createContext, useState, useContext } from 'react';
import type { ReactNode } from 'react';
import PlayerCard from './PlayerCard';

type Player = {
    id: symbol,
    card: ReactNode
}

interface PlayersContextType {
    players: Player[]
    addPlayer: (playerName: string) => void;
    removePlayer: (playerID: symbol) => void;
  }

const PlayersContext = createContext<PlayersContextType | null>(null);

interface PlayersProviderProps {
    children: ReactNode;
  }

const PlayersProvider: React.FC<PlayersProviderProps> = ({children}) => {
    const [players, setPlayers] = useState<Player[]>([])

    const addPlayer = (playerName: string) => {
        const newPlayerID = Symbol(`${playerName} id`);

        const newPlayer = {
            id: newPlayerID,
            card: <PlayerCard id={newPlayerID} key={newPlayerID.toString()} name={playerName}/>
        }
        setPlayers([...players, newPlayer])
    }

    const removePlayer = (playerID: symbol) => {
        const newPlayersList = players.filter((player) => player.id === playerID);
        setPlayers(newPlayersList);
    }

    return (
        <PlayersContext.Provider value={{players, addPlayer, removePlayer}}>
            {children}
        </PlayersContext.Provider>
    )
}

export const usePlayers = () => {
    const context = useContext(PlayersContext);
    if (context === null) {
        throw new Error('usePlayers must be used within a PlayersProvider');
      }
      return context;
}

export default PlayersProvider;