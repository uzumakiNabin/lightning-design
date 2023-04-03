import { useState } from "react";
import {
  DataTable,
  DataTableColumn,
  DataTableCell,
  DataTableInteractiveLink,
} from "@salesforce/design-system-react";
import tomb from "../assets/icons/tomb.svg";
import fantom from "../assets/icons/fantom.svg";
import crypto from "../assets/icons/crypto_token.svg";

const CustomDataTableCell = ({ children, ...props }) => (
  <DataTableCell title={children} {...props}>
    <DataTableInteractiveLink>{children}</DataTableInteractiveLink>
  </DataTableCell>
);

const ProtocolTable = () => {
  const [sortColumn, setSortColumn] = useState("protocolColumn");
  const [sortColumnDirection, setSortColumnDirection] = useState({
    protocolColumn: "asc",
  });
  const [items, setItems] = useState([
    {
      id: "1",
      protocolColumn: (
        <div>
          <img src={tomb} />
          {"  "}Tomb
        </div>
      ),
      balance: "$1,254,345.34",
      tokens: (
        <div>
          <img src={tomb} />
          <img src={fantom} />
          <img src={tomb} />
          <img src={tomb} />
          <img src={tomb} />
        </div>
      ),
      rewards: "$4,345.34",
      lastTransaction: "10/16/2020 23:43:23",
    },
    {
      id: "2",
      protocolColumn: "Aave",
      balance: "$1,254,345.34",
      tokens: (
        <div>
          <img src={tomb} />
          <img src={tomb} />
          <img src={tomb} />
          <img src={tomb} />
          <img src={tomb} />
        </div>
      ),
      rewards: "$4,345.34",
      lastTransaction: "10/16/2020 23:43:23",
    },
    {
      id: "3",
      protocolColumn: "Balancer",
      balance: "$1,254,345.34",
      tokens: (
        <div>
          <img src={crypto} />
          <img src={tomb} />
          <img src={tomb} />
          <img src={tomb} />
          <img src={tomb} />
        </div>
      ),
      rewards: "$4,345.34",
      lastTransaction: "10/16/2020 23:43:23",
    },
  ]);
  const [selection, setSelection] = useState([]);

  const handleChanged = (event, data) => {
    setSelection(data.selection);
    console.log(event, data);
  };

  const handleSort = (sortColumn, ...rest) => {
    const sortProperty = sortColumn.property;
    const { sortDirection } = sortColumn;
    setSortColumn(sortProperty);
    setSortColumnDirection({ [sortProperty]: sortDirection });
    setItems(
      items.sort((a, b) => {
        let val = 0;

        if (a[sortProperty] > b[sortProperty]) {
          val = 1;
        }
        if (a[sortProperty] < b[sortProperty]) {
          val = -1;
        }

        if (sortDirection === "desc") {
          val *= -1;
        }

        return val;
      })
    );
  };

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <DataTable
        assistiveText={{
          actionsHeader: "actions",
          columnSort: "sort this column",
          columnSortedAscending: "asc",
          columnSortedDescending: "desc",
          selectAllRows: "Select all rows",
          selectRow: "Select this row",
        }}
        fixedHeader
        fixedLayout
        keyboardNavigation
        items={items}
        id="DataTableExample-FixedHeaders"
        onRowChange={handleChanged}
        onSort={handleSort}
        selection={selection}
        selectRows="checkbox"
      >
        <DataTableColumn
          isSorted={sortColumn === "protocolColumn"}
          label="Protocol"
          primaryColumn
          property="protocolColumn"
          sortable
          sortDirection={sortColumnDirection.protocolColumn}
        >
          <CustomDataTableCell />
        </DataTableColumn>
        <DataTableColumn label="Balance" property="balance" />
        <DataTableColumn label="Tokens" property="tokens" />
        <DataTableColumn label="Rewards" property="rewards" />
        <DataTableColumn
          label="Last Transaction Date"
          property="lastTransaction"
        />
      </DataTable>
    </div>
  );
};

export default ProtocolTable;
