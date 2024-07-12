import { LitElement, html } from 'lit'

export default class UiCheckbox extends LitElement {
    constructor() {
        super()
    }

    render() {
        return html`
            <input type="checkbox" />
        `
    }
}
