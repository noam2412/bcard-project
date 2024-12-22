import React, { useState } from "react";
import AddProduct from "../components/AddProduct";


const AdminPage: React.FC = () => {
  const [refreshFlag, setRefreshFlag] = useState(false);

  const handleRefresh = () => {
    setRefreshFlag(!refreshFlag);
  };

  return (
    <div className="container mt-5">
      <h2>Admin Panel</h2>
      <AddProduct onHide={() => console.log("Modal Closed")} refresh={handleRefresh} />
    </div>
  );
};

export default AdminPage;
