export function storeQueueData(
  name,
  description,
  finishDate,
  priority,
  comment
) {
  return function (dispatch) {
    dispatch({
      type: "QUEUE_DATA",
      name: name,
      description: description,
      finishDate: finishDate,
      priority: priority,
      comment: comment,
    });
  };
}

export function getTask(
  number,
  name,
  description,
  finishDate,
  comment,
  date,
  priority,
  status,
  day,
  month,
  year
) {
  return function (dispatch) {
    dispatch({
      type: "STORE_TASK",
      number: number,
      name: name,
      description: description,
      finishDate: finishDate,
      comment: comment,
      date: date,
      priority: priority,
      status: status,
      day: day,
      month: month,
      year: year,
    });
  };
}

export function editTask(
  number,
  name,
  description,
  finishDate,
  comment,
  date,
  priority,
  status,
  day,
  month,
  year
) {
  return function (dispatch) {
    dispatch({
      type: "EDIT_TASK",
      number: number,
      name: name,
      description: description,
      finishDate: finishDate,
      comment: comment,
      date: date,
      priority: priority,
      status: status,
      day: day,
      month: month,
      year: year,
    });
  };
}

export function moveTask(number) {
  return function (dispatch) {
    dispatch({
      type: "MOVE_TASK",
      number,
    });
  };
}
