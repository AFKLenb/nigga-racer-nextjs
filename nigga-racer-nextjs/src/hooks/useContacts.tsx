"use client";
import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const useContacts = () => {

    const [contactsList, setContactsList] = useState([]);

    useEffect(() => {
        getContacts();
    },[])

  const getContacts = () => {
    GlobalApi.getContacts().then(resp => {
        setContactsList(resp.data.data)
    });
  }

  return contactsList;

}

export default useContacts;