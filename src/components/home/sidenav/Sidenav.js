import React from 'react'
import SidenavTitle from './SidenavTitle';

const Sidenav = () => {
  return (
    <div className="px-7 py-4">
      <SidenavTitle title="H" subTitle="ablemos!" />
      <ul>
        <li className="sidenavLi">+54 11-6889-0924</li>
        <li className="sidenavLi">riostiziano6@gmail.com</li>
      </ul>
    </div>
  );
}

export default Sidenav