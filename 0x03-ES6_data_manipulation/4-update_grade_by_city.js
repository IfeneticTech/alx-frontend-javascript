export default function updateStudentGradeByCity(studentList, city, newGrades) {
  // Filter to get students in the specified city
  const studentByCity = studentList.filter((student) => student.location === city);

  // Map to update grades
  const updatedStudents = studentByCity.map((student) => {
    // Find the grade object for the student in newGrades array
    const gradeObject = newGrades.find((grade) => grade.studentId === student.id);

    // If grade is found, update else set to 'N/A'
    const updatedGrade = gradeObject ? gradeObject.grade : 'N/A';

    // Return a new object with the updated grade
    return {
      ...student,
      grade: updatedGrade,
    };
  });

  return updatedStudents;
}
