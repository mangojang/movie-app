import Component from '../core/component';

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
	}

	render() {
		this.el.innerHTML = /* html */ `
            <a href='#/' class="logo"><span>OMDbAPI</span>.com</a>
            <nav>
                <ul>
                    ${this.state.menus
											.map(menu => {
												return /* html */ `
                            <li>
                                <a href='${menu.href}'>${menu.name}</a>
                            </li>
                        `;
											})
											.join('')}
                </ul>
            </nav>
            <a href='#/about' class='user'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Hapus_Mango.jpg/330px-Hapus_Mango.jpg' alt='mangojang'></a>
        `;
	}
}
