import { LitElement, html } from 'lit'

export class UiSelect extends LitElement {
    render() {
        return html`
            <select>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        `
    }
}
