import React from "react";
// import {
//   GridComponent,
//   ColumnsDirective,
//   ColumnDirective,
//   CommandColumn,
//   ExcelExport,
//   Page,
//   Selection,
//   Inject,
//   Edit,
//   Toolbar,
//   Sort,
//   Filter,
// } from "@syncfusion/ej2-react-grids";

import Header from "../components/Header";
import { userData } from "../data/userData";
// const url = 'https://honest-rabbits-juggle-103-86-0-98.loca.lt/api/data/product';

const UserDetails = () => {
  // const selectionsettings = { persistSelection: false };
  // const toolbarOptions = ["Delete","Update"];
  const editing = { allowDeleting: true, allowEditing: true };
  let grid;
  const toolbar = ["ExcelExport"];
  const toolbarClick = (args) => {
    if (grid && args.item.id === "grid_excelexport") {
      grid.excelExport();
    }
  };

  const commands = [
    // { type: 'Edit', buttonOption: { cssClass: 'e-flat', iconCss: 'e-edit e-icons' } },
    {
      type: "Delete",
      buttonOption: { cssClass: "e-flat", iconCss: "e-delete e-icons" },
    },
    {
      type: "Save",
      buttonOption: { cssClass: "e-flat", iconCss: "e-update e-icons" },
    },
    {
      type: "Cancel",
      buttonOption: { cssClass: "e-flat", iconCss: "e-cancel-icon e-icons" },
    },
  ];

  //   React.useEffect(async () => {
  //     await fetch(url, {
  //       method: "GET",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((d) => {
  //         const { response } = d;
  //         const resData = JSON.stringify(response)
  //           .slice(1, -1)
  //           .replace(/\\/g, "");
  //         // console.log("response data : " + resData)
  //         const dat = JSON.parse(resData).data
  //         console.log("DATA : " + JSON.stringify(dat[0]))
  //         setData(dat);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, [])

  // const routeItems = [
  //   { rName: 'R-1', rId: '1' },
  //   { rName: 'R-2', rId: '2' },
  //   { rName: 'R-3', rId: '3' }
  //   ];
  //   const routeParams = {
  //       params: {
  //           actionComplete: () => false,
  //           allowFiltering: true,
  //           dataSource: new DataManager(routeItems),
  //           fields: { text: "rName", value: "rName" },
  //           query: new Query()
  //       }
  //   };

  return (
    <>
      <Header category="Page" title="User-Details" />
      <div className="p-4 bg-white m-2 rounded-lg">
        {/* <GridComponent
          id="grid"
          dataSource={userData}
          enableHover={false}
          allowPaging
          pageSettings={{ pageCount: 5 }}
          editSettings={editing}
          allowSorting
          toolbar={toolbar}
          toolbarClick={toolbarClick}
          ref={(g) => (grid = g)}
          allowExcelExport={true}
        >
          <ColumnsDirective>
            eslint-disable-next-line react/jsx-props-no-spreading
            {routeGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} allowEditing={item.field == 'RouteID' ? true : false}/> 
          ))}
            <ColumnDirective
              field="fname"
              width="100"
              textAlign="Center"
              headerText="First Name"
              allowEditing={false}
            />
            <ColumnDirective
              field="lname"
              width="100"
              textAlign="Center"
              headerText="Last Name"
              allowEditing={false}
            />
            <ColumnDirective
              field="email"
              width="100"
              textAlign="Center"
              headerText="Email"
              allowEditing={false}
            />
            <ColumnDirective
              field="phone"
              width="100"
              textAlign="Center"
              headerText="Phone No"
              allowEditing={false}
            />
            <ColumnDirective
              headerText="Commands"
              width="120"
              commands={commands}
            />
          </ColumnsDirective>
          <Inject services={[Edit, CommandColumn, ExcelExport, Toolbar]} />
        </GridComponent> */}
      </div>
    </>
  );
};

export default UserDetails;
