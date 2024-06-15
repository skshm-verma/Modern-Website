import React, {useContext} from 'react'
import flowLight from '../../../public/assets/flow-light.png'
import flowDark from "../../../public/assets/flow-dark.png";
import { ThemeBgContext } from "../ContextWrapper/ThemeContext";

const FurnitureFlow = () => {
  const { theme } = useContext(ThemeBgContext);
  return (
    <div>
      <img
        className="bg-center bg-no-repeat bg-cover h-full w-full"
        src={theme === "light" ? flowLight : flowDark}
        alt="furniture flow"
      ></img>
    </div>
  )
}

export default FurnitureFlow
