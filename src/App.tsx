import React from "react";
import "./App.css";
import PostContainer from "./components/PostContainer";
// import { useAppDispatch, useAppSelector } from "./hooks/redux";
// import { fetchUsers } from "./redux/reducers/ActionCreators";

function App() {
  // const dispath = useAppDispatch();
  // const { users, isLoading, error } = useAppSelector(
  //   (state) => state.userReducer
  // );

  // useEffect(() => {
  //   dispath(fetchUsers());
  // }, [dispath]);

  return (
    <div className="App">
      {/* {isLoading && <h1>Loading</h1>}
      {error && <h1>{error}</h1>}
      {JSON.stringify(users, null, 2)} */}
      <PostContainer />
    </div>
  );
}

export default App;
