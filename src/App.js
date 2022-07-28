import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Component/Dashboard/Dashboard';
import Login from './Component/Login/Login';
import ResetPassword from './Component/ResetPassword/ResetPassword';
import Signup from './Component/Signup/Signup';
import Branch from './Component/Dashboard/Team/Branch';
import BranchUser from './Component/Dashboard/Team/BranchUser';
import Merchant from './Component/Dashboard/Team/Merchant';
import Warehouse from './Component/Dashboard/Team/Warehouse';
import WarehouseUser from './Component/Dashboard/Team/WarehouseUser';
import Rider from './Component/Dashboard/Team/Rider';
import ParcelList from './Component/Dashboard/Parcel/ParcelList';
import WeightPackage from './Component/Dashboard/ApplicationSetting/WeightPackage';
import ServiceArea from './Component/Dashboard/ApplicationSetting/ServiceArea';
import ServiceAreaSetting from './Component/Dashboard/ApplicationSetting/ServiceAreaSetting';
import District from './Component/Dashboard/ApplicationSetting/District';
import Upazila from './Component/Dashboard/ApplicationSetting/Upazila';
import Area from './Component/Dashboard/ApplicationSetting/Area';
import BookingParcelList from './Component/Dashboard/TraditionalParcelBooking/BookingParcelList';
import Vehicle from './Component/Dashboard/TraditionalParcelSetting/Vehicle';
import Item from './Component/Dashboard/TraditionalParcelSetting/Item';
import Unit from './Component/Dashboard/TraditionalParcelSetting/Unit';
import ItemCategory from './Component/Dashboard/TraditionalParcelSetting/ItemCategory';
import AdminUser from './Component/Dashboard/Setting/AdminUser';
import Application from './Component/Dashboard/Setting/Application';
import DashboardHome from './Component/Dashboard/DashboardHome/DashboardHome';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/register' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/resetPassword' element={<ResetPassword />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="" element={<DashboardHome />} />
            <Route path="branch" element={<Branch />} />
            <Route path="branchUser" element={<BranchUser />} />
            <Route path="merchant" element={<Merchant />} />
            <Route path="rider" element={<Rider />} />
            <Route path="warehouse" element={<Warehouse />} />
            <Route path="warehouseUser" element={<WarehouseUser />} />
            <Route path="parcelList" element={<ParcelList />} />
            <Route path="weightPackage" element={<WeightPackage />} />
            <Route path="serviceArea" element={<ServiceArea />} />
            <Route path="serviceAreaSetting" element={<ServiceAreaSetting />} />
            <Route path="district" element={<District />} />
            <Route path="upazila" element={<Upazila />} />
            <Route path="area" element={<Area />} />
            <Route path="bookingParcelList" element={<BookingParcelList />} />
            <Route path="vehicle" element={<Vehicle />} />
            <Route path="itemCategory" element={<ItemCategory />} />
            <Route path="unit" element={<Unit />} />
            <Route path="item" element={<Item />} />
            <Route path="adminUser" element={<AdminUser />} />
            <Route path="application" element={<Application />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
