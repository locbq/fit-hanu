export const calculateGrade = (grade) => {
  if (grade >= 80 && grade <= 100) return { letter: 'HD', value: 4 };
  if (grade >= 70 && grade <= 79) return { letter: 'D', value: 3 };
  if (grade >= 60 && grade <= 69) return { letter: 'C', value: 2 };
  if (grade >= 50 && grade <= 59) return { letter: 'P', value: 1 };
  if (grade < 50) return { letter: 'N', value: 0 };
  return '';
};
