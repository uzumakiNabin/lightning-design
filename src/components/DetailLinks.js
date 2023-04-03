import { Tabs, TabsPanel, Card } from "@salesforce/design-system-react";
import ProtocolTable from "./ProtocolTable";
import ProtocalSplitBar from "./ProtocalSplitBar";
import DefiQuarterPerf from "./DefiQuarterPerf";
import AssetsBreakdown from "./AssetsBreakdown";
import AssetsBreakdownPie from "./AssetsBreakdownPie";
import AssetPriceChange from "./AssetPriceChange";
import ChainSplit from "./ChainSplit";

const DetailLinks = () => {
  return (
    <Card heading="" className="margin-around">
      <Tabs
        id="tabs-example-default"
        className="detail-links"
        defaultSelectedIndex={1}
      >
        <TabsPanel label="Overview">{""}</TabsPanel>
        <TabsPanel label="Protocols">
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            <div style={{ width: "66%" }}>
              <ProtocolTable />
            </div>
            <div style={{ width: "33%" }}>
              <Card heading="Protocol Split">
                <ProtocalSplitBar />
              </Card>
            </div>
          </div>
        </TabsPanel>
        <TabsPanel label="Transaction History">{""}</TabsPanel>
        <TabsPanel label="Chain">{""}</TabsPanel>
        <TabsPanel label="Assets">
          <div>
            <div
              style={{
                width: "95%",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                marginBottom: "15px",
              }}
            >
              <div style={{ width: "67%" }}>
                <Card heading="Defi Quarterly Performance">
                  <DefiQuarterPerf />
                </Card>
              </div>
              <div style={{ width: "32%" }}>
                <Card heading="Asset Breakdown">
                  <AssetsBreakdown />
                </Card>
              </div>
            </div>
            <div
              style={{
                width: "95%",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <div style={{ width: "33%" }}>
                <Card heading="Asset Breakdown">
                  <AssetsBreakdownPie />
                </Card>
              </div>
              <div style={{ width: "33%" }}>
                <Card heading="Asset Price Change">
                  <AssetPriceChange />
                </Card>
              </div>
              <div style={{ width: "33%" }}>
                <Card heading="Chain Split">
                  <ChainSplit />
                </Card>
              </div>
            </div>
          </div>
        </TabsPanel>
        <TabsPanel label="Snapshots">{""}</TabsPanel>
        <TabsPanel label="More">{""}</TabsPanel>
      </Tabs>
    </Card>
  );
};

export default DetailLinks;

// tabs-panel-no-height
