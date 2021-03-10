const sum = (a, b) => a + b;

export const calculateFee = (fee) => {
  if (fee) {
    const subjectFee = fee.map((item) => item.fee);
    return subjectFee.reduce(sum);
  }
  return 0;
};
