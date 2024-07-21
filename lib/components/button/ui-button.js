import { LitElement, html } from 'lit'

export default class UiButton extends LitElement {
    static properties = {
        // variant: null,
        // colorScheme: null,
        // size: null,
        disabled: false,
        label: { type: String },
    }

    constructor() {
        super()
        this.label = 'Button'
        this.variant = null
        this.colorScheme = null
        this.size = null
        this.disabled = false
    }
    render() {
        return html`
            <button ?disabled=${this.disabled}>${this.label}</button>
        `
    }
}
