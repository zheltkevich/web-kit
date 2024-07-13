export const toKebabCase = string => {
    if (!string) return ''
    // eslint-disable-next-line no-console
    console.log('toKebabCase', string)
    return string
        .match(/[A-Z][a-z]+|[0-9]+/g)
        .map(word => word.toLowerCase())
        .join('-')
}
