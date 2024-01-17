import React from "react";
import { Card } from "../../../../../../../components/card/card";
import { ReactComponent as Wallet } from "../../../../../../../assets/svg/wallet.svg";
import { ReactComponent as EmptyWallet } from "../../../../../../../assets/svg/emptyWallet.svg";
import { ReactComponent as Chart } from "../../../../../../../assets/svg/chart.svg";
import { ReactComponent as Deposit } from "../../../../../../../assets/svg/deposit.svg";

export const CardsSection = () => {
  return (
    <div className="cards-section">
      <Card amount="143.222" description="Your bank balance">
        {" "}
        <Wallet className="Logo" />
      </Card>
      <Card amount="43.222" description="Your Tax">
        {" "}
        <Chart className="Logo" />
      </Card>
      <Card amount="24" description="Employees Working Today">
        <EmptyWallet className="Logo" />{" "}
      </Card>
      <Card amount="3.287" description="This week`s card spending">
        {" "}
        <Deposit className="Logo" />
      </Card>
    </div>
  );
};
