import { useState } from "react";
import "./App.css";

function App() {
  const [notifications, setNotifications] = useState([
    {
      id: "1",
      author: {
        name: "Mark Webber",
        src: "/images/avatar-mark-webber.webp",
        href: "#",
      },
      text: "reacted to your recent post",
      link: {
        text: "My first tournament today!",
        href: "#",
      },
      time: "1m ago",
      isUnread: true,
    },

    {
      id: "2",
      author: {
        name: "Angela Gray",
        src: "/images/avatar-angela-gray.webp",
        href: "#",
      },
      text: "followed you",
      time: "5m ago",
      isUnread: true,
    },

    {
      id: "3",
      author: {
        name: "Jacob Thompson",
        src: "/images/avatar-jacob-thompson.webp",
        href: "#",
      },
      text: "has joined your group",
      link: {
        text: "Chess Club",
        href: "#",
      },
      time: "1 day ago",
      isUnread: true,
    },
    {
      id: "4",
      author: {
        name: "Rizky Hasanuddin",
        src: "/images/avatar-rizky-hasanuddin.webp",
        href: "#",
      },
      text: "sent you a private messge ",
      time: "5 days ago",
      privateMessage: "Hello, thanks for  setting up chess club.",
      isUnread: true,
    },

    {
      id: "5",
      author: {
        name: "Kimberly Smith",
        src: "/images/avatar-kimberly-smith.webp",
        href: "#",
      },
      text: "commented on your picture",
      image: {
        src: "/images/image-chess.webp",
        alt: "Chess game",
        href: "#",
      },
      time: "1 week ago",
      isUnread: false,
    },

    {
      id: "6",
      author: {
        name: "Nathan Peterson",
        src: "/images/avatar-nathan-peterson.webp",
        href: "#",
      },
      text: "reacted to your rexent post",
      link: {
        text: "5 end-game stratergies to increase your win rate",
        href: "#",
      },
      time: "2 weeks ago",
      isUnread: false,
    },

    {
      id: "7",
      author: {
        name: "Anna Kim",
        src: "/images/avatar-anna-kim.webp",
        href: "#",
      },
      text: "left the group",
      link: {
        text: "Chess Club",
        href: "#",
      },
      time: "2 weeks ago",
      isUnread: false,
    },
  ]);

  return (
    <div className="App">

      <div className="container">

        <header>
          <div className="title">
            <h1>Notifications</h1>
            <span className="badge">
              {notifications.filter(n => n.isUread)}
              </span>
          </div>
        </header>

        {notifications &&
          notifications.map((n) => (

            <div key={n.id}>
              <img src={n.author.src} alt={n.author.name} />
              <div>

                <div className="post-text">
                  <a href={n.author.href}>{n.author.name}</a>
                  <p>{n.text}</p>
                  {n.link && <a href={n.link.href}>{n.link.text}</a>}
                  <span class={n.unread && "isUnread "}></span>
                </div>

                <p className="time"> {n.time}</p>

                {n.privateMessage && (
                  <p className="privateMessgae"> {n.privateMessage}</p>
                )}

              </div>
              {n.image && (
                <a href={n.image.href}>
                  <img src={n.image.src} alt={n.image.alt} />
                </a>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
