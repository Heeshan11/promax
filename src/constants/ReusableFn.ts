export const textSlice = (text: string, startNum: number, endNum: number) => {
    return `${text.length > endNum ? text.slice(0, endNum) + '...' : text}`
}