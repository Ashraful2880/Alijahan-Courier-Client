import { BrowserRouter, Route, Routes } from "react-router-dom";
import { APIContextProvider } from "./ApiContext";
import "./App.css";
import Area from "./Component/Dashboard/ApplicationSettings/Area";
import District from "./Component/Dashboard/ApplicationSettings/District";
import Thana from "./Component/Dashboard/ApplicationSettings/Thana";
import Dashboard from "./Component/Dashboard/Dashboard";
import Branches from "./Component/Dashboard/Team/Branches/Branches";
import BranchUsers from "./Component/Dashboard/Team/BranchUsers/BranchUsers";
import Merchants from "./Component/Dashboard/Team/Merchants/Merchants";
import Riders from "./Component/Dashboard/Team/Riders/Riders";
import Warehouses from "./Component/Dashboard/Team/Warehouses/Warehouses";
import WarehouseUsers from "./Component/Dashboard/Team/WarehouseUsers/WarehouseUsers";
import Login from "./Component/Login/Login";

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
							<Route path='/district' element={<District />} />
							<Route path='/thana' element={<Thana />} />
							<Route path='/area' element={<Area />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</APIContextProvider>
		</div>
	);
}

export default App;
