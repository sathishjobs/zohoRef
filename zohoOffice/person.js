class Person {
    constructor(id=1,personal={},educational={},workExperience={}){
        this.Id = id
        this.personalDetails = personal
        this.edicationalDetails = educational
        this.workExperienceDetails = workExperience
    }
}



class DataClass{
    constructor(){
        this.person = [new Person()];
    }

    addData(id,details,where){
        this.person[id][where].push(details)
    }

}

let test = new DataClass()
console.log(test)