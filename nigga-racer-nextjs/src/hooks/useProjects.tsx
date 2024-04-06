"use client";
import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const useProjects = () => {

    const [projectsList, setProjectsList] = useState([]);

    useEffect(() => {
        getProjects();
    },[])

  const getProjects = () => {
    GlobalApi.getProjects().then(resp => {
        setProjectsList(resp.data.data)
    });
  }

  return projectsList;

}

export default useProjects;