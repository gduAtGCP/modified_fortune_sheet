import { Context } from './core/src/context'

function handleMyMenuClick(
    ctx: Context, 
    value: (string | null) = null){
        console.log("handle my menu click",value)
    }

export default handleMyMenuClick

    

