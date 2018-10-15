class Person {
    private _firstName: string;
    get fname() {
        return this._firstName;
    }
    set fname(fname: string) {
        this._firstName = fname;
    }
}

let p = new Person();
p.fname = "Asaad";
console.log(p.fname);