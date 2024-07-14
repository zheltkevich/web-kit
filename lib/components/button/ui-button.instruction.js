export default {
    group: 'Components',
    title: 'UiButton',
    name: 'ui-button',
    attrs: {
        variant: 'primary',
        colorScheme: { type: String },
        size: { type: String },
        isIcon: false,
        disabled: { type: Boolean },
    },
    controls: {
        variant: {
            title: 'Вариант',
            description: 'Вариант кнопки',
            default: '',
            control: 'select',
            options: ['', 'primary', 'secondary', 'outline', 'ghost'],
        },
        colorScheme: {
            title: 'Цветовая схема',
            description: 'Цветовая схема кнопки',
            default: '',
            control: 'select',
            options: ['', 'accent', 'neutral', 'info', 'success', 'warning', 'danger'],
        },
        size: {
            title: 'Размер',
            description: 'Размер кнопки',
            default: '',
            control: 'select',
            options: ['', 's', 'm', 'l'],
        },
        isIcon: {
            title: 'Кнопка с одной иконкой',
            description: 'Кнопка с одной иконкой',
            default: false,
            control: 'boolean',
        },
        disabled: {
            title: 'Отключено',
            description: 'Отключенное состояние кнопки',
            default: false,
            control: 'boolean',
        },
    },
    render: props => ({
        setup: () => ({ props }),
        template: `
            <ui-button
              :variant="props.variant"
              :colorScheme="props.colorScheme"
              :size="props.size"
              :isIcon="props.isIcon"
              :disabled="props.disabled"
            >
            </ui-button>
        `,
    }),
}
