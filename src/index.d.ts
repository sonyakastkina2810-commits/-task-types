type Gender = 'male' | 'female';

interface User {
    name: string;
    age: number;
    gender: Gender;
}

interface Employee extends User {
    company: string;
}

declare function getPersons(): User[];

declare function personToString(person: User | Employee): string;