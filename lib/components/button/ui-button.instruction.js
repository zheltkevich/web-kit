export default {
    group: 'Components',
    title: 'UiButton',
    name: 'ui-button',
    props: {
        variant: { type: String },
        size: { type: String },
        colorScheme: { type: String },
        disabled: { type: Boolean },
    },
    render: props => ({
        setup: () => ({ props }),
        template: `
            <ui-button
              :variant="args.variant"
              :size="args.size"
              :colorScheme="args.colorScheme"
              :disabled="args.disabled"
            >
            </ui-button>
        `,
    }),
}
