import Store from '../core/store';

const store =  new Store({
    searchText : '',
    page: 1,
    movies: []
})

export default store

export const searchMovies = async page => {
    console.log('searchMovies')
    if(page===1){
        store.state.page = 1
        store.state.movies = []
    }
    const res = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=844b5e77&s=${store.state.searchText}&page=${page}`)
    const { Search } = await res.json()
    store.state.movies =[
        ...store.state.movies,
        ...Search
    ]
}