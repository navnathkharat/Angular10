export class Employee {
    id: Number;
    firstName : string;
    lastName : string;
    contact: string;
    age : Number;
    salary : Number;
    createdDate : Date;
    modifiedDate : Date;

    constructor()
    {
        this.id = 0;
        this.firstName = "";
        this.lastName = "";
        this.contact = "";
        this.age = 0;
        this.salary = 0;
        this.createdDate = new Date();
        this.modifiedDate = new Date();
    }
}
