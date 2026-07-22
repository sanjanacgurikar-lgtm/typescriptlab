function greet(name: string): string {
return "Hello, " + name + "!";
}
let message = greet("Student");
document.getElementById("output")!.innerHTML = message;
