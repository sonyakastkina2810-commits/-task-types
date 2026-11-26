// src/index.d.ts

type Gender = 'male' | 'female';

interface Person {
    name: string;
    age: number;
    gender: Gender;
}

interface Employee extends Person {
    company: string;
}

declare function getPersons(): Person[];

declare function personToString(person: Person | Employee): string;