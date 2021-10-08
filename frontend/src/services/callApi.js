const fetchData =  async (id, option) => {
    let url = option ? `http://localhost:3000/user/${id}/${option}` : `http://localhost:3000/user/${id}`
    let response = await fetch(url)
    let data = await response.json()
    return data.data
}

export default fetchData