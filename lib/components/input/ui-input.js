import { LitElement, html } from 'lit'

export default class UiInput extends LitElement {
    render() {
        return html`
            <input
                @input=${this.handleChange}
                placeholder="Enter your name"
                value=${this.value} />
        `
    }
}
