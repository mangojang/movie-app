import Component from '../core/component';

export default class TheFooter extends Component {
	constructor() {
		super({
			tagName: 'footer',
		});
	}

	render() {
		this.el.innerHTML = /* html */ `
            <div>
                <a href='https://github.com/mangojang/movie-app.git'>Github Repository</a>
            </div>
            <div>
                <a href='https://github.com/mangojang'>${new Date().getFullYear()} mangojang</a>
            </div>
        `;
	}
}
