interface ComponentPayload {
	tagName?: string;
	props?: {
		[key: string]: unknown;
	};
	state?: {
		[key: string]: unknown;
	};
}

export default class Component {
	el;
	state;
	props;
	constructor(payload: ComponentPayload = {}) {
		const { tagName = 'div', state = {}, props = {} } = payload;
		this.el = document.createElement(tagName);
		this.state = state;
		this.props = props;
		this.render();
	}
	render() {}
}
