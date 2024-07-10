/* eslint-disable no-console */
import { LitElement, html } from 'lit'

export default class UiExample extends LitElement {
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
        this.version = 'Goooood'
        this.name = 'World'
        this.inputDisabled = true
        this.isHidden = false
        this.myTheme = 'my-theme'
        this.myColor = 'red'
    }

    render() {
        return html`
            <p>Welcome to the Lit tutorial!</p>
            <p>This is the ${this.version} code.</p>
            <p style="color: ${this.myColor}">Hello, ${this.name}</p>
            <input
                @input=${this.changeName}
                placeholder="Enter your name"
                ?disabled=${!this.inputDisabled} />
            <label>
                <input
                    type="checkbox"
                    @change=${this.disableInput} />
                Disable editing
            </label>
            <button @click=${this.handleClick}>Click me!</button>

            <!-- Child nodes -->
            <h1>${this.pageTitle}</h1>

            <!-- Attribute -->
            <div class=${this.myTheme}></div>

            <!-- Boolean attribute -->
            <p ?hidden=${this.isHidden}>I may be in hiding.</p>

            <!-- Property -->
            <input .value=${this.value} />

            <!-- Event listener -->
            <button @click=${this.hideText}>...</button>
        `
    }

    hideText() {
        this.isHidden = !this.isHidden
        this.myColor = this.myColor === 'red' ? 'blue' : 'red'
        console.log('Text hidden', this.isHidden)
    }

    disableInput() {
        this.inputDisabled = !this.inputDisabled
    }

    changeName(event) {
        console.log('changeName', event)
        const { value } = event.target
        this.name = value
    }

    handleClick() {
        this.version = 'Amazing'
    }
}
