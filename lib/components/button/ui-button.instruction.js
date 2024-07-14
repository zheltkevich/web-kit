export default {
    group: 'Components',
    title: 'UiButton',
    name: 'ui-button',
    attrs: {
        variant: null,
        colorScheme: null,
        size: null,
        isIcon: false,
        disabled: false,
    },
    controls: {
        variant: {
            title: 'Вариант',
            description: 'Вариант кнопки',
            default: null,
            control: 'select',
            options: [null, 'primary', 'secondary', 'outline', 'ghost'],
        },
        colorScheme: {
            title: 'Цветовая схема',
            description: 'Цветовая схема кнопки',
            default: null,
            control: 'select',
            options: [null, 'accent', 'neutral', 'info', 'success', 'warning', 'danger'],
        },
        size: {
            title: 'Размер',
            description: 'Размер кнопки',
            default: null,
            control: 'select',
            options: [null, 's', 'm', 'l'],
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
    template: `
        <ui-button>
        </ui-button>
    `,
}
