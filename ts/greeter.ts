//Taken from http://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

interface Person {
    firstName: string;
    lastName: string;
}

class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = `${firstName} ${middleInitial} ${lastName}`;
    }
}

function greeter(person: Person) {
    console.log("Hello, world!");
    return `Hello, ${person.firstName} ${person.lastName}`;
}

let user = new Student("Jimmy", "A", "Student");

document.body.innerHTML = greeter(user);