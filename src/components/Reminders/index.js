import "./styles.css";
import React from "react";
import { useState, useEffect } from "react";
import reminderImage from "./Reminder.png"


export default function Reminders({ id}) {
  const [reminder, setReminder] = useState("");
  const URL = "http://localhost:3001/reminders";

  async function fetchReminder() {
    const response = await fetch(`${URL}/${id}`);
    const data = await response.json();
    console.log(data.payload[0]);
    setReminder({
      reminder: data.payload[0].reminder,
    });
    console.log(reminder.reminder);
  }

  useEffect(() => {
    fetchReminder();
  }, [id]);
   return <div id="reminder1"><img src={reminderImage} alt="title"/><p id="reminderText">{reminder.reminder}</p></div>;
  // return <div>Remember! {reminder.reminder}</div>;
}
