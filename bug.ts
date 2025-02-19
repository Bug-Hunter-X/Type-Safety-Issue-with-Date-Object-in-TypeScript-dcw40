function greet(person: string, date: Date): string {
  console.log(`Hello, ${person}, today is ${date.toDateString()}!`);
  return `Hello, ${person}, today is ${date.toDateString()}!`;
}

greet("Hadi", new Date());