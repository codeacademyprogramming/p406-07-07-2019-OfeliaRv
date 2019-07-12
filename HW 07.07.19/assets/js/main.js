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
    this.Educations = [];
    this.Experience = [];

}

function Class(Name, Room, Teacher, Students, TotalDuration) {
    this.Name = Name;
    this.Room = Room;
    this.Teacher = new Teacher(this.Name, this.Surname, this.Age, this.Educations, this.Experience);
    this.Students = [];
    this.TotalDuration = TotalDuration;
    this.studentName = new Student(this.Name, this.Surname, this.Age, this.PhoneNumber);

    getStudentsList() = function (Students) {
        for (let studentName of Students) {
            console.log(`${this.Student.Name}-${this.Student.Surname}`);
        }
    }

//     this.getStudentPhoneNumber() = function (studentName) {
//         for (let studentName of Students) {
//             console.log(`${this.Student.PhoneNumber}`);
//         }
//     }
// }

var Ofa = new Student('Ofa', 'Rahmanova', 19, 5466746);
var Nara = new Student('Narmin', 'Rahmanova', 15, 5464246);
// var Yolchu = new Teacher('Yolchu', 'Nasib', 40, 4556677, { 'school': 'uni' }, { 'ca': 'school' });
// var Kabinet = new Class('CS', 406, Yolchu.Teacher(), Student.getStudentsList(), 340);

