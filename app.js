//To add element to an array:
  // const animalArray = ['dog', 'cat', 'pig'];
  // animalArray.push('cow');

  // const personObj = {
  //   name: 'Lernantino',
  //   age: 99
  // };
  // personObj.age = 100;
  // personObj.occupation = 'Developer';

const inquirer = require('inquirer'); 
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

//   //const profileDataArgs = process.argv.slice(2);
//   //const [name, github] = profileDataArgs;
// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML(name, github), err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });
const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ]);
};
promptUser().then(answers => console.log(answers));