export const textSlice = (text, startNum, endNum) => {
    return `${text.length > endNum ? text.slice(0, endNum) + '...' : text}`;
};
