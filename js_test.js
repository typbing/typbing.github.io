document.write('good job')

let namep = "jane";

const year = 2018;

const isok = true

const emptyv = null


document.write(namep);

//creat a object
let people = {
    grade: 'graduate',
    height: '5.3'
};

document.write(people.grades);

//create arry
let season = ['spring', 'winter']
document.write(season[0])

//create arry using function
let seasons2 = new Array('autumn', 'summer');
document.write(seasons2[0])

//create function
function greet(){
    document.write('well done');
}

greet();

//function for the paragraph
function getmsg(){
    return 'print message for paragraph'
}

document.getElementById('msg').innerHTML = getmsg();