import { useRouter } from "next/router";
import { isTokenExpired } from "../util";
const WithAuth = (WrappedComponent: any) => {
    const Authenticator = (props: any) => {
        const Router = useRouter();

        // checks whether we are on client / browser or server.
        if (typeof window !== "undefined") {


            const accessToken = localStorage.getItem("accessToken");
            isTokenExpired(accessToken).then((tokenExpired) => {
                if (!accessToken || tokenExpired) {
                    console.log("no access")
                    Router.replace("/");
                    return null;
                }
            })

            // If there is no access token we redirect to "/" page.


            // If this is an accessToken we just render the component that was passed with all its props

            return <WrappedComponent {...props} />;
        }

        // If we are on server, return null
        return null;
    };
    return Authenticator;
};

export default WithAuth;