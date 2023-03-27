import React from 'react';
// import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, Inject, AccumulationTooltip } from '@syncfusion/ej2-react-charts';
const Pie = ({
  id,
  data,
  legendVisiblity,
  height
}) => {
  return (
    /*#__PURE__*/
    // <AccumulationChartComponent
    //   id={id}
    //   legendSettings={{ visible: legendVisiblity, background: 'white' }}
    //   height={height}
    //   background={'#fff'}
    //   tooltip={{ enable: true }}
    //   title='Network Statistics'
    // >
    //   <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]} />
    //   <AccumulationSeriesCollectionDirective>
    //     <AccumulationSeriesDirective
    //       name="Total"
    //       dataSource={data}
    //       xName="x"
    //       yName="y"
    //       innerRadius="40%"
    //       startAngle={0}
    //       endAngle={360}
    //       radius="90%"
    //       explode
    //       explodeOffset="10%"
    //       explodeIndex={2}
    //       dataLabel={{
    //         visible: true,
    //         name: 'text',
    //         position: 'Inside',
    //         font: {
    //           fontWeight: '600',
    //           color: '#fff',
    //         },
    //       }}
    //     />
    //   </AccumulationSeriesCollectionDirective>
    // </AccumulationChartComponent>
    React.createElement("div", null, "In Maintainance")
  );
};
export default Pie;