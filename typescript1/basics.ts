//Primitives: number, string, boolean
//More complex types: arrays, objects
//function types, parameters

//Primitives

let age: number = 24;

age = 12.2;

let userName: string = "Stefan";

let isAdmin: boolean = true;

//More complex types

let hobbies: string[] = ["Sports", "Books"];

type Person = { name: string; age: number };

let person: Person;

person = {
  name: "Stefan",
  age: 32,
};

let people: Person[] = [{ name: "Stefan", age: 27 }];

//type inference

let course = "React - The complete guide";

// course = 12341;

//Union Types

let book: string | number | boolean = "Some book";

book = true;
book = 27;

//Functions & types

function add(a: number, b: number) {
  return a + b; //type inference return value is :number
}

function printOutput(value: any) {
  console.log(value);
}

// Generics

// function insertAtBeginning (array: any[], value: any) {
//   const newArray = [value, ...array];
//   return newArray;
// }

// const demoArray = [1,2,3];
// const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3] :number[];
const stringArray = insertAtBeginning(["1", "a", "b"], "d"); //:string[];
const stringArrayTwo = insertAtBeginning<string>(["a", "b", "c"], "d");
