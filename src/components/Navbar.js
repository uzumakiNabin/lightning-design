import {
  GlobalNavigationBar,
  GlobalNavigationBarRegion,
  GlobalNavigationBarDropdown,
  GlobalNavigationBarLink,
  Button,
  Icon,
  AppLauncher,
  AppLauncherExpandableSection,
  AppLauncherTile,
} from "@salesforce/design-system-react";

const Navbar = () => {
  const dropdownCollection = [
    {
      label: "Menu Item One",
      value: "1",
      iconCategory: "utility",
      iconName: "table",
      href: "http://www.google.com",
    },
    {
      label: "Menu Item Two",
      value: "2",
      iconCategory: "utility",
      iconName: "kanban",
      href: "http://www.google.com",
    },
    {
      label: "Menu Item Three",
      value: "3",
      iconCategory: "utility",
      iconName: "side_list",
      href: "http://www.google.com",
    },
  ];
  return (
    <GlobalNavigationBar className="navbar-top-margin">
      <GlobalNavigationBarRegion region="primary">
        <AppLauncher
          id="app-launcher-trigger"
          triggerName="Hedge Fund Manager"
          onSearch={(event) => {
            console.log("Search term:", event.target.value);
          }}
          modalHeaderButton={<Button label="App Exchange" />}
        >
          <AppLauncherExpandableSection title="Tile Section">
            <AppLauncherTile
              title="Marketing Cloud"
              iconText="MC"
              description="Send emails, track emails, read emails! Emails!"
            />
            <AppLauncherTile
              title="Call Center"
              description="The key to call center and contact center is not to use too many words!"
              descriptionHeading="Call Center"
              iconText="CC"
            />
          </AppLauncherExpandableSection>
          <AppLauncherExpandableSection title="Small Tile Section">
            <AppLauncherTile
              title="Journey Builder"
              iconText="JB"
              size="small"
            />
            <AppLauncherTile
              title="Sales Cloud"
              iconNode={
                <Icon name="campaign" category="standard" size="large" />
              }
              size="small"
            />
          </AppLauncherExpandableSection>
        </AppLauncher>
      </GlobalNavigationBarRegion>
      <GlobalNavigationBarRegion region="secondary" navigation>
        <GlobalNavigationBarLink active label="Home" id="home-link" />
        <GlobalNavigationBarDropdown
          assistiveText={{ icon: "Open menu item submenu" }}
          id="defiDropdown"
          label="DeFi"
          options={dropdownCollection}
        />
        <GlobalNavigationBarDropdown
          assistiveText={{ icon: "Open menu item submenu" }}
          id="exchangesDropdown"
          label="Exchanges"
          options={dropdownCollection}
        />
        <GlobalNavigationBarLink label="Dashboards" />
        <GlobalNavigationBarLink label="Assets" />
        <GlobalNavigationBarLink label="Reports" />
        <GlobalNavigationBarLink label="Snapshots" />
        <GlobalNavigationBarLink label="Clients" />
      </GlobalNavigationBarRegion>
    </GlobalNavigationBar>
  );
};

export default Navbar;
