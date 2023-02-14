import { FaStar } from "react-icons/fa";

function Star({ filled, onClick }) {
  return (
    <FaStar 
     color={filled ? "purple" : "lightgray"} 
     onClick={onClick} />
  );
}
export default Star;