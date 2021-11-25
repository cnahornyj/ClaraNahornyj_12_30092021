/*
 * Réalise un call HTTP et récupère des données
 * *
 * @param {number} id numéro d'identifiant de l'utilisateur
 * @param {string} option endpoints
 * @return {Object} data.data données de l'API selon le numéro d'id précisé
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
