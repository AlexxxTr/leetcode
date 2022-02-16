function getRow(rowIndex: number): number[] {
    if (rowIndex === 0) return [1];

    const currentLineSize = rowIndex + 1;
    const previousLineSize = currentLineSize - 1;

    const currentLine = [];

    const previousLine = getRow(rowIndex - 1);

    for (let numIndex = 0; numIndex < currentLineSize; numIndex++) {
        const leftCoefficient = (numIndex - 1) >= 0 ? previousLine[numIndex - 1] : 0;
        const rightCoefficient = numIndex < previousLineSize ? previousLine[numIndex] : 0;
        currentLine[numIndex] = leftCoefficient + rightCoefficient;
    }

    return currentLine;
}