import React from "react";
import { Card, CardHeader } from 'reactstrap';


export default function CharacterCard(props) {
  const {name} = props.person;
  return (
    <div>
      <Card>
        <CardHeader> Name: {name}</CardHeader>
      </Card>
    </div>
  );
}
