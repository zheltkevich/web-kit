export default class Instruction {
    constructor(instruction) {
        this._group = instruction.group
        this._title = instruction.title
        this._name = instruction.name
        this._default = instruction.default
        this._settings = instruction.settings
        this._template = instruction.template
    }

    get group() {
        return this._group
    }

    get title() {
        return this._title
    }

    get name() {
        return this._name
    }

    get default() {
        return this._default
    }

    get settings() {
        return this._settings
    }

    get attrs() {
        return this._settings.attrs
    }

    get events() {
        return this._settings.events
    }

    get slots() {
        return this._settings.slots
    }

    get template() {
        return this._template
    }
}
