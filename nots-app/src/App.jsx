import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [notifications, setNotifications] = useState([
    {
      id: "1",
      author: {
        name: "Mark Webber",
        img: "./assets/images/mark-weber.webp",
        href: "#",
      },
      text: "reacted to your recent post",
      link: {
        text: "My first tournament today!",
        href: "#",
      },
      time: "1m ago",
      notificationRead: false,
    },

    {
      id: "2",
      author: {
        name: "Angela Gray",
        img: "./assets/images/angela-gray.webp",
        href: "#",
      },
      text: "followed you",
      time: "5m ago",
      notificationRead: false,
    },

    {
      id: "3",
      author: {
        name: "Jacob Thompson",
        img: "./assets/images/jacob-thompson.webp",
        href: "#",
      },
      text: "has joined your group",
      link: {
        text: "Chess Club",
        href: "#",
      },
      time: "1 day ago",
      notificationRead: false,
    },
    {
      id: "4",
      author: {
        name: "Rizky Hasanuddin",
        img: "./assets/images/rizky-hasanuddin.wepb",
        href: "#",
      },
      text: "sent you a private messge ",
      time: "5 days ago",
      privateMessage: "Hello, thanks for  setting up chess club.",
      notificationRead: false,
    },

    {
      id: "5",
      author: {
        name: "Kimberly Smith",
        img: "./assets/images/kimberly-smith.webp",
        href: "#",
      },
      text: "commented on your picture",
      image: {
        img: "Chess Club",
        href: "#",
      },
      time: "1 week ago",
      notificationRead: true,
    },

    {
      id: "6",
      author: {
        name: "Nathan Peterson",
        img: "./assets/images/nathan-peterson.webp",
        href: "#",
      },
      text: "reacted to your rexent post",
      link: {
        text: "5 end-game stratergies to increase your win rate",
        href: "#",
      },
      time: "2 weeks ago",
      notificationRead: true,
    },

    {
      id: "7",
      author: {
        name: "Anna Kim",
        img: "./assets/images/anna-kim.webp",
        href: "#",
      },
      text: "left the group",
      link: {
        text: "Chess Club",
        href: "#",
      },
      time: "2 weeks ago",
      notificationRead: true,
    },
  ]);

  return (
    <div className="App">
     <p> hello </p>
    </div>
  );
}

export default App;
