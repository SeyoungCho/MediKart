/* eslint-disable no-unused-vars */
import axios from 'axios';

import {BASE_URL, API_PATH} from './constant';
import {doctorsData} from '../data/appContent';

export const fetchDoctors = async () => {
  const url = BASE_URL + API_PATH.DOCTORS;

  // const {data} = await axios.get(url);
  return doctorsData;
};

export const fetchDoctorById = async doctorId => {
  const url = BASE_URL + API_PATH.DOCTORS + '/' + doctorId;

  // const {data} = await axios.get(url);
  return doctorsData?.find(doctor => doctor.id === doctorId);
};
