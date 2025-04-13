import React from 'react';
import PlotlyChart from './plotlyPlot.tsx';

const handleYeti = (

    data: any[][], // the spreadsheet data in 2d array
   showDialog: (
         content: string | React.ReactNode,
               type?: "ok" | "yesno",
                     onOk?: () => void ,
                               onCancel?: () => void 
   )=>void,

) => {
  const data2: Plotly.Data[] = [
    {
      x: ["sdf", "sf", "ef"],
      y: [10, 20, 30],
      type: 'bar'
    }
  ];
  // const scatterData: Plotly.Data[] = [{
  //   x: [1, 2, 3, 4],
  //   y: [10, 15, 13, 17],
  //   type: 'scatter',
  //   mode: 'markers',
  //   marker: {
  //     color: 'rgba(255, 100, 102, 0.7)',
  //     size: 14
  //   }
  // }];
  //
  const layout = {
      width:400,
      height:400,
    title: { text: 'Dynamic Chart Example' },
    xaxis: { title: { text: 'X Axis' } },
    yaxis: { title: { text: 'Y Axis' } }
  };

  showDialog(
      (
    <div>
      <h1>Dynamic Plotly Chart</h1>
      <PlotlyChart data={data2} layout={layout} />
    </div>
      ),
      "ok"
  );
};

export default handleYeti;
 
