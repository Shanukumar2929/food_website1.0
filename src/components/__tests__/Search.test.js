
import "@testing-library/jest-dom";
import {render} from "@testing-library/react";
import Body from "../Body";
import { Provider } from "react-redux";
import store from "../../utils/store.js";
import {StaticRouter} from "react-router-dom/server";


// test("Search Results on Homepage",() => {
//    const body = render(<StaticRouter>
//     <Provider store={store}><Body/></Provider>
//     </StaticRouter>
//     );

//     const searchBtn = body.getByTestId("search-btn");
//     // const shimmer = body.getByTestId("shimmer");
//     // expect(shimmer.innerHTML).toBeInTheDocument();

//     // console.log(shimmer);
// });

 