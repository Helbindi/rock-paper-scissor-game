// Get or Create a Local Storage for GameScore
let localScore;
if (localStorage.getItem("gameScore")) {
  localScore = localStorage.getItem("gameScore");
} else {
  localStorage.setItem("gameScore", 0);
  localScore = localStorage.getItem("gameScore");
}

export const initialState = {
  player: {
    isSelected: false,
    selection: {
      id: null,
      name: null,
      src: null,
    },
  },
  house: {
    isSelected: false,
    selection: {
      id: null,
      name: null,
      src: null,
    },
  },
  score: Number(localScore),
  gameStatus: null,
};

const gameReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "PLAYER_SELECT": {
      const newSelect = {
        player: {
          isSelected: true,
          selection: {
            id: payload.id,
            name: payload.name,
            src: payload.src,
          },
        },
      };

      return { ...state, ...newSelect };
    }
    case "HOUSE_SELECT": {
      const newSelect = {
        house: {
          isSelected: true,
          selection: {
            id: payload.id,
            name: payload.name,
            src: payload.src,
          },
        },
      };

      return { ...state, ...newSelect };
    }
    case "UPDATE_SCORE": {
      let newScore = state.score + payload.value;
      if (newScore < 0) newScore = 0;
      localStorage.gameScore = newScore;

      return { ...state, score: newScore };
    }
    case "GAME_STATUS": {
      return { ...state, gameStatus: payload.result };
    }
    case "RESET_SELECT": {
      return {
        ...state,
        player: initialState.player,
        house: initialState.house,
        gameStatus: null,
      };
    }
    default:
      throw new Error(`No case for type ${type} found in GameReducer`);
  }
};

export default gameReducer;
