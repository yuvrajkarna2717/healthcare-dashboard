import { lazy, Suspense } from "react";
import Layout from "./components/layout/Layout";
const AnatomySection = lazy(() =>
  import("./components/dashboard/AnatomySection")
);
// import AnatomySection from "./components/dashboard/AnatomySection";
import HealthStatusCards from "./components/dashboard/HealthStatusCards";
import CalendarView from "./components/dashboard/CalendarView";
import UpcomingSchedule from "./components/dashboard/UpcomingSchedule";
import ActivityFeed from "./components/dashboard/ActivityFeed";
import AppointmentCard from "./components/dashboard/AppointmentCard";
import { healthData, bodyParts } from "./data/healthData";
import { calendarData } from "./data/calendarData";
import {
  upcomingAppointments,
  todayAppointments,
} from "./data/appointmentData";
import "./styles/global.css";
import Header from "./components/layout/Header";
import { FaArrowRightLong } from "react-icons/fa6";

function App() {
  return (
    <Layout>
      <div className="dashboard">
        <div className="dashboard-content">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Header />
            <h1 className="dashboard-title">Dashboard</h1>
            <div className="dashboard-main">
              <Suspense fallback={<div>Loading Anatomy...</div>}>
                <AnatomySection bodyParts={bodyParts} />
              </Suspense>
              <HealthStatusCards healthData={healthData} />
            </div>
            <div>
              <button
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
                className="details-btn"
              >
                Details <FaArrowRightLong />
              </button>
              <ActivityFeed activityData={calendarData.activityData} />
            </div>
          </div>

          <div className="dashboard-sidebar">
            <CalendarView calendarData={calendarData} />
            <div className="appointment-cards">
              {todayAppointments.map((appointment) => (
                <AppointmentCard
                  key={appointment.id}
                  appointment={appointment}
                />
              ))}
            </div>
            <UpcomingSchedule schedules={upcomingAppointments} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
