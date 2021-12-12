/*
 * Perform an HTTP call and retrieve data
 * *
 * @param {number} id user ID number
 * @param {string} option endpoints
 * @return {Object} data.data API data according to the specified id number
 */
const fetchData = async (id, option) => {
  let url = option
    ? `http://localhost:3000/user/${id}/${option}`
    : `http://localhost:3000/user/${id}`;
  let response = await fetch(url);
  let data = await response.json();
  return data.data;
};

export default fetchData;
