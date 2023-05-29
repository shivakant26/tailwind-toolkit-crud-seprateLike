import { Route, Routes } from "react-router-dom";
import { allRoute } from "../constant/routeContent";

const Routers = () => {
  return (
    <>
      <Routes>
        {allRoute?.map((routeItem, index) => {
          return (
            <Route
              key={index}
              path={routeItem.path}
              element={routeItem.component}
            />
          );
        })}
      </Routes>
    </>
  );
};
export default Routers;
