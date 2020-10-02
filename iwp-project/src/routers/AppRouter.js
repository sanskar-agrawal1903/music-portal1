import React from "react";
import {BrowserRouter , Switch , Route} from "react-router-dom";
import First from "../Pages/First";
import Second from "../Pages/Second";
import Third from "../Pages/Third";

const AppRouter = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={First} exact={true} />
                <Route path="/allPlaylist/:email" component={Second} />
                <Route path="/viewPlaylist/:email/:playlist_id" component={Third} />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter;