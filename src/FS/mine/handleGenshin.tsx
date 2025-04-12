// import { Context } from '../core/src/context.ts'
// import {useState} from "react"
import NumberInput from './NumberInput.tsx'
import TextInput from './TextInput.tsx'
import CheckBox from './CheckBox.tsx'
import DrawDownSelection from './DrawDown.tsx'
import { getColNames, excelColumnToIndex, getMultiColNum } from './utilities.tsx'

function handleGenshin(
    data: any[][], // the spreadsheet data in 2d array
   showDialog: ()=>void,
){
       let alpha:number=0.05;
       let inputText:string="Klee";
       let exclRow1:boolean=true;
       let drawdown1:string="1";
       let drawdown2:string="";

         const handleValueChange = (newValue: number) => {
                 console.log('New value:', newValue);
                 alpha=newValue;
                   };
         const handleTextChange = (newValue: string) => {
                 console.log('New text value:', newValue);
                 inputText=newValue;
                   };
        const handleCheckboxChange = (newValue: boolean) =>{
            console.log("new checkbox", newValue);
            exclRow1=newValue;
        }
        const handleDrawDownChange = (newValue: string) =>{
            console.log("draw down new",newValue);
            drawdown1=newValue;
        }
        const handleDrawDownChange2 = (newValue: string) =>{
            console.log("draw down new",newValue);
            drawdown2=newValue;
        }
       
       console.log(data)
       
       function colSum(){
           console.log("selected col",drawdown2)
           const colSelect=excelColumnToIndex(drawdown2);
           console.log("col index",colSelect);
           if (colSelect===null || colSelect<0 ) return;
           // let colList: number[] = []
           // colList.push(colSelect);
           // console.log("parent",colList);
           const arr=getMultiColNum(data,[colSelect] , exclRow1 )
           console.log(arr)
           return arr[0].reduce((acc, curr) => acc + curr, 0);
       }

       function onClick(){
           return (
               <div className="textboxs">
               <p>Got alpha value is {alpha}.</p>
               <p>Inputed text is "{inputText}".</p>
               <p>exclude row 1 {exclRow1}.</p>
               <p>drawdown get number: {drawdown1}. </p>
               <p>Sum of the selected column = {colSum()} </p>
               </div>
           )
       }

       showDialog(
           (
         <div>
                <h3>OG Player ? Here? </h3>
                <NumberInput onChange={handleValueChange} textLabel="Alpha: " defaultValue={alpha} step="0.1" />
                <TextInput onChange={handleTextChange} textLabel="Text: " defaultValue={inputText} />
                <CheckBox onChange={handleCheckboxChange} textLabel="Exclude the frist Row" defaultValue={exclRow1} /> 
                <DrawDownSelection onChange={handleDrawDownChange} options={["1","2"]} textLabel="Select a number: " />
                <DrawDownSelection onChange={handleDrawDownChange2}
                                    options={getColNames(data)} textLabel="Select a column: " width="100" />
         </div>
       ), // above is the dialog content
       "yesno", // the type of dialog yesno or ok
        ()=>{showDialog(onClick() ,"ok")}
                )
   }

export default handleGenshin


