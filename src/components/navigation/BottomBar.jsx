import { IconsBar } from "../../mock/MockData";
import IconButtom from "./IconButtom";


const BottomBar = () => {
  return (
    <div className='bg-black w-full  h-20 fixed bottom-0 hidden max-sm:flex max-sm:pb-6 max-sm:justify-between'>
      {IconsBar.map(({ icon, link }, index) => (
        <IconButtom key={index} icon={icon} link={link} />
      ))}
    </div>
  )
}

export default BottomBar;
