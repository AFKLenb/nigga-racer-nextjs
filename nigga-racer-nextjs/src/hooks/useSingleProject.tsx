"use client";
import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const useSingleProject = (id) => {

    const [detailProject, setDetailProject] = useState();

    useEffect(() => {
        getSingleProject();
    },[id])
 
  const getSingleProject = () => {
    GlobalApi.getSingleProject(id).then(resp => {
        setDetailProject(resp.data.data[0]);
    });
  }

  return detailProject;
}

export default useSingleProject