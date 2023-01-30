import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Inject,
  Edit,
  Toolbar,
  Sort,
  Filter,
} from "@syncfusion/ej2-react-grids";

import Header from "../components/Header";

const url = 'https://honest-rabbits-juggle-103-86-0-98.loca.lt/api/data/route';

const ProductMaster = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ["Delete"];
  const editing = { allowDeleting: true, allowEditing: true };
  const [data, setData] = React.useState([])

  React.useEffect(async () => {
    await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((d) => {
        const { response } = d;
        const resData = JSON.stringify(response)
          .slice(1, -1)
          .replace(/\\/g, "");
        // console.log("response data : " + resData)
        const dat = JSON.parse(resData).data
        console.log("DATA : " + JSON.stringify(dat[0]))
        setData(dat);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Route Master" />
      <GridComponent
        dataSource={data}
        enableHover={false}
        allowPaging
        pageSettings={{ pageCount: 5 }}
        selectionSettings={selectionsettings}
        toolbar={toolbarOptions}
        editSettings={editing}
        allowSorting
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <ColumnDirective type="checkbox" width="50" />
          <ColumnDirective
            field="routeId"
            width="200"
            textAlign="Center"
            headerText="Route ID"
          />
          <ColumnDirective
            field="checkpoints"
            width="200"
            headerText="Checkpoints"
            textAlign="Center"
          />
          <ColumnDirective
            field="totalDistance"
            width="70"
            textAlign="Center"
            headerText="Total Distance (Kms)"
          />
          <ColumnDirective
            field="avgTimeTaken"
            width="70"
            format="C2"
            textAlign="Center"
            headerText="Avg Time Taken (Hrs)"
          />
        </ColumnsDirective>
        <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default ProductMaster;
