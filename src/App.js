import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Component/Login/Login";
import { APIContextProvider } from './ApiContext';
import Dashboard from "./Component/Dashboard/DashboardRoot/Dashboard";
import Branches from './Component/Dashboard/AdminDashboard/Team/Branches/Branches';
import BranchUsers from './Component/Dashboard/AdminDashboard/Team/BranchUsers/BranchUsers';
import Merchants from './Component/Dashboard/AdminDashboard/Team/Merchants/Merchants';
import Riders from './Component/Dashboard/AdminDashboard/Team/Riders/Riders';
import WarehouseUsers from './Component/Dashboard/AdminDashboard/Team/WarehouseUsers/WarehouseUsers';
import MerchantProfile from "./Component/Dashboard/MerchantDashboard/MerchantProfile";
import AddMerchantParcel from "./Component/Dashboard/MerchantDashboard/Parcel/AddMerchantParcel";
import ServiceAreaSetting from './Component/Dashboard/AdminDashboard/ApplicationSetting/ServiceAreaSetting';
import District from './Component/Dashboard/AdminDashboard/ApplicationSetting/District';
import Thana from './Component/Dashboard/AdminDashboard/ApplicationSetting/Thana';
import ServiceCharge from './Component/Dashboard/MerchantDashboard/ServiceCharge';
import CoverageArea from './Component/Dashboard/MerchantDashboard/CoverageArea';
import OrderTracking from './Component/Dashboard/MerchantDashboard/OrderTracking';
import DeliveryParcelList from './Component/Dashboard/MerchantDashboard/Account/DeliveryParcelList';
import DeliveryPaymentList from './Component/Dashboard/MerchantDashboard/Account/DeliveryPaymentList';
import Area from './Component/Dashboard/AdminDashboard/ApplicationSetting/Area';
import Unit from './Component/Dashboard/AdminDashboard/TraditionalParcelSetting/Unit';
import Item from './Component/Dashboard/AdminDashboard/TraditionalParcelSetting/Item';
import OfficeToOffice from './Component/Dashboard/AdminDashboard/ManageOrderBooking/OfficeToOffice';
import OfficeToHome from './Component/Dashboard/AdminDashboard/ManageOrderBooking/OfficeToHome';
import MerchantOrder from './Component/Dashboard/AdminDashboard/ManageOrderBooking/MerchantOrder';
import WeightPackage from './Component/Dashboard/AdminDashboard/ApplicationSetting/WeightPackage/WeightPackage';
import ServiceArea from './Component/Dashboard/AdminDashboard/ApplicationSetting/ServiceAreaPricing/ServiceArea';
import BookingParcelList from './Component/Dashboard/AdminDashboard/ManageOrderBooking/BookingParcelList';
import Vehicles from './Component/Dashboard/AdminDashboard/TraditionalParcelSetting/Vehicles/Vehicles';
import ItemCategory from './Component/Dashboard/AdminDashboard/TraditionalParcelSetting/ItemCategory/ItemCategory';
import AdminUser from './Component/Dashboard/AdminDashboard/Setting/AdminUser';
import Application from './Component/Dashboard/AdminDashboard/Setting/Application';
import RidersParcelList from './Component/Dashboard/RiderDashboard/Parcel/RidersParcelList';
import AddRidersParcel from './Component/Dashboard/RiderDashboard/Parcel/AddRidersParcel';
import WarehouseParcelList from './Component/Dashboard/WarehouseDashboard/Parcel/WarehouseParcelList';
import AddWarehouseParcel from './Component/Dashboard/WarehouseDashboard/Parcel/AddWarehouseParcel';
import WarehouseProfile from './Component/Dashboard/WarehouseDashboard/WarehouseProfile';
import BranchHome from './Component/Dashboard/BranchDashboard/BranchHome';
import BranchProfile from './Component/Dashboard/BranchDashboard/BranchProfile';
import AddBranchParcel from './Component/Dashboard/BranchDashboard/Parcel/AddBranchParcel';
import BranchParcelList from './Component/Dashboard/BranchDashboard/Parcel/BranchParcelList';
import RiderDashboardHome from './Component/Dashboard/RiderDashboard/RiderDashboardHome';
import RidersProfile from './Component/Dashboard/RiderDashboard/RidersProfile';
import MerchantDashboardHome from "./Component/Dashboard/MerchantDashboard/MerchantDashboardHome";
import WarehouseDashboardHome from "./Component/Dashboard/WarehouseDashboard/WarehouseDashboardHome";
import AdminParcelList from "./Component/Dashboard/AdminDashboard/Parcel/AdminParcelList";
import MerchantParcelList from "./Component/Dashboard/MerchantDashboard/Parcel/MerchantParcelList";
import BranchReceivedParcelList from './Component/Dashboard/BranchDashboard/Parcel/BranchReceivedParcelList';
import AdminDeliveryPaymentList from './Component/Dashboard/AdminDashboard/Account/AdminDeliveryPaymentList';

function App() {
	return (
		<div className='App'>
			<APIContextProvider>
				<BrowserRouter>
					<Routes>
						<Route path='/login' element={<Login />} />
						<Route path='/' element={<Dashboard />}>
							<Route path='/branches' element={<Branches />} />
							<Route path='/deliveryPaymentList' element={<AdminDeliveryPaymentList />} />
							<Route path='/branchusers' element={<BranchUsers />} />
							<Route path='/merchants' element={<Merchants />} />
							<Route path='/riders' element={<Riders />} />
							<Route path='/warehouseusers' element={<WarehouseUsers />} />
							<Route path='/parcelList' element={<AdminParcelList />} />
							<Route path='/officeToOffice' element={<OfficeToOffice />} />
							<Route path='/officeToHome' element={<OfficeToHome />} />
							<Route path='/createMerchantOrder' element={<MerchantOrder />} />
							<Route path='/weightPackage' element={<WeightPackage />} />
							<Route path='/serviceArea' element={<ServiceArea />} />
							<Route
								path='/serviceAreaSetting'
								element={<ServiceAreaSetting />}
							/>
							<Route path='/district' element={<District />} />
							<Route path='/upazila' element={<Thana />} />
							<Route path='/area' element={<Area />} />
							<Route
								path='/bookingParcelList'
								element={<BookingParcelList />}
							/>
							<Route path='/vehicle' element={<Vehicles />} />
							<Route path='/itemCategory' element={<ItemCategory />} />
							<Route path='/unit' element={<Unit />} />
							<Route path='/item' element={<Item />} />
							<Route path='/adminUser' element={<AdminUser />} />
							<Route path='/application' element={<Application />} />
							{/* Branch Dashboard Code Here */}
							<Route
								path='/branchDashboard'
								element={<BranchHome />}
							/>
							<Route path='/branchDashboard/profile' element={<BranchProfile />} />
							<Route
								path='/branchDashboard/AddParcel'
								element={<AddBranchParcel />}
							/>
							<Route
								path='/branchDashboard/parcelList'
								element={<BranchParcelList />}
							/>
							<Route
								path='/branchDashboard/receivedParcelList'
								element={<BranchReceivedParcelList />}
							/>
							{/* Merchant Dashboard Code Here */}
							<Route
								path='/merchantDashboard'
								element={<MerchantDashboardHome />}
							/>
							<Route path='/merchantDashboard/profile' element={<MerchantProfile />} />
							<Route
								path='/merchantDashboard/AddParcel'
								element={<AddMerchantParcel />}
							/>
							<Route
								path='/merchantDashboard/parcelList'
								element={<MerchantParcelList />}
							/>
							<Route
								path='/merchantDashboard/deliveryPaymentList'
								element={<DeliveryPaymentList />}
							/>
							<Route
								path='/merchantDashboard/deliveryParcelList'
								element={<DeliveryParcelList />}
							/>
							<Route
								path='/merchantDashboard/orderTracking'
								element={<OrderTracking />}
							/>
							<Route
								path='/merchantDashboard/coverageArea'
								element={<CoverageArea />}
							/>
							<Route
								path='/merchantDashboard/serviceCharge'
								element={<ServiceCharge />}
							/>
							{/* Warehouse Dashboard Code Here */}
							<Route
								path='/warehouseDashboard'
								element={<WarehouseDashboardHome />}
							/>
							<Route path='/warehouseDashboard/profile' element={<WarehouseProfile />} />
							<Route
								path='/warehouseDashboard/AddParcel'
								element={<AddWarehouseParcel />}
							/>
							<Route
								path='/warehouseDashboard/parcelList'
								element={<WarehouseParcelList />}
							/>
							{/* Riders Dashboard Code Here */}
							<Route
								path='/ridersDashboard'
								element={<RiderDashboardHome />}
							/>
							<Route path='/ridersDashboard/profile' element={<RidersProfile />} />
							<Route
								path='/ridersDashboard/AddParcel'
								element={<AddRidersParcel />}
							/>
							<Route
								path='/ridersDashboard/parcelList'
								element={<RidersParcelList />}
							/>
						</Route>
					</Routes>
				</BrowserRouter>
			</APIContextProvider>
		</div>
	);
}

export default App;
