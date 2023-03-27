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

import { routedata } from "../data/ReRoute";
import Header from "../components/Header";

// const url = 'https://honest-rabbits-juggle-103-86-0-98.loca.lt/api/data/product';

const RouteUpdate = () => {
  // const selectionsettings = { persistSelection: false };
  // const toolbarOptions = ["Delete","Update"];
  const editing = {
    allowDeleting: true,
    allowEditing: true
  };
  let grid;
  const toolbar = ["ExcelExport"];
  const toolbarClick = args => {
    if (grid && args.item.id === "grid_excelexport") {
      grid.excelExport();
    }
  };
  const commands = [
  // { type: 'Edit', buttonOption: { cssClass: 'e-flat', iconCss: 'e-edit e-icons' } },
  {
    type: "Delete",
    buttonOption: {
      cssClass: "e-flat",
      iconCss: "e-delete e-icons"
    }
  }, {
    type: "Save",
    buttonOption: {
      cssClass: "e-flat",
      iconCss: "e-update e-icons"
    }
  }, {
    type: "Cancel",
    buttonOption: {
      cssClass: "e-flat",
      iconCss: "e-cancel-icon e-icons"
    }
  }];

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

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    category: "Page",
    title: "Re-Route"
  }), /*#__PURE__*/React.createElement("div", {
    className: "p-4 bg-white m-2 rounded-lg"
  }));
};
export default RouteUpdate;