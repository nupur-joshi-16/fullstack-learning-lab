import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import CompanyData from "./components/CompanyData";

export default function App() {
  let name = "Nupur";
  let age = 42;
  let email = "demo@mail.com";

  const [firstName, setFirstName] = useState("Ram");

  function testName() {
    setFirstName("Shyam");
  }

  let message;

  function fruit() {
    console.warn("Function called!");
  }

  if (age === 42) {
    message = "You should learn AI tools";
  }

  return (
    <View>
      <Text style={{ fontSize: 20 }}>Good morning,</Text>
      <Text style={{ fontSize: 32 }}>Nupur</Text>
      <Text style={{ fontSize: 14, fontWeight: "700" }}>
        What are you doing today?
      </Text>

      <Button title="Button" />

      <Text>
        {name}, {age}, {email}
      </Text>

      <Text>{message}</Text>

      <UserData />
      <UserData />
      <UserData />
      <UserData />

      <CompanyData />

      <Button title="Button" onPress={fruit} color="#000" />

      <Text>{firstName}</Text>
      <Button title="Update Name" onPress={testName}></Button>
    </View>
  );
}

const UserData = () => {
  let country = "India";

  return (
    <View>
      <Text>Name : Nupur</Text>
      <Text>{country}</Text>
    </View>
  );
};
