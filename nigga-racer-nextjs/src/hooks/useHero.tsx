"use client";
import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const useHero = () => {

    const [detailHero, setDetailHero] = useState();

    useEffect(() => {
        getHero();
    },[])
 
  const getHero = () => {
    GlobalApi.getHero().then(resp => {
      setDetailHero(resp.data.data[0]);
    });
  }

  return detailHero;
}

export default useHero