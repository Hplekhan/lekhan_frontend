var student = {
    name: "David Raj",
    sclass: "VI",
    rollno: 12
};

console.log("Before delete of rollNumber:");
console.log(student);

delete student.rollno;

console.log("After delete of rollNumber:");
console.log(student);


//Second Program

var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];

for (let i = 0; i < library.length; i++) {
    const book = library[i];

    console.log("Display Book :"+book.author);
    console.log("Title Book :"+book.title);
    console.log("Readingt status :"+book.readingStatus);
    
}