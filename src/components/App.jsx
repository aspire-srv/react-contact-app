import React from "react";
import Card from "./Card";
import contacts from "../contact";
import Avatar from "./Avatar";

function CreateCard(contacts) {
  return (
    <Card
      id={contacts.id}
      key={contacts.id}
      name={contacts.name}
      img={contacts.imgURL}
      tel={contacts.phone}
      email={contacts.email}
    />
  );
}

function App() {
  return (
    <div>
      <Avatar img="https://aspire-srv.github.io/Portfolio/assets/img/srv.png" />
      <h3>Sourabh</h3>
      <p>Developer || Engineer || Designer</p>
      <h1 className="heading"> My Contacts </h1> {contacts.map(CreateCard)}
    </div>
  );
}

export default App;
