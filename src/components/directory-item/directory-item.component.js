import { useNavigate } from "react-router-dom";
import {
  BackgroundImage,
  Body,
  DirectoryItemConatiner,
} from "./directory-item.styles.jsx";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl, route } = category;

  const navigate = useNavigate();

  const handleGoTo = () => {
    navigate(route);
  };

  return (
    <DirectoryItemConatiner onClick={handleGoTo}>
      <BackgroundImage imageUrl={imageUrl} />

      <Body>
        <h2>{title}</h2>
        <p>SHOP NOW</p>
      </Body>
    </DirectoryItemConatiner>
  );
};

export default DirectoryItem;
