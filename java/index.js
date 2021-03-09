const baseURL = "http://localhost:3000"


let nameInput = () => document.getElementById("name")
let scoreInput = () => document.getElementById("score")



class Duel {

    constructor(score){
        this.id = score.id
        this.score = score.score
        this.user = score.user
        Duel.all.push(this)
    }
    static all = []
}