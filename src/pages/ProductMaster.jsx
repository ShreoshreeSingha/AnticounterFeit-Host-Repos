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

import data from "../data/productMasterData.json";
import Header from "../components/Header";

const ProductMaster = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ["Delete"];
  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Product Master" />
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
            field="Product ID"
            width="100"
            textAlign="Center"
            headerText="Product ID"
          />
          <ColumnDirective
            field="Product Name"
            width="100"
            textAlign="Center"
            headerText="Product Name"
          />
          <ColumnDirective
            field="Product Category"
            width="100"
            textAlign="Center"
            headerText="Product Category"
          />
          <ColumnDirective
            field="Manufacturing Date"
            width="100"
            format="C2"
            textAlign="Center"
            headerText="Manufacturing Date"
          />
          <ColumnDirective
            field="Manufacturing Location"
            width="100"
            format="C2"
            textAlign="Center"
            headerText="Manufacturing Location"
          />
          <ColumnDirective
            field="MRP (USD)"
            width="100"
            format="C2"
            textAlign="Center"
            headerText="MRP (USD)"
          />
        </ColumnsDirective>
        <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default ProductMaster;
