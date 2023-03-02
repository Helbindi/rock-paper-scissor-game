import { createContext, useReducer, useContext } from "react";
import gameReducer, { initialState } from "./gameReducer";

const GameContext = createContext(initialState);

export const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const playerSelect = (selected) => {
    console.log("playerSelect Function: ", selected);

    dispatch({
      type: "PLAYER_SELECT",
      payload: {
        id: selected.id,
        name: selected.name,
        src: selected.src,
      },
    });
  };

  const houseSelect = (selected) => {
    console.log("houseSelect Function: ", selected);

    dispatch({
      type: "HOUSE_SELECT",
      payload: {
        id: selected.id,
        name: selected.name,
        src: selected.src,
      },
    });
  };

  const updateScore = (value) => {
    console.log("updateScore Function: ", value);

    dispatch({
      type: "UPDATE_SCORE",
      payload: {
        value: value,
      },
    });
  };

  const updateStatus = (result) => {
    console.log("updateStatus Function: ", result);

    dispatch({
      type: "GAME_STATUS",
      payload: {
        result: result,
      },
    });
  };

  const resetSelect = () => {
    dispatch({
      type: "RESET_SELECT",
      payload: {},
    });
  };

  const value = {
    state,
    playerSelect,
    houseSelect,
    updateScore,
    updateStatus,
    resetSelect,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

const useGameContext = () => {
  const context = useContext(GameContext);

  if (context === undefined) {
    throw new Error("useGameContext must be used within GameContext");
  }

  return context;
};

export default useGameContext;
