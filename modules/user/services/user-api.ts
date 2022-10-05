import { ApiClient } from '../../../api';
import { RequestConfig } from '../../../types/axios';
import { IOrder } from '../../../interfaces';
import { UserId } from '../../../types/common.types';

export const createOrderFromSummary = (
  params: IOrder,
  config?: RequestConfig
): Promise<IOrder> => {
  return ApiClient.post('/user/orders/create', params, config).then(
    (data) => data.data
  );
};

export const searchUserOrders = (
  params: UserId,
  config?: RequestConfig
): Promise<IOrder[]> => {
  return ApiClient.post('/user/orders', params, config).then(
    (data) => data.data
  );
};
