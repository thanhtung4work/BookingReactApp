
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { productInputs, userInputs } from "./formSource";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { userColumns } from "./datatablesource";

function App() {

  const ProtectedRoute = ({children}) => {
    const {user} = useContext(AuthContext);

    if(!user) {
      return <Navigate to="/login"/>;
    }

    return children;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login/>}/>
          <Route path="/">
            <Route index element={
              <ProtectedRoute>
                <Home/>
              </ProtectedRoute>
            }/>
            <Route path="users">
              <Route index element={
                <ProtectedRoute>
                  <List columns={userColumns}/>
                </ProtectedRoute>
              }/>
              <Route path=":userId" element={
                <ProtectedRoute>
                  <Single/>
                </ProtectedRoute>
              }/>
              <Route path="new" element={
                <ProtectedRoute>
                    <New inputs={userInputs} title="Thêm người dùng mới"/>
                </ProtectedRoute>
              }/>
            </Route>
            <Route path="items">
              <Route index element={
                <ProtectedRoute>
                  <List column={null}/>
                </ProtectedRoute>
              }/>
              <Route path=":itemId" element={
                <ProtectedRoute>
                    <Single/>
                </ProtectedRoute>
              }/>
              <Route path="new" element={
                <ProtectedRoute>
                  <New inputs={productInputs} title="Thêm sản phẩm mới"/>
                </ProtectedRoute>
              }/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
