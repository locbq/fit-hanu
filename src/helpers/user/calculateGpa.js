import { calculateGrade } from './calculateGrade';

const sum = (a, b) => a + b;

export const calculateGpa = (grades) => {
  if (grades) {
    const totalGradePoints = [];
    const totalCredits = grades.map((grade) => grade.credits);
    const totalResults = grades.map((grade) => grade.grade);
    const gpaValue = totalResults.map((point) => calculateGrade(point).value);
    for (let i = 0; i < totalCredits.length; i += 1) {
      totalGradePoints.push(totalCredits[i] * gpaValue[i]);
    }
    return totalGradePoints.reduce(sum) / totalCredits.reduce(sum);
  }
  return '';
};
