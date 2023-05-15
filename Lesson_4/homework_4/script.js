
class Man {
    constructor(name, age, passport, sex){
        this._name = name;
        this.age = age;
        this.passport = passport;
        this.sex = sex;

    }/*
    get name(){
        return this._name;
    }
    set name(value){
        this._name = value;
    }*/
    render(x){
        let out = '';
        out += `<p>${this._name}</p>`;
        out += `<p>${this.age}</p>`;
        out += `<p>${this.passport}</p>`;
        out += `<p>${this.sex}</p>`;
        document.getElementById(x).innerHTML = out;
    }
    
}

const man = new Man('Vasya', 33, 'Russian', 'getero')
console.log(man._name);

//man.render('out_1')
console.log(man)

class Employer extends Man {
    constructor(name, age, passport, sex, create, salary){
        super(name, age, passport, sex)
        this.create = create;
        this.salary = salary;
    }  
    get name(){
        return this._name;
    }
    set name(value){
        this._name = value;
    }
    
    render(x){
        super.render(x);
        let out1 = '';
        out1 += `<p>${this.create}</p>`;
        out1 += `<p>${this.salary}</p>`;
        //console.log(`x=${x}`)
        document.getElementById(x).innerHTML += out1;
    }
}

const employer = new Employer('Aleks', 66, 'Vietnam', 'getero', '20.05.1995', 1663);
console.log(employer._name)

employer.name = 'Petya'
employer.hero = 'Masha'
console.log(employer.name)
employer.render('out_2')
man.render('out_1')
