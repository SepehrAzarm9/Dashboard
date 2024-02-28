import React from "react";
import "./recentEmails.css";
import { CardDetail } from "../../../../../../../../components/cardDetail/cardDetail";
import profile from "../../../../../../../../assets/images/profile/1.png";
import profiletwo from "../../../../../../../../assets/images/profile/2.png";
import profilethree from "../../../../../../../../assets/images/profile/3.png";
import profilefour from "../../../../../../../../assets/images/profile/4.png";
import profilefive from "../../../../../../../../assets/images/profile/5.png";

const RecentEmails = () => {
  const items = [
    {
      id: 1,
      src: profile,
      name: "Livia Stanto",
      description: "Meeting scheduled",
      date: "1:24 PM",
    },
    {
      id: 2,
      src: profiletwo,
      name: "Allison Lipshutz",
      description: "Update on marketing campaign",
      date: "12:14 PM",
    },
    {
      id: 3,
      src: profilethree,
      name: "Martin Stanton",
      description: "Designly 2.0 is about to launch",
      date: "Dec 19 at 8:01 PM",
    },
    {
      id: 4,
      src: profilefour,
      name: "Alfredo Botosh",
      description: "My friend Julie loves Dapper!",
      date: "Dec 19 at 6:11 PM",
    },
    {
      id: 5,
      src: profilefive,
      name: "Ann Philips",
      description: "My friend Julie loves Dapper!",
      date: "Dec 19 at 6:11 PM",
    },
  ];

  return (
    <div className="Emails-section">
      <div className="Emails-Title">Recent Emails</div>
      <div className="cards">
        {items.map((item) => (
          <CardDetail
            src={item.src}
            name={item.name}
            description={item.description}
            date={item.date}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentEmails;
