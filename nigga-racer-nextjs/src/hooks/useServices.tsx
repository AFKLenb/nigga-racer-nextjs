"use client";
import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const useServices = () => {

    const [servicesList, setServicesList] = useState([]);

    useEffect(() => {
        getServices();
    },[])

  const getServices = () => {
    GlobalApi.getServices().then(resp => {
        setServicesList(resp.data.data)
    });
  }

  return servicesList;

}

export default useServices;