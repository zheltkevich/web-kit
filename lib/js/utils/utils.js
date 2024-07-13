export const toKebabCase = string => {
    if (!string) return ''
    const matched = string.match(/[A-Z][a-z]+|[0-9]+/g)

    if (!matched) return ''
    return matched.map(word => word.toLowerCase()).join('-')
}
