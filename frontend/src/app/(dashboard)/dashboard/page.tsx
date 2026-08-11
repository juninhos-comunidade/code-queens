'use client'
import { useDashboard } from "./useDashboard";
const Dashboard = () => {

  const {user, full_name, nickname} = useDashboard()
  return (
    <div><h5>dashboard (area logada)</h5>  
      <h2>Bem vindo (a) {full_name}</h2> </div>
  );
  }

  export default Dashboard;