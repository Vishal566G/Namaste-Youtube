import { Provider } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <Body />,
//     children: [
//       {
//         path: "/",
//         element: <MainContainer />,
//       },
//       {
//         path: "watch",
//         element: <WatchPage />,
//       },
//     ],
//   },
// ]);

function App() {
  return (
    <Provider store={store}>
      <div className="no-scrollbar">
        <Head />
        <Body />

        {/**
         * Head
         * Body
         *  Sidebar
         *    MenuItems
         *  MainContainer
         *    ButtonList
         *    VideoContainer
         *      VideoCard
         */}
      </div>
    </Provider>
  );
}

export default App;
