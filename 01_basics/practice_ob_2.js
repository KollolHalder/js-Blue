const richPerson = {
  name: "Kollol",
  greet: function () {
    return `Hello Mr. ${this.name}`;
  }
};

console.log(richPerson.greet());
