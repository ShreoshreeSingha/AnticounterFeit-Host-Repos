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

import data from "../data/transactionMasterData.json";
import Header from "../components/Header";

const ProductMaster = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ["Delete"];
  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Transaction Master" />
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
            field="Batch ID"
            width="100"
            textAlign="Center"
            headerText="Batch ID"
          />
          <ColumnDirective
            field="Route"
            width="100"
            textAlign="Center"
            headerText="Route"
          />
          <ColumnDirective
            field="Actual Path"
            width="100"
            textAlign="Center"
            headerText="Actual Path"
          />
          <ColumnDirective
            field="Last Scan Location"
            width="100"
            format="C2"
            textAlign="Center"
            headerText="Last Scan Location"
          />
          <ColumnDirective
            field="Products"
            width="100"
            format="C2"
            textAlign="Center"
            headerText="Products"
          />
        </ColumnsDirective>
        <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default ProductMaster;
