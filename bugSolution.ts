function greet(person: string, date: Date): string {
  console.log(`Hello, ${person}, today is ${date.toDateString()}!`);
  return `Hello, ${person}, today is ${date.toDateString()}!`;
}

function isDate(date: any): date is Date {
  return date instanceof Date;
}

function greetSafe(person: string, date: any): string {
  if(isDate(date)){
    console.log(`Hello, ${person}, today is ${date.toDateString()}!`);
    return `Hello, ${person}, today is ${date.toDateString()}!`;
  }
  else{
    console.log(`Hello, ${person}, today is an invalid date!`);
    return `Hello, ${person}, today is an invalid date!`;
  }
}

// Example usage 
 greet("Hadi", new Date());
greetSafe("Hadi", new Date());
greetSafe("Hadi", "not a date");