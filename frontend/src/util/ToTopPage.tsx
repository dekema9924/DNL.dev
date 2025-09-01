import { useEffect } from "react";
import { useLocation } from "react-router-dom";


export default function ToTopPage() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" }); // Optional smooth scroll

    }, [pathname]);

    return null;
}
