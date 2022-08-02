import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Component/Dashboard/Dashboard";
import Branches from "./Component/Dashboard/Team/Branches/Branches";
import BranchUsers from "./Component/Dashboard/Team/BranchUsers/BranchUsers";
import Merchants from "./Component/Dashboard/Team/Merchants/Merchants";
import Riders from "./Component/Dashboard/Team/Riders/Riders";
import Warehouses from "./Component/Dashboard/Team/Warehouses/Warehouses";
import WarehouseUsers from "./Component/Dashboard/Team/WarehouseUsers/WarehouseUsers";
import Login from "./Component/Login/Login";
import DeliveryParcelList from "./Component/MerchantDashboard/Account/DeliveryParcelList";
import DeliveryPaymentList from "./Component/MerchantDashboard/Account/DeliveryPaymentList";
import MerchantDashboard from "./Component/MerchantDashboard/MerchantDashboard";
import AddParcel from "./Component/MerchantDashboard/Parcel/AddParcel";
import ParcelList from "./Component/MerchantDashboard/Parcel/ParcelList";
import Profile from "./Component/MerchantDashboard/Profile";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Dashboard />}>
            <Route path='/branches' element={<Branches />} />
            <Route path='/branchusers' element={<BranchUsers />} />
            <Route path='/merchants' element={<Merchants />} />
            <Route path='/riders' element={<Riders />} />
            <Route path='/warehouses' element={<Warehouses />} />
            <Route path='/warehouseusers' element={<WarehouseUsers />} />
            {/* Merchant Dashboard Code Here */}
            <Route path='/merchantDashboard' element={<MerchantDashboard />} />
            <Route path='/merchantDashboard/profile' element={<Profile />} />
            <Route path='/merchantDashboard/AddParcel' element={<AddParcel />} />
            <Route path='/merchantDashboard/parcelList' element={<ParcelList />} />
            <Route path='/merchantDashboard/deliveryPaymentList' element={<DeliveryPaymentList />} />
            <Route path='/merchantDashboard/deliveryParcelList' element={<DeliveryParcelList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
