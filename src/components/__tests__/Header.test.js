import { render } from "@testing-library/react";
import Header from "../Header";
import {Provider} from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";


test("Logo should load on rendering header", () => {
// Load Header
const  header = render(
<StaticRouter>
<Provider store={store} ><Header />
</Provider>
</StaticRouter>
);


    // Check if logo is added
const logo = header.getAllByTestId("logo");

console.log(logo);

expect(logo[0].src).toBe("http://localhost/dummy.png");

});


test("Cart should have 0 items  on rendering header", () => {
    // Load Header
    const header = render(
        <StaticRouter>
            <Provider store={store} ><Header />
            </Provider>
        </StaticRouter>
    );


    // check the cart have 0 items initially
    const cart = header.getByTestId("cart");

    expect(cart.innerHTML).toBe("Cart - 0 items");

});

