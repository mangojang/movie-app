import Store from '../core/store';

interface State {
	photo: string;
	name: string;
	email: string;
	blog: string;
	github: string;
	repository: string;
}

export default new Store<State>({
	photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Hapus_Mango.jpg/330px-Hapus_Mango.jpg',
	name: 'mangojang / JangJiHyeon',
	email: 'mangojang994@gmail.com',
	blog: 'https://velog.io/@mangojang',
	github: 'https://github.com/mangojang',
	repository: 'https://github.com/mangojang/movie-app.git',
});
