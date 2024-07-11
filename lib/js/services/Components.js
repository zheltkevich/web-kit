import { toKebabCase } from '@lib/js/utils/utils.js'

export default class Components {
    constructor() {
        this.#setup()
    }

    static setup() {
        new this()
    }

    #setup() {
        const modules = import.meta.glob(`@lib/components/**/index.js`)
        this.#register(modules)
    }
    #register(modules) {
        Object.values(modules).forEach(async getModule => {
            const module = await getModule()
            const { name, component } = this.#extractComponentFromModule(module)
            customElements.define(name, component)
        })
    }
    #extractComponentFromModule(module) {
        const [[name, component]] = Object.entries(module)
        return {
            name: toKebabCase(name),
            component,
        }
    }
}
