import * as components from './components'

const registerComponents = components => {
    Object.values(components).forEach(component => {
        customElements.define('ui-example', component)
    })
}
registerComponents(components)
