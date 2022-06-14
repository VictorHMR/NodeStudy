import {promises as fs} from "fs"

async function populate() {
   
        
    let stateData = await fs.readFile('./Files/Estados.json')
    const States = JSON.parse(stateData)
    let cityData = await fs.readFile('./Files/Cidades.json')
    const Citys = JSON.parse(cityData)

    for (var State of States) {
        const UFAdd = Citys.filter(city => city.Estado == State.ID)
        await fs.writeFile(`./States/${State.Sigla}.json`, JSON.stringify(UFAdd))
    }
}

async function count(UF) {
    let Read = await fs.readFile(`./States/${UF}.json`)
    Read = JSON.parse(Read)
    console.log("Quantidade: " + Read.length + " Cidades em: " + UF)
}

async function Top5() {
    var Result = []
    let stateData = await fs.readFile('./Files/Estados.json')
    stateData = JSON.parse(stateData)
    var States = stateData.map((stateData) => { return stateData.Sigla })
    for (var State of States) {
        let Read = await fs.readFile(`./States/${State}.json`)
        Read = JSON.parse(Read)
        Result.push({name: State, Citys: Read.length})
    }
    
    Result.sort((a,b)=>{
        if(a.Citys < b.Citys){ return 1}
        if(a.Citys > b.Citys){ return -1}
        return 0
    })

    Result = Result.splice(0,5)
    console.log(Result)
}


async function init(){
    await populate()
    await count("MG")
    await Top5()
}
init()