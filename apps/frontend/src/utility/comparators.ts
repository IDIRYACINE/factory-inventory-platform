

export function numericSimilarityProbability(target: number, actual: number): number {
    const absoluteDifference = Math.abs(target - actual);
    const maximumAbsoluteDifference = Math.max(target, actual);
  
    const similarity = 1 - (absoluteDifference / maximumAbsoluteDifference);
  
    return similarity;
  }


