const dataFetcher = {
  baseUrl: 'http://localhost:8080/api/v1/playlist',

  async getAllSongs() {
    const response = await fetch(this.baseUrl)
    const data = await response.json()
    return data
  },







}




export default dataFetcher
