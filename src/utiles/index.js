export const reorder = (list, startIndex, endIndex) => {
  //タスクを並び替える
  const remove = list.splice(startIndex, 1);
  list.splice(endIndex, 0, remove[0]);
};
