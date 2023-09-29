export function storeQueueData(
  name,
  description,
  finishDate,
  priority,
  comment,
  subtasks
) {
  return function (dispatch) {
    dispatch({
      type: "QUEUE_DATA",
      name: name,
      description: description,
      finishDate: finishDate,
      priority: priority,
      comment: comment,
      subtasks: subtasks,
    });
  };
}

export function getTask(
  number,
  name,
  description,
  finishDate,
  comments,
  date,
  priority,
  status,
  day,
  month,
  year,
  subtasks
) {
  return function (dispatch) {
    dispatch({
      type: "STORE_TASK",
      number: number,
      name: name,
      description: description,
      finishDate: finishDate,
      comments: comments,
      date: date,
      priority: priority,
      status: status,
      day: day,
      month: month,
      year: year,
      subtasks: subtasks,
    });
  };
}

export function editTask(
  number,
  name,
  description,
  finishDate,
  comments,
  date,
  priority,
  status,
  day,
  month,
  year,
  subtasks
) {
  return function (dispatch) {
    dispatch({
      type: "EDIT_TASK",
      number: number,
      name: name,
      description: description,
      finishDate: finishDate,
      comments: comments,
      date: date,
      priority: priority,
      status: status,
      day: day,
      month: month,
      year: year,
      subtasks: subtasks,
    });
  };
}

export function moveTask(number, name) {
  return function (dispatch) {
    dispatch({
      type: "MOVE_TASK",
      number: number,
      name: name,
    });
  };
}
