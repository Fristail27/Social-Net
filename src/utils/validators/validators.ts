export  const requiredField = (value:string) => {
    if (value) return undefined
    return "error message"
}

export const maxLengthCreator = (maxLength:number) => (value:string) => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined
}

// export  const maxLength30 = (value:string) => {
//     if (value.length > 30) return "Max length is 30 symbols"
//     return undefined
// }
