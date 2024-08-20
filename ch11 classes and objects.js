const student = {                                           //object is created named as student
    name: "abc",
    marks: 82,
    printmarks: function () {
        console.log("marks = ", this.marks);                //"this.marks" this key word is used to target the current element in which we are right now
    },
};

// Prototypes (function of one-object can be used in another objects)(reference of the object used in another object)

const employee = {                                          //another object is created with the function in it
    calctax() {                                             //this is function inside this object
        console.log("tax rate is 10%");
    }, 
};

const karan = {                                             //this is the object with employeename
    salary: 50000,
};

karan.__proto__ = employee;                                 //this will bring the function of employee_object in karan_object
console.log(karan.calctax());                               //now we can use function of employee_object in karan_object by "karan.calctax()"

// Classes

class toyotacar{                                            //created a class with name toyotacar
    constructor(){                                          //constructor is similar to method but it executes automatically as object is created with class
        console.log("constructor is invoked by default");
    }
    start(){                                                //declared method with name start
        console.log("car start");
    }
    stop(){                                                 //declared method with name stop
        console.log("car stop");
    }
    setbrand(brand){                                        //declared a method passing parameter
        this.brand = brand;                                 //this.brand refers to variable of class, brand refers to parameter of
    }
}

let fortuner = new toyotacar();                             //created an instance object of class"toyotacar" named as "fortuner"
console.log(fortuner.start());                              //method of class is called by instance object
fortuner.setbrand("fortuner");                              //passed a argument in instance

console.log(fortuner.stop());                               //method of class is called by instance object


// Inheritance

class monkey{                                               //parent class created
    eat(){                                                  //method of parent class
        console.log("can eat");
    }
    walk(){                                                 //method of parent class
        console.log("can walk");
    }
}
class person extends monkey{                                //child class created extending parent class(using "extends" keyword)
    talk(){                                                 //method of child class
        console.log("can talk");
    }
}
// "super" keyword is used to call the properties or methods of parent class
 
let abc = new person();                                     //instance of child class created(no instance of parentclass)
console.log(abc.eat());                                     //method of parent class can be used using inheritance in child class
console.log(abc.walk());                                    //method of parent class can be used using inheritance in child class
console.log(abc.talk());                                    //method of child class itself be used