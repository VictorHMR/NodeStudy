import {promises as fs} from "fs"

export async function count(UF) {
    let Read =  JSON.parse(await fs.readFile(`./States/${UF}.json`))
    console.log("Quantidade: " + Read.length + " Cidades em: " + UF)
}

export async function searchCap(UF){
    const Capitals = JSON.parse(await fs.readFile('./Files/Capitais.json')) 
    Capitals.forEach(state => {
        if(state.Sigla === UF){
            console.log("Capital de " + state.Estado + " é: " + state.Capital)
        }
    });
}
export async function Top5() {
    var Result = []
    let stateData = JSON.parse(await fs.readFile('./Files/Estados.json'))
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