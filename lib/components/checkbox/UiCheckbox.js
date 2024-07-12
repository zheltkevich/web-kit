import { LitElement, html } from 'lit'

export class UiCheckbox extends LitElement {
    constructor() {
        super()
    }

    render() {
        return html`
            <input type="checkbox" />
        `
    }
}
