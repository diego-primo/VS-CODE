function hellowWord(){
    console.log("Hello World");
}

const saudacao =() =>{
    var data = new Date()
    return data.getHours() <= 12? "Bom dia" : data.getHours <= 18 ? "Boa Tarde" : "Boa Noite";
}

hellowWord();
console.log(`A saudação no momento é: `+saudacao());