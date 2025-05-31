/* eslint-disable no-unused-vars */
import {BASE_URL, API_PATH} from './constant';
import {specialtiesData} from '../data/appContent';

export const fetchSpecialties = async () => {
  // const url = BASE_URL + API_PATH.SPECIALTIES;

  // const {data} = await axios.get(url);
  return specialtiesData;
};
