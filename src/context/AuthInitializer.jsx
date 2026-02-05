import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCredentials, clearCredentials } from "../store/slices/authSlice";
import { useMeQuery } from "../store/slices/authApiSlice";

const AuthInitializer = ({ children }) => {
    const dispatch = useDispatch();
    const { data, isSuccess, isError } = useMeQuery();

    useEffect(() => {
        if (isSuccess && data?.user) {
            dispatch(setCredentials({ user: data.user }));
        }
        if (isError) {
            dispatch(clearCredentials());
        }
    }, [isSuccess, isError, data, dispatch]);

    return children;
};

export default AuthInitializer;
