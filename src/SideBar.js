import React from 'react'
import './SideBar.css'
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useStatevalue } from './StateProvider';

const SideBar = () => {
    const [{user},dispatch] = useStatevalue();

  return (
    <div className="sidebar">
     <SidebarRow
      src = {user.photoURL}
      title={user.displayName}
      />
      <SidebarRow 
          Icon={LocalHospitalIcon}
          title="Covid-199"
      />
      <SidebarRow 
          Icon={EmojiFlagsIcon}
          title="Pages"
      />
      <SidebarRow 
          Icon={PeopleIcon}
          title="Friends"
      />
      <SidebarRow 
          Icon={ChatIcon}
          title="Messangers"
      />
      <SidebarRow 
          Icon={StorefrontIcon}
          title="MarketPlace"
      />
      <SidebarRow 
          Icon={VideoLibraryIcon}
          title="Videos"
      />
      <SidebarRow 
          Icon={ExpandMoreIcon}
          title="Market Place"
      />
    </div>
  )
}

export default SideBar
