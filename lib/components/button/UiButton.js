import { LitElement, html } from 'lit'

export class UiButton extends LitElement {
    static properties = {
        version: {},
        name: {},
        inputDisabled: {},
        isHidden: {},
        myTheme: {},
        myColor: {},
    }

    constructor() {
        super()
    }

    render() {
        return html`
            <button>sfdsfsdgsgsgsdgsgs</button>
        `
    }
}
