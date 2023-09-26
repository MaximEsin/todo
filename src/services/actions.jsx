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
