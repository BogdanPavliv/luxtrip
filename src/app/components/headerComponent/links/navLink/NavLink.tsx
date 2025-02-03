"use client";

import React from 'react';

import Link from 'next/link';
import { usePathname } from "next/navigation";

type NavLinkProps = {
    item: { title: string; path: string; }; 
}

const NavLink = ({item}: NavLinkProps) => {
  const pathName = usePathname();
  return (
    <li className={`header__nav-item ${pathName === item.path && "active"}`}>
       <Link className={`header__navLink`} href={item.path}>
        {item.title}
       </Link>
    </li>
  )
}

export default NavLink;