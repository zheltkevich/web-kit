export default {
    group: 'Components',
    title: 'UiButton',
    name: 'ui-button',
    default: {
        variant: null,
        colorScheme: null,
        size: null,
        label: '',
        isIcon: false,
        disabled: false,
    },
    settings: {
        attrs: {
            variant: {
                description: 'Вариант кнопки',
                type: 'string',
                control: 'select',
                default: 'null',
                values: [null, 'primary', 'secondary', 'outline', 'ghost'],
            },
            colorScheme: {
                description: 'Цветовая схема кнопки',
                type: 'string',
                control: 'select',
                default: 'null',
                values: [null, 'accent', 'neutral', 'info', 'success', 'warning', 'danger'],
            },
            size: {
                description: 'Размер кнопки',
                type: 'string',
                control: 'select',
                default: 'null',
                values: [null, 's', 'm', 'l'],
            },
            label: {
                description: 'Текст кнопки',
                type: 'string',
                control: 'text',
                default: 'Button',
            },
            isIcon: {
                description: 'Кнопка с одной иконкой',
                type: 'boolean',
                control: 'toggle',
                default: false,
                values: [false, true],
            },
            disabled: {
                description: 'Отключенное состояние кнопки',
                type: 'boolean',
                control: 'toggle',
                default: false,
                values: [false, true],
            },
        },
        events: {},
        slots: {},
    },
    template: `
        <ui-button>
        </ui-button>
    `,
}
