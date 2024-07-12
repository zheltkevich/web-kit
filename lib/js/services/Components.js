import { toKebabCase } from '@lib/js/utils/utils.js'

export default class Core {
    constructor() {
        this.#setup()
    }

    static setup() {
        new this()
    }

    #setup() {
        const modules = import.meta.glob('@lib/components/**/index.js')

        this.#register(modules)
    }
    #register(modules) {
        Object.values(modules).forEach(async getModule => {
            const module = await getModule()
            const name = toKebabCase(module.default.name)
            const component = module.default
            customElements.define(name, component)
        })
    }
}
