import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { Avatar, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useStatevalue } from './StateProvider';

const Header = () => {
     const [{user},dispatch] = useStatevalue();

  return (
    <div className='header'>
     
    <div className="header_left">
     <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="" />
     <div className="header_input">
          <SearchIcon />
          <input placeholder='Search Facebook' type="text" />
     </div>
    </div>
     <div className="header_center">
          <div className="header_option header_option-active">
               <HomeIcon />
          </div>
          <div className="header_option">
               <FlagIcon />
          </div>
          <div className="header_option">
               <SubscriptionsIcon />
          </div>
          <div className="header_option">
               <StorefrontIcon />
          </div>
          <div className="header_option">
               <SupervisorAccountIcon />
          </div>
     </div>
     <div className="header_right">
          <div className="header_info">
               <Avatar src={user.photoURL}/>
               <h4>{user.displayName}</h4>
          </div>
          <IconButton>
               <AddIcon />
          </IconButton>
          <IconButton>
               <ForumIcon />
          </IconButton>
          <IconButton>
               <NotificationsActiveIcon />
          </IconButton>
          <IconButton>
               <ExpandMoreIcon />
          </IconButton>
     </div>
    </div>
  )
}

export default Header
