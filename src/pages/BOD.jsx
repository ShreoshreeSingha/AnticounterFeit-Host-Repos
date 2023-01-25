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

import data from "../data/BODMasterData.json";
import Header from "../components/Header";

const ProductMaster = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ["Delete"];
  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="BOD Master" />
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
            field="Path ID"
            width="100"
            textAlign="Center"
            headerText="Path ID"
          />
          <ColumnDirective
            field="Starting Point"
            width="100"
            textAlign="Center"
            headerText="Starting Point"
          />
          <ColumnDirective
            field="Ending Point"
            width="100"
            textAlign="Center"
            headerText="Ending Point"
          />
          <ColumnDirective
            field="Transit Type"
            width="100"
            format="C2"
            textAlign="Center"
            headerText="Transit Type"
          />
          <ColumnDirective
            field="Avg Time Taken (Hrs)"
            width="100"
            format="C2"
            textAlign="Center"
            headerText="Avg Time Taken (Hrs)"
          />
          <ColumnDirective
            field="Distance (Kms)"
            width="100"
            format="C2"
            textAlign="Center"
            headerText="Distance (Kms)"
          />
        </ColumnsDirective>
        <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default ProductMaster;
