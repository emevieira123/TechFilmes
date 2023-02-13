import { RxHome } from 'react-icons/rx';
import { BiCameraMovie } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';
import { FaRegImage } from 'react-icons/fa';
import { URLS } from '../../../infra/URLS';
//
export const Menus = [
  {
    title: 'Dashboard',
    src: URLS.DASHBOARD,
    icon: <RxHome size={25} />
  },
  {
    title: 'Banner',
    src: URLS.BANNER,
    icon: <FaRegImage size={25} />
  },
  {
    title: 'Movies',
    src: URLS.MOVIES,
    icon: <BiCameraMovie size={25} />
  },
  {
    title: 'Users',
    src: URLS.USERS,
    icon: <FiUsers size={25} />
  },
  // {
  //   title: 'Setting',
  //   src: URLS.SETTING,
  //   icon: <FiSettings size={25} />
  // },
];
