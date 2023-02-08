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

const url =
  "https://honest-rabbits-juggle-103-86-0-98.loca.lt/api/data/transaction";
const ProductMaster = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ["Delete"];
  const editing = { allowDeleting: true, allowEditing: true };
  const [data, setData] = React.useState([]);

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
        const dat = JSON.parse(resData).data;
        console.log("DATA : " + JSON.stringify(dat[0]));
        setData(dat);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Header category="Page" title="Transaction Master" />
      <div className="p-4 bg-white m-2 rounded-lg">
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
              field="batchId"
              width="100"
              textAlign="Center"
              headerText="Batch Id"
            />
            <ColumnDirective
              field="route"
              width="100"
              textAlign="Center"
              headerText="Route"
            />
            <ColumnDirective
              field="actualPath"
              width="100"
              textAlign="Center"
              headerText="Actual Path"
            />
            <ColumnDirective
              field="lastScanLocation"
              width="100"
              format="C2"
              textAlign="Center"
              headerText="Last Scan Location"
            />
            <ColumnDirective
              field="products"
              width="100"
              format="C2"
              textAlign="Center"
              headerText="Products"
            />
          </ColumnsDirective>
          <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
        </GridComponent>
      </div>
    </>
  );
};

export default ProductMaster;
