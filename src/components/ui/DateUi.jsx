import React from 'react'

const DateUi = () => {
    const date = new Date();

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const dayName = daysOfWeek[date.getDay()];      // Day name (e.g., "Saturday")
    const dayOfMonth = date.getDate();              // Day of the month (e.g., 30)
    const monthName = months[date.getMonth()];      // Month name (e.g., "November")

    const formattedDate = `${dayName}, ${dayOfMonth} ${monthName}`;
    console.log(formattedDate);  // Output: "Saturday, 30 November"

    return (
        <>
            <p>{formattedDate}</p>
        </>
    )
}

export default DateUi