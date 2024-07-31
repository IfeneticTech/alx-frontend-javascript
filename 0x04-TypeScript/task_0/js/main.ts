interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Valentino',
  lastName: 'Phillipe',
  age: 20,
  location: 'Milan'
};

const student2: Student = {
  firstName: 'Jamal',
  lastName: 'Damian',
  age: 22,
  location: 'Los Angeles'
};

const studentsList: Student[] = [student1, student2];

/**
 * Renders a table of students.
 * @param students - An array of Student objects.
 */
function renderTable(students: Student[]) {
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');

  table.style.background = "blue";
  table.appendChild(tbody);

  students.forEach((student: Student): void => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    nameCell.style.border = "1px solid blue";
    locationCell.style.border = "1px solid blue";
    nameCell.style.padding = "5px";
    locationCell.style.padding = "5px";

    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
  });

  document.body.appendChild(table);
}

// Call the function to render the table
renderTable(studentsList);
