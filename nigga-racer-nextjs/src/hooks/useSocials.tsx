'use client';
import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const useSocials = () => {

    const [socialsList, setSocialsList] = useState([]);

    useEffect(() => {
        getSocials();
    },[])

  const getSocials = () => {
    GlobalApi.getSocials().then(resp => {
        setSocialsList(resp.data.data)
    });
  }

  return socialsList;
}

export default useSocials
