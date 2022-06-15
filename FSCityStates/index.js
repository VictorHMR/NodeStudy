import {promises as fs} from "fs"
import * as fsc from "fs"
import * as researches from "./researches.js"

async function verify(){
    if(!fsc.existsSync('./States')){
        fs.mkdir('./States')
    }
    if(!fsc.existsSync('./Region')){
        fs.mkdir('./Region')
    }
    if(!fsc.existsSync('./Region/Norte')){
        fs.mkdir('./Region/Norte')
    }
    if(!fsc.existsSync('./Region/Nordeste')){
        fs.mkdir('./Region/Nordeste')
    }
    if(!fsc.existsSync('./Region/Centro-Oeste')){
        fs.mkdir('./Region/Centro-Oeste')
    }
    if(!fsc.existsSync('./Region/Sul')){
        fs.mkdir('./Region/Sul')
    }
    if(!fsc.existsSync('./Region/Sudeste')){
        fs.mkdir('./Region/Sudeste')
    }
}

async function populate() {        
    const States = JSON.parse(await fs.readFile('./Files/Estados.json'))
    const Citys = JSON.parse(await fs.readFile('./Files/Cidades.json'))

    for (var State of States) {
        const UFAdd = Citys.filter(city => city.Estado == State.ID)
        await fs.writeFile(`./States/${State.Sigla}.json`, JSON.stringify(UFAdd))
    }
}

async function populateRegion(){
    const States = JSON.parse(await fs.readFile('./Files/Estados.json'))
    const Citys = JSON.parse(await fs.readFile('./Files/Cidades.json'))
    const Capitals = JSON.parse(await fs.readFile('./Files/Capitais.json')) 

    States.forEach(state => {
        var list = []
        var stateA = null

        Capitals.forEach(capital =>{
            if(state.Nome === capital.Estado){
                stateA = capital.Região
            }
        })
        Citys.forEach(city=>{
            if(city.Estado === state.ID){
                list.push(city)
            }
        }) 
            fs.writeFile(`./Region/${stateA}/${state.Sigla}.json`, JSON.stringify(list,null,2))
    });
}


async function init(){
    await verify()
    await populate()
    await populateRegion()
    await researches.count("MG")
    await researches.Top5()
    await researches.searchCap("MG")
}
init()