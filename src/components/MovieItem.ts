import Component from '../core/component';
import { Movie } from '../store/movie';

interface Props {
	[key: string]: unknown;
	movie: Movie;
}

export default class MovieItem extends Component {
	public props!: Props;
	constructor(props: Props) {
		super({
			props,
			tagName: 'a',
		});
	}

	render() {
		const { movie } = this.props;

		this.el.setAttribute('href', `#/movie?id=${movie.imdbID}`);
		this.el.classList.add('movie');
		this.el.style.backgroundImage = `url(${movie.Poster})`;
		this.el.innerHTML = /* html */ `
            <div class="info">
                <div class="year">
                    ${movie.Year}
                </div>
                <div class="title">
                    ${movie.Title}
                </div>
            </div>
        `;
	}
}
