/* eslint-disable no-unused-vars */
import axios from 'axios';

import {BASE_URL, API_PATH} from './constant';
import {doctorsData} from '../data/appContent';

export const fetchDoctors = async () => {
  const url = BASE_URL + API_PATH.DOCTORS;

  // const {data} = await axios.get(url);
  return doctorsData;
};
