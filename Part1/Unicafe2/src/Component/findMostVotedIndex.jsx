const findMostVotedIndex = (points) => {
  let maxIndex = 0;
  for (let i = 1; i < points.length; i++) {
    if (points[i] > points[maxIndex]) {
      maxIndex = 1;
    }
    return maxIndex;
  }
};

export default findMostVotedIndex;
