export const toKebabCase = string => {
    if (!string) return ''

    const matched = string.match(/[A-Z][a-z]+|[0-9]+/g)
    // eslint-disable-next-line no-console
    console.log('matched', matched)
    // eslint-disable-next-line no-console
    console.log('toKebabCase', matched.map(word => word.toLowerCase()).join('-'))

    return matched.map(word => word.toLowerCase()).join('-')
}
