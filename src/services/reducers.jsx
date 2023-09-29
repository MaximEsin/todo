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
  x;
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
  },
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "QUEUE_DATA": {
      const taskNumber = state.queueData.length + 1;
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
            comment: action.comment,
            date: `${day}-${month}-${year}`,
            day: day,
            month: month,
            year: year,
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
          comment: action.comment,
          date: action.date,
          priority: action.priority,
          status: action.status,
          day: action.day,
          month: action.month,
          year: action.year,
        },
      };
    }
    case "EDIT_TASK": {
      const newTask = {
        number: action.number,
        name: action.name,
        description: action.description,
        finishDate: action.finishDate,
        comments: action.comment,
        date: action.date,
        priority: action.priority,
        status: action.status,
        day: action.day,
        month: action.month,
        year: action.year,
      };
      return {
        ...state,
        queueData: [
          ...state.queueData.filter((item) => item.number !== action.number),
          newTask,
        ],
      };
    }

    case "MOVE_TASK": {
      return {
        ...state,
        currentTask: {
          number: action.number,
          name: action.name,
          description: action.description,
          finishDate: action.finishDate,
          comment: action.comment,
          date: action.date,
          priority: action.priority,
          status: action.status,
          day: action.day,
          month: action.month,
          year: action.year,
        },
      };
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
