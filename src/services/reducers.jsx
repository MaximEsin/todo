import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem("state", serializedState);
  } catch (err) {
    console.log(err);
  }
};

const loadState = () => {
  try {
    const serializedState = sessionStorage.getItem("state");
    if (!serializedState) return undefined;
    else return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const persistedStore = loadState();

const initialState = {
  queueData: [],
  developmentData: [],
  doneData: [],
  currentTask: {
    item: {
      name: "",
    },
    comments: [],
  },
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "QUEUE_DATA": {
      const taskNumber =
        state.queueData.length +
        1 +
        state.developmentData.length +
        state.doneData.length;
      const date = new Date();

      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return {
        ...state,
        queueData: [
          ...state.queueData,
          {
            number: taskNumber,
            name: action.name,
            description: action.description,
            finishDate: action.finishDate,
            priority: action.priority,
            comments: action.comment,
            date: `${day}-${month}-${year}`,
            day: day,
            month: month,
            year: year,
            subtasks: action.subtasks,
          },
        ],
      };
    }
    case "STORE_TASK": {
      return {
        ...state,
        currentTask: {
          number: action.number,
          name: action.name,
          description: action.description,
          finishDate: action.finishDate,
          comments: action.comments,
          date: action.date,
          priority: action.priority,
          status: action.status,
          day: action.day,
          month: action.month,
          year: action.year,
          subtasks: action.subtasks,
        },
      };
    }
    case "EDIT_TASK": {
      const newTask = {
        number: action.number,
        name: action.name,
        description: action.description,
        finishDate: action.finishDate,
        comments: action.comments,
        date: action.date,
        priority: action.priority,
        status: action.status,
        day: action.day,
        month: action.month,
        year: action.year,
        subtasks: action.subtasks,
      };
      if (action.status === "Queue") {
        return {
          ...state,
          queueData: [
            ...state.queueData.filter((item) => item.number !== action.number),
            newTask,
          ],
        };
      }

      if (action.status === "Development") {
        return {
          ...state,
          developmentData: [
            ...state.developmentData.filter(
              (item) => item.number !== action.number
            ),
            newTask,
          ],
        };
      }

      if (action.status === "Done") {
        return {
          ...state,
          doneData: [
            ...state.doneData.filter((item) => item.number !== action.number),
            newTask,
          ],
        };
      }
    }

    case "MOVE_TASK": {
      if (action.name === "Development") {
        let itemToMove;
        const itemFromQueue = state.queueData.filter(
          (item) => item.number === action.number.number
        );

        const itemFromDone = state.doneData.filter(
          (item) => item.number === action.number.number
        );

        if (itemFromQueue.length > 0) {
          itemToMove = itemFromQueue;
          return {
            ...state,
            queueData: [
              ...state.queueData.filter(
                (item) => item.number !== action.number.number
              ),
            ],
            developmentData: [...state.developmentData, itemToMove[0]],
          };
        } else if (itemFromDone.length > 0) {
          itemToMove = itemFromDone;
          return {
            ...state,
            doneData: [
              ...state.doneData.filter(
                (item) => item.number !== action.number.number
              ),
            ],
            developmentData: [...state.developmentData, itemToMove[0]],
          };
        } else {
          return {
            ...state,
          };
        }
      }

      if (action.name === "Queue") {
        let itemToMove;
        const itemFromDev = state.developmentData.filter(
          (item) => item.number === action.number.number
        );

        const itemFromDone = state.doneData.filter(
          (item) => item.number === action.number.number
        );

        if (itemFromDev.length > 0) {
          itemToMove = itemFromDev;
          return {
            ...state,
            developmentData: [
              ...state.developmentData.filter(
                (item) => item.number !== action.number.number
              ),
            ],
            queueData: [...state.queueData, itemToMove[0]],
          };
        } else if (itemFromDone.length > 0) {
          itemToMove = itemFromDone;
          return {
            ...state,
            doneData: [
              ...state.doneData.filter(
                (item) => item.number !== action.number.number
              ),
            ],
            queueData: [...state.queueData, itemToMove[0]],
          };
        } else {
          return {
            ...state,
          };
        }
      }

      if (action.name === "Done") {
        let itemToMove;
        const itemFromDev = state.developmentData.filter(
          (item) => item.number === action.number.number
        );

        const itemFromQueue = state.queueData.filter(
          (item) => item.number === action.number.number
        );

        if (itemFromDev.length > 0) {
          itemToMove = itemFromDev;
          return {
            ...state,
            developmentData: [
              ...state.developmentData.filter(
                (item) => item.number !== action.number.number
              ),
            ],
            doneData: [...state.doneData, itemToMove[0]],
          };
        } else if (itemFromQueue.length > 0) {
          itemToMove = itemFromQueue;
          return {
            ...state,
            queueData: [
              ...state.queueData.filter(
                (item) => item.number !== action.number.number
              ),
            ],
            doneData: [...state.doneData, itemToMove[0]],
          };
        } else {
          return {
            ...state,
          };
        }
      }
    }

    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  dataReducer,
});

const store = createStore(
  rootReducer,
  persistedStore,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
