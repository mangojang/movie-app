import Store from '../core/store';

const store =  new Store({
    searchText : '',
    page: 1,
    movies: []
})

export default store

export const searchMovies = async page => {
    const res = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=844b5e77&s=${store.state.searchText}&page=${page}`)
    const json = await res.json()
    console.log(json)
}