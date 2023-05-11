interface StoreObservers {
	[key: string]: SubscribeCallback[];
}

interface SubscribeCallback {
	(arg: unknown): void;
}

export default class Store<S> {
	public state = {} as S;
	private observers = {} as StoreObservers;
	constructor(state: S) {
		for (const key in state) {
			Object.defineProperty(this.state, key, {
				get: () => state[key],
				set: value => {
					state[key] = value;
					if (Array.isArray(this.observers[key])) {
						this.observers[key].forEach(observer => observer(value));
					}
				},
			});
		}
	}

	subscribe(key: string, cb: SubscribeCallback) {
		Array.isArray(this.observers[key]) ? this.observers[key].push(cb) : (this.observers[key] = [cb]);
	}
}
