import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { realEstateInputs, roomInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import { realEstateColumns, userColumns, roomColumns } from "./datatablesource";
import NewHotel from "./pages/newHotel/NewHotel";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  
  const ProtectedRoute = ({children}) => {
    const {user} = useContext(AuthContext);

    if(!user) {
      return <Navigate to="/login" />;
    }
    return children;
  }

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route 
              index 
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              } 
            />
            <Route path="user">
              <Route 
                index 
                element={
                  <ProtectedRoute>
                    <List columns={userColumns}/>
                  </ProtectedRoute>
                } 
              />
              <Route 
                path=":userId"
                element={
                <ProtectedRoute>
                  <Single />
                </ProtectedRoute>
                } 
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <New inputs={userInputs} title="Add New User" />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="realestate">
              <Route 
                index 
                element={
                  <ProtectedRoute>
                    <List columns={realEstateColumns}/>
                  </ProtectedRoute>
                } 
              />
              <Route 
                path=":realestateId" 
                element={
                  <ProtectedRoute><Single /></ProtectedRoute>
                } 
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute><NewHotel /></ProtectedRoute>
                }
              />
            </Route>
            <Route path="room">
              <Route 
                index 
                element={
                  <ProtectedRoute>
                    <List columns={roomColumns}/>
                  </ProtectedRoute>
                } 
              />
              <Route 
                path=":roomId" 
                element={
                  <ProtectedRoute><Single /></ProtectedRoute>
                } 
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute><New inputs={roomInputs} title="Add New Product" /></ProtectedRoute>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
