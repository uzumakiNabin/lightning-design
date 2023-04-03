import {
  Button,
  ButtonGroup,
  Dropdown,
  PageHeader,
  PageHeaderControl,
} from "@salesforce/design-system-react";

import accounts from "../assets/icons/accounts.svg";

const AccountDetails = () => {
  const actions = () => (
    <>
      <PageHeaderControl>
        <Button label="Add Tag" />
      </PageHeaderControl>
      <PageHeaderControl>
        <ButtonGroup variant="list" id="button-group-page-header-actions">
          <Button label="Edit" />
          <Button label="Delete" />
          <Dropdown
            align="right"
            assistiveText={{ icon: "More Options" }}
            iconCategory="utility"
            iconName="down"
            iconVariant="border-filled"
            id="dropdown-record-home-example"
            options={[
              { label: "Menu Item One", value: "A0" },
              { label: "Menu Item Two", value: "B0" },
              { label: "Menu Item Three", value: "C0" },
              { type: "divider" },
              { label: "Menu Item Four", value: "D0" },
            ]}
          />
        </ButtonGroup>
      </PageHeaderControl>
    </>
  );

  const details = [
    { label: "Total Balance", content: "$2,325,453.34" },
    { label: "Staked Balance", content: "$2,325,453.34" },
    { label: "Liquid Balance", content: "$2,325,453.34" },
    { label: "Total Balance", content: "$2,325,453.34" },
    { label: "24 Hour Change", content: "+325,453.34 (2.45%)" },
    { label: "Week Change", content: "+325,453.34 (2.45%)" },
    { label: "Month Change", content: "-325,453.34 (2.45%)" },
    { label: "YTD Change", content: "+325,453.34 (2.45%)" },
  ];

  return (
    <PageHeader
      details={details}
      icon={<img src={accounts} />}
      label="Accounts"
      onRenderActions={actions}
      title="Trading Wallet"
      variant="record-home"
      className="margin-around"
    />
  );
};

export default AccountDetails;
