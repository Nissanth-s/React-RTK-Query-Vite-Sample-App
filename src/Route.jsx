import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
  import UserList from "./components/UserList/UserList";
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<UserList />}></Route>
      </>
    )
  );
  
  export default router;
  