export const calendarData = {
  month: "October 2021",
  weekDays: [
    { day: "Mon", date: 25 },
    { day: "Tues", date: 26 },
    { day: "Wed", date: 27 },
    { day: "Thurs", date: 28 },
    { day: "Fri", date: 29 },
    { day: "Sat", date: 30 },
    { day: "Sun", date: 31 }
  ],
  timeSlots: [
    { time: "10:00", appointments: { 25: true, 27: true } },
    { time: "11:00", appointments: { 28: true, 29: true } },
    { time: "12:00", appointments: { 25: true, 28: true } },
  ],
  activityData: [
    { day: "Mon", values: [0.3, 0.7, 0.5] },
    { day: "Tues", values: [0.5, 0.2, 0.8] },
    { day: "Wed", values: [0.6, 0.4, 0.3] },
    { day: "Thurs", values: [0.8, 0.6, 0.2] },
    { day: "Fri", values: [0.4, 0.5, 0.7] },
    { day: "Sat", values: [0.3, 0.7, 0.6] },
    { day: "Sun", values: [0.5, 0.3, 0.4] }
  ]
};