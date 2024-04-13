"use client";
import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const useSetting = () => {

    const [detailSetting, setDetailSetting] = useState();

    useEffect(() => {
      getSetting();
    },[])
 
  const getSetting = () => {
    GlobalApi.getSetting().then(resp => {
      console.log(resp.data.data)
      setDetailSetting(resp.data.data);
    });
  }

  return detailSetting;
}

export default useSetting