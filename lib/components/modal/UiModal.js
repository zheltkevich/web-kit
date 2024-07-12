import { LitElement, html } from 'lit'

export class UiModal extends LitElement {
    render() {
        return html`
            <div class="modal">
                <div class="modal-content">
                    <slot></slot>
                </div>
            </div>
        `
    }
}
