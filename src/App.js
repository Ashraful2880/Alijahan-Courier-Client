import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
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
import OrderTracking from "./Component/MerchantDashboard/OrderTracking";
import AddParcel from "./Component/MerchantDashboard/Parcel/AddParcel";
import ParcelList from "./Component/MerchantDashboard/Parcel/ParcelList";
import Profile from "./Component/MerchantDashboard/Profile";
import CoverageArea from "./Component/MerchantDashboard/CoverageArea";
import ServiceCharge from "./Component/MerchantDashboard/ServiceCharge";
import ServiceAreaSetting from "./Component/Dashboard/ApplicationSetting/ServiceAreaSetting";
import District from "./Component/Dashboard/ApplicationSetting/District";
import Thana from "./Component/Dashboard/ApplicationSetting/Thana";
import Area from "./Component/Dashboard/ApplicationSetting/Area";
import Unit from "./Component/Dashboard/TraditionalParcelSetting/Unit";
import Item from "./Component/Dashboard/TraditionalParcelSetting/Item";
import AdminUser from "./Component/Dashboard/Setting/AdminUser";
import Application from "./Component/Dashboard/Setting/Application";
import { APIContextProvider } from "./ApiContext";
import WeightPackage from "./Component/Dashboard/ApplicationSetting/WeightPackage/WeightPackage";
import Vehicles from "./Component/Dashboard/TraditionalParcelSetting/Vehicles/Vehicles";
import ItemCategory from "./Component/Dashboard/TraditionalParcelSetting/ItemCategory/ItemCategory";
import ServiceArea from "./Component/Dashboard/ApplicationSetting/ServiceAreaPricing/ServiceArea";
import MerchantOrder from "./Component/Dashboard/ManageOrderBooking/MerchantOrder";
import OfficeToOffice from "./Component/Dashboard/ManageOrderBooking/OfficeToOffice";
import OfficeToHome from "./Component/Dashboard/ManageOrderBooking/OfficeToHome";
import Dashboard from "./Component/Dashboard/DashboardRoot/Dashboard";
import BookingParcelList from "./Component/Dashboard/ManageOrderBooking/BookingParcelList";
import WarehouseDashboard from "./Component/WarehouseDashboard/WarehouseDashboardHome";
import WarehouseProfile from "./Component/WarehouseDashboard/WarehouseProfile";
import AddWarehouseParcel from "./Component/WarehouseDashboard/Parcel/AddWarehouseParcel";
import WarehouseParcelList from "./Component/WarehouseDashboard/Parcel/WarehouseParcelList";
import RidersParcelList from "./Component/RiderDashboard/Parcel/RidersParcelList";
import AddRidersParcel from "./Component/RiderDashboard/Parcel/AddRidersParcel";
import RidersProfile from "./Component/RiderDashboard/RidersProfile";
import RiderDashboardHome from "./Component/RiderDashboard/RiderDashboardHome";
import BranchProfile from "./Component/BranchDashboard/BranchProfile";
import AddBranchParcel from "./Component/BranchDashboard/Parcel/AddBranchParcel";
import BranchParcelList from "./Component/BranchDashboard/Parcel/BranchParcelList";
import BranchHome from "./Component/BranchDashboard/BranchHome";

function App() {
	return (
		<div className='App'>
			<APIContextProvider>
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
							<Route path='/parcelList' element={<ParcelList />} />
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
							{/* Merchant Dashboard Code Here */}
							<Route
								path='/merchantDashboard'
								element={<MerchantDashboard />}
							/>
							<Route path='/merchantDashboard/profile' element={<Profile />} />
							<Route
								path='/merchantDashboard/AddParcel'
								element={<AddParcel />}
							/>
							<Route
								path='/merchantDashboard/parcelList'
								element={<ParcelList />}
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
								element={<WarehouseDashboard />}
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
