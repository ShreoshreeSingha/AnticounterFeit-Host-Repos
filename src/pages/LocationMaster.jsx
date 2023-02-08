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
  "https://honest-rabbits-juggle-103-86-0-98.loca.lt/api/data/location";

const LocationMaster = () => {
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
      <Header category="Page" title="Location Master" />
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
              field="locationId"
              width="100"
              textAlign="Center"
              headerText="Location ID"
            />
            <ColumnDirective
              field="locationName"
              width="100"
              textAlign="Center"
              headerText="Location Name"
            />
            <ColumnDirective
              field="locationType"
              width="100"
              textAlign="Center"
              headerText="Location Type"
            />
            <ColumnDirective
              field="streetAddress"
              width="100"
              format="C2"
              textAlign="Center"
              headerText="Street Address"
            />
            <ColumnDirective
              field="city"
              width="100"
              format="C2"
              textAlign="Center"
              headerText="City"
            />
            <ColumnDirective
              field="state"
              width="100"
              format="C2"
              textAlign="Center"
              headerText="State"
            />
            <ColumnDirective
              field="country"
              width="100"
              format="C2"
              textAlign="Center"
              headerText="Country"
            />
            <ColumnDirective
              field="storageCapacity"
              width="100"
              format="C2"
              textAlign="Center"
              headerText="Storage Capacity"
            />
            <ColumnDirective
              field="status"
              width="100"
              format="C2"
              textAlign="Center"
              headerText="Status"
            />
          </ColumnsDirective>
          <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
        </GridComponent>
      </div>
    </>
  );
};

export default LocationMaster;
