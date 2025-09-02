import { useLocation } from "react-router-dom";
import { useEffect } from "react";


const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div>
      
      Oops! The page you're looking for doesn't exist.
      ERROR 404!!!!
            
    </div>
  );
};

export default NotFound;
