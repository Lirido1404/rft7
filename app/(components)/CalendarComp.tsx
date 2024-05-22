"use client";
import React, { useEffect, useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { useDateStore } from "../(store)/store";
import { DayModifiers } from "react-day-picker";

function CalandarComp() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const vraidate = date?.toLocaleDateString();
  const setDateInStore = useDateStore((state) => state.setDate);

  useEffect(() => {
    if (vraidate) {
      setDateInStore(vraidate);
    }
  }, [vraidate, setDateInStore]);

  const newDate = useDateStore((state) => state.newDate);

  // Convertir les chaînes de dates en objets de date JavaScript
  const convertedNewDate = newDate?.map((event: any) => {
    const dateParts = event.date.split("/"); // Sépare la chaîne en parties en fonction des "/"
    const formattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`; // Reformule la date avec des "-"
    return {
      ...event,
      date: formattedDate,
    };
  });

  const datesSepareDesObjets = convertedNewDate?.map(
    (event: any) => event.date
  );

  const datesconverties = convertedNewDate?.map((event: any) => {
    const dateParts = event.date.split("-"); // Sépare la chaîne en parties en fonction des "-"
    const year = parseInt(dateParts[0]); // Année
    const month = parseInt(dateParts[1]) - 1; // Mois (soustrayez 1 car les mois dans JavaScript sont indexés à partir de 0)
    const day = parseInt(dateParts[2]); // Jour
    return new Date(year, month, day);
  });

  const bookedDays = convertedNewDate?.map((event: any) => event.date);

  const bookedStyle = { border: "2px solid #C91313", borderRadius: "6px" };

  // Définir le type de modifiers explicitement
  const modifiers: DayModifiers = { booked: datesconverties || [] };
  const modifiersStyles = { booked: bookedStyle };

  return (
    <div>
      <Calendar
        mode="single"
        numberOfMonths={2}
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow bg-white text-black"
        modifiers={modifiers}
        modifiersStyles={modifiersStyles}
      />
    </div>
  );
}

export default CalandarComp;
