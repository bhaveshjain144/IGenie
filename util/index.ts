import { time } from "console";

export const getDateFromTimestamp = (timestamp: any) => {
    const date = new Date(timestamp);
    return +date.getFullYear() +
        "-" + ('0' + (date.getMonth() + 1)).slice(-2) +
        "-" + ('0' + date.getDate()).slice(-2)
}

export const formateDate = (date: any) => {
    return +date.getFullYear() +
        "-" + ('0' + (date.getMonth() + 1)).slice(-2) +
        "-" + ('0' + date.getDate()).slice(-2)

}
export const getFormatedDate = () => {
    const date = new Date()
    return +date.getFullYear() +
        "-" + ('0' + (date.getMonth() + 1)).slice(-2) +
        "-" + ('0' + date.getDate()).slice(-2)

}
export const getJWTPayload = async (jwt: any) => {
    const base64Url = jwt.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
        atob(base64)
            .split("")
            .map(function (c) {
                return `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`;
            })
            .join("")
    );

    return JSON.parse(jsonPayload);
}

export const isTokenExpired = async (jwt: any) => {
    const tokenPayload = await getJWTPayload(jwt)
    if (Date.now() >= tokenPayload.exp * 1000) {
        return true;
    } else {
        return false;
    }
}