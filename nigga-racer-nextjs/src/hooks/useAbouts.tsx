"use client";
import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const useSingleProject = () => {

    const [detailAbout, setDetailAbout] = useState();

    useEffect(() => {
      getAbout();
    },[])
 
  const getAbout = () => {
    GlobalApi.getAbout().then(resp => {
      setDetailAbout(resp.data.data[0]);
    });
  }

  return detailAbout;
}

export default useSingleProject