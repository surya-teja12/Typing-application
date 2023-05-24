export const testDetailsCalculator = (originalValue, typedValue) => {
    const words = typedValue.split(' ').length;
    const characters = typedValue.length;
    const mistakes = typedValue.split('').reduce((acc, typedChar, index) => {
        return typedChar !== originalValue[index] ? acc+1 : acc 
    }, 0)
    const accuracy = mistakes <= 0 ? 100 : 100-mistakes ;

    return { words, characters, mistakes,accuracy }
}