import React from 'react';
import DisplayList from '../../../../components/DisplayList';
import { _products } from '../../../../components/_fakeData';

export default ManNewInScreen = ({ listData }) => {
  return (
    <DisplayList dataArray={_products} />
  )
}


