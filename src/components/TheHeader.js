import Component from '../core/component';
import aboutStore from '../store/about';

export default class TheHeader extends Component {
	constructor() {
		super({
			tagName: 'header',
			state: {
				menus: [
					{
						name: 'Search',
						href: '#/',
					},
					{
						name: 'Movie',
						href: '#/movie?id=tt2015381',
					},
					{
						name: 'About',
						href: '#/about',
					},
				],
			},
		});

		window.addEventListener('popstate', () => {
			this.render();
		});
	}

	render() {
		const { name } = aboutStore.state;
		const initial = name.split('/')[0][0];

		this.el.innerHTML = /* html */ `
            <a href='#/' class="logo"><span>OMDbAPI</span>.com</a>
            <nav>
                <ul>
                    ${this.state.menus
											.map(menu => {
												const href = menu.href.split('?')[0];
												const hash = location.hash.split('?')[0];
												const isActive = href === hash;
												return /* html */ `
                            <li>
                                <a class ='${isActive ? 'active' : ''}'
                                 href='${menu.href}'>${menu.name}</a>
                            </li>
                        `;
											})
											.join('')}
                </ul>
            </nav>
            <a href='#/about' class='user'>
				<div class='avartar'><span>${initial}</span></div>
			</a>
        `;
	}
}
