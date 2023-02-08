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
  "https://honest-rabbits-juggle-103-86-0-98.loca.lt/api/data/product";

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
      <Header category="Page" title="Product Master" />
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
          className="rounded-lg"
        >
          <ColumnsDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <ColumnDirective type="checkbox" width="50" />
            <ColumnDirective
              field="productId"
              width="100"
              textAlign="Center"
              headerText="Product ID"
            />
            <ColumnDirective
              field="productName"
              width="100"
              textAlign="Center"
              headerText="Product Name"
            />
            <ColumnDirective
              field="productCategory"
              width="100"
              textAlign="Center"
              headerText="Product Category"
            />
            <ColumnDirective
              field="manufacturingDate"
              width="100"
              format="C2"
              textAlign="Center"
              headerText="Manufacturing Date"
            />
            <ColumnDirective
              field="manufacturingLocation"
              width="100"
              format="C2"
              textAlign="Center"
              headerText="Manufacturing Location"
            />
            <ColumnDirective
              field="mrp"
              width="100"
              format="C2"
              textAlign="Center"
              headerText="MRP (USD)"
            />
          </ColumnsDirective>
          <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
        </GridComponent>
      </div>
    </>
  );
};

export default ProductMaster;
