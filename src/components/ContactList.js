import React from "react";
import Contact from './Contact';

// An array of objects
const contacts = [
  {
    name: "Eugene Jordan",
    avatar: "https://randomuser.me/api/portraits/men/39.jpg",
    status: "online"
  },
  {
    name: "Denise Mendoza",
    avatar: "https://randomuser.me/api/portraits/women/56.jpg",
    status: "offline"
  },
  {
    name: "Edgar Reid",
    avatar: "https://randomuser.me/api/portraits/men/64.jpg",
    status: "online"
  },
  {
    name: "Jacqueline Gutierrez",
    avatar: "https://randomuser.me/api/portraits/women/40.jpg",
    status: "online"
  },
  {
    name: "Darrell Hamilton",
    avatar: "https://randomuser.me/api/portraits/men/58.jpg",
    status: "offline"
  },
];

const ContactList = () => (
  <div>
    {contacts.map(item => (
        <Contact key={item.name} name={item.name} avatar={item.avatar} status={item.status} />
    ))}
  </div>
);

export default ContactList;