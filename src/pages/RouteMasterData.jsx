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

import data from "../data/routeMasterData.json";

const ProductMaster = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ["Delete"];
  const editing = { allowDeleting: true, allowEditing: true };

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
            field="Route ID"
            width="200"
            textAlign="Center"
            headerText="Route ID"
          />
          <ColumnDirective
            field="Checkpoints"
            width="200"
            headerText="Checkpoints"
            textAlign="Center"
          />
          <ColumnDirective
            field="Total Distance (Kms)"
            width="70"
            textAlign="Center"
            headerText="Total Distance (Kms)"
          />
          <ColumnDirective
            field="Avg Time Taken (Hrs)"
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
