import { arrID } from "./index.js";

// to generate unique short id
function UniqueId() {
  let tid = Math.floor(Math.random() * 100 + 1);
  while (arrID.includes(tid)) {
    tid = Math.floor(Math.random() * 100 + 1);
  }
  return tid;
}
// to get current time and date for creation & updation tracking.
function getTimeDate() {
  let date = new Date();
  let current_time =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  let current_date =
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
  return current_date + " " + current_time;
}

export { UniqueId, getTimeDate };
