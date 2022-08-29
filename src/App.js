import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Component/Login/Login";
import { APIContextProvider } from "./ApiContext";
import Dashboard from "./Component/Dashboard/DashboardRoot/Dashboard";
import Branches from "./Component/Dashboard/AdminDashboard/Team/Branches/Branches";
import Merchants from "./Component/Dashboard/AdminDashboard/Team/Merchants/Merchants";
import Riders from "./Component/Dashboard/AdminDashboard/Team/Riders/Riders";
import WarehouseUsers from "./Component/Dashboard/AdminDashboard/Team/WarehouseUsers/WarehouseUsers";
import MerchantProfile from "./Component/Dashboard/MerchantDashboard/MerchantProfile";
import AddMerchantParcel from "./Component/Dashboard/MerchantDashboard/Parcel/AddMerchantParcel";
import District from "./Component/Dashboard/AdminDashboard/ApplicationSetting/District";
import ServiceCharge from "./Component/Dashboard/MerchantDashboard/ServiceCharge";
import CoverageArea from "./Component/Dashboard/MerchantDashboard/CoverageArea";
import OrderTracking from "./Component/Dashboard/MerchantDashboard/OrderTracking";
import DeliveryPaymentList from "./Component/Dashboard/MerchantDashboard/Account/DeliveryPaymentList";
import Area from "./Component/Dashboard/AdminDashboard/ApplicationSetting/Area";
import Unit from "./Component/Dashboard/AdminDashboard/TraditionalParcelSetting/Unit";
import Item from "./Component/Dashboard/AdminDashboard/TraditionalParcelSetting/Item";
import OfficeToOffice from "./Component/Dashboard/AdminDashboard/ManageOrderBooking/OfficeToOffice";
import OfficeToHome from "./Component/Dashboard/AdminDashboard/ManageOrderBooking/OfficeToHome";
import MerchantOrder from "./Component/Dashboard/AdminDashboard/ManageOrderBooking/MerchantOrder";
import WeightPackage from "./Component/Dashboard/AdminDashboard/ApplicationSetting/WeightPackage/WeightPackage";
import ServiceArea from "./Component/Dashboard/AdminDashboard/ApplicationSetting/ServiceAreaPricing/ServiceArea";
import Vehicles from "./Component/Dashboard/AdminDashboard/TraditionalParcelSetting/Vehicles/Vehicles";
import ItemCategory from "./Component/Dashboard/AdminDashboard/TraditionalParcelSetting/ItemCategory/ItemCategory";
import RidersParcelList from "./Component/Dashboard/RiderDashboard/Parcel/RidersParcelList";
import WarehouseParcelList from "./Component/Dashboard/WarehouseDashboard/Parcel/WarehouseParcelList";
import WarehouseProfile from "./Component/Dashboard/WarehouseDashboard/WarehouseProfile";
import BranchHome from "./Component/Dashboard/BranchDashboard/BranchHome";
import BranchProfile from "./Component/Dashboard/BranchDashboard/BranchProfile";
import BranchParcelList from "./Component/Dashboard/BranchDashboard/Parcel/BranchParcelList";
import RiderDashboardHome from "./Component/Dashboard/RiderDashboard/RiderDashboardHome";
import RidersProfile from "./Component/Dashboard/RiderDashboard/RidersProfile";
import MerchantDashboardHome from "./Component/Dashboard/MerchantDashboard/MerchantDashboardHome";
import WarehouseDashboardHome from "./Component/Dashboard/WarehouseDashboard/WarehouseDashboardHome";
import AdminParcelList from "./Component/Dashboard/AdminDashboard/Parcel/AdminParcelList";
import MerchantParcelList from "./Component/Dashboard/MerchantDashboard/Parcel/MerchantParcelList";
import BranchReceivedParcelList from "./Component/Dashboard/BranchDashboard/Parcel/BranchReceivedParcelList";
import AllUsers from "./Component/Dashboard/AdminDashboard/Setting/Allusers";
import Accounts from "./Component/Dashboard/AdminDashboard/Account/Accounts";
import RidersRecParcelList from "./Component/Dashboard/RiderDashboard/Parcel/RidersRecParcelList";
import RiderAccounts from "./Component/Dashboard/RiderDashboard/Account/RiderAccounts";
import BranchAccounts from "./Component/Dashboard/BranchDashboard/Account/BranchAccounts";
import Home from "./Component/Pages/Home/Home";
import Navigation from "./Component/Shared/Navigation/Navigation";
import Footer from "./Component/Shared/Footer/Footer";
import About from "./Component/Pages/About/About";
import Contact from "./Component/Pages/Contact/Contact";
import PrivacyPolicy from "./Component/Pages/PrivacyPolicy/PrivacyPolicy";
import TermsCondition from "./Component/Pages/TermsCondition/TermsCondition";
import ReturnRefundPolicy from "./Component/Pages/ReturnRefundPolicy/ReturnRefundPolicy";
import OurBlog from "./Component/HomeComponnents/OurBlog/OurBlog";
import Pricing from "./Component/Pages/Pricing/Pricing";
import OurServices from "./Component/Pages/OurServices/OurServices";
import Tracking from "./Component/Pages/Tracking/Tracking";
import Register from "./Component/Pages/Register/Register";
import NotFound from "./Component/Pages/Home/NotFound/NotFound";
// import DashboardHome from "./Component/Dashboard/DashboardHome/DashboardHome";
import RequireAuth from "./FirebaseAuth/RequireAuth";
import PageCoverageArea from "./Component/Pages/CoverageArea/PageCoverageArea";
import { useEffect, useState } from "react";

function App() {
	const [show, setShow] = useState(false);
	useEffect(() => {
		if (window.location?.pathname.includes("/dashboard" || "/home")) {
			setShow(false);
		}
	}, []);

	return (
		<div className='App'>
			<APIContextProvider>
				<BrowserRouter>
					{show && <Navigation />}
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/home' element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='/contact' element={<Contact />} />
						<Route path='/privacypolicy' element={<PrivacyPolicy />} />
						<Route path='/termscondition' element={<TermsCondition />} />
						<Route
							path='/returnrefundpolicy'
							element={<ReturnRefundPolicy />}
						/>
						<Route path='/blog' element={<OurBlog />} />
						<Route path='/pricing' element={<Pricing />} />
						<Route path='/service' element={<OurServices />} />
						<Route path='/tracking' element={<Tracking />} />
						<Route path='/covarage' element={<PageCoverageArea />} />
						<Route path='/tracking/:id' element={<Tracking />} />
						<Route path='/login' element={<Login />} />
						<Route path='/register' element={<Register />} />
						<Route path='*' element={<NotFound />} />
						<Route path='/login' element={<Login />} />
						<Route
							exact
							path='/dashboard'
							element={
								<RequireAuth>
									<Dashboard />
								</RequireAuth>
							}>
							{/* <Route path='/dashboard' element={<DashboardHome />} /> */}
							<Route path='/dashboard/branches' element={<Branches />} />
							<Route
								path='/dashboard/deliveryPaymentList'
								element={<Accounts />}
							/>
							<Route path='/dashboard/merchants' element={<Merchants />} />
							<Route path='/dashboard/riders' element={<Riders />} />
							<Route
								path='/dashboard/warehouseusers'
								element={<WarehouseUsers />}
							/>
							<Route
								path='/dashboard/parcelList'
								element={<AdminParcelList />}
							/>
							<Route
								path='/dashboard/officeToOffice'
								element={<OfficeToOffice />}
							/>
							<Route
								path='/dashboard/officeToHome'
								element={<OfficeToHome />}
							/>
							<Route
								path='/dashboard/createMerchantOrder'
								element={<MerchantOrder />}
							/>
							<Route
								path='/dashboard/weightPackage'
								element={<WeightPackage />}
							/>
							<Route path='/dashboard/serviceArea' element={<ServiceArea />} />
							<Route path='/dashboard/district' element={<District />} />
							<Route path='/dashboard/area' element={<Area />} />
							<Route path='/dashboard/vehicle' element={<Vehicles />} />
							<Route
								path='/dashboard/itemCategory'
								element={<ItemCategory />}
							/>
							<Route path='/dashboard/unit' element={<Unit />} />
							<Route path='/dashboard/item' element={<Item />} />
							<Route path='/dashboard/allUsers' element={<AllUsers />} />
							{/* Branch Dashboard Code Here */}
							<Route
								path='/dashboard/branchDashboard/home'
								element={<BranchHome />}
							/>
							<Route
								path='/dashboard/branchDashboard/profile'
								element={<BranchProfile />}
							/>
							<Route
								path='/dashboard/branchDashboard/accounts'
								element={<BranchAccounts />}
							/>
							<Route
								path='/dashboard/branchDashboard/parcelList'
								element={<BranchParcelList />}
							/>
							<Route
								path='/dashboard/branchDashboard/receivedParcelList'
								element={<BranchReceivedParcelList />}
							/>
							{/* Merchant Dashboard Code Here */}
							<Route
								path='/dashboard/merchantDashboard/home'
								element={<MerchantDashboardHome />}
							/>
							<Route
								path='/dashboard/merchantDashboard/profile'
								element={<MerchantProfile />}
							/>
							<Route
								path='/dashboard/merchantDashboard/AddParcel'
								element={<AddMerchantParcel />}
							/>
							<Route
								path='/dashboard/merchantDashboard/parcelList'
								element={<MerchantParcelList />}
							/>
							<Route
								path='/dashboard/merchantDashboard/deliveryPaymentList'
								element={<DeliveryPaymentList />}
							/>
							<Route
								path='/dashboard/merchantDashboard/orderTracking'
								element={<OrderTracking />}
							/>
							<Route
								path='/dashboard/merchantDashboard/coverageArea'
								element={<CoverageArea />}
							/>
							<Route
								path='/dashboard/merchantDashboard/serviceCharge'
								element={<ServiceCharge />}
							/>
							{/* Warehouse Dashboard Code Here */}
							<Route
								path='/dashboard/warehouseDashboard/home'
								element={<WarehouseDashboardHome />}
							/>
							<Route
								path='/dashboard/warehouseDashboard/profile'
								element={<WarehouseProfile />}
							/>
							<Route
								path='/dashboard/warehouseDashboard/parcelList'
								element={<WarehouseParcelList />}
							/>
							{/* Riders Dashboard Code Here */}
							<Route
								path='/dashboard/ridersDashboard/home'
								element={<RiderDashboardHome />}
							/>
							<Route
								path='/dashboard/ridersDashboard/profile'
								element={<RidersProfile />}
							/>
							<Route
								path='/dashboard/ridersDashboard/parcelList'
								element={<RidersParcelList />}
							/>
							<Route
								path='/dashboard/ridersDashboard/parceReclList'
								element={<RidersRecParcelList />}
							/>
							<Route
								path='/dashboard/ridersDashboard/accounts'
								element={<RiderAccounts />}
							/>
						</Route>
					</Routes>
					{show && <Footer />}
				</BrowserRouter>
			</APIContextProvider>
		</div>
	);
}

export default App;
