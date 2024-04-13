'use client';
import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const useNavbars = () => {

    const [navbarsList, setNavbarsList] = useState([]);

    useEffect(() => {
        getNavbars();
    },[])

  const getNavbars = () => {
    GlobalApi.getNavbars().then(resp => {
        setNavbarsList(resp.data.data)
    });
  }

  return navbarsList;
}

export default useNavbars
