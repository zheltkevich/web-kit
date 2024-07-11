export const toKebabCase = string => {
    if (typeof string !== 'string') return
    return string
        .match(/[A-Z][a-z]+|[0-9]+/g)
        .map(word => word.toLowerCase())
        .join('-')
}
