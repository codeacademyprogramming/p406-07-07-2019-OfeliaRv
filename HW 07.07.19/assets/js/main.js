function Student(Name, Surname, Age, PhoneNumber) {
    this.Name = Name;
    this.Surname = Surname;
    this.Age = Age;
    this.PhoneNumber = PhoneNumber;
}

function Teacher(Name, Surname, Age, Educations, Experience) {
    this.Name = Name;
    this.Surname = Surname;
    this.Age = Age;
    this.Educations = Educations;
    this.Experience = Experience;

}

function Class(Name, Room, Teacher, Students, TotalDuration) {
    this.Name = Name;
    this.Room = Room;
    this.Teacher = Teacher;
    this.Students = Students;
    this.TotalDuration = TotalDuration;

    this.getStudentsList = function () {
        for (let Student of this.Students) {
            console.log(`${Student.Name} ${Student.Surname}`);
        }
    }

    this.getStudentPhoneNumber = function (studentName) {
        for (let Student of Students) {
            if (Student.Name === studentName) {
                return Student.PhoneNumber;
            }
        }
        console.log(`${Student.PhoneNumber} is not here`);
    }
}

console.log(new Student('Ofa', 'Rahmanova', 19, 5466746));
var Nara = new Student('Narmin', 'Rahmanova', 15, 5464246);
var Yolchu = new Teacher('Yolchu', 'Nasib', 40, 4556677, ['school', 'uni'], ['ca', 'school']);

const Kabinet = new Class('CS', 406,
    [new Teacher('Yolchu', 'Nasib', 40, 4556677, ['school', 'uni'], ['ca', 'school'])],
    [new Student('Narmin', 'Rahmanova', 15, 5464246), new Student('Ofa', 'Rahmanova', 19, 5466746)],
    340);

Kabinet.getStudentsList();
