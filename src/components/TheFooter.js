import Component from '../core/component';
import aboutStore from '../store/about';

export default class TheFooter extends Component {
	constructor() {
		super({
			tagName: 'footer',
		});
	}

	render() {
		const { github, repository } = aboutStore.state;
		this.el.innerHTML = /* html */ `
            <div>
                <a href='${repository}'>Github Repository</a>
            </div>
            <div>
                <a href='${github}'>${new Date().getFullYear()} mangojang</a>
            </div>
        `;
	}
}
