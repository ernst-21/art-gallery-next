import { ApiClient } from '../../../api';
import { RequestConfig } from '../../../types/axios';
import { IPayment } from '../../../interfaces';
import { UserId } from '../../../types/common.types';
import { handleResponse } from '../../../utils/response';

export const createPaymentFromSummary = (
  params: any,
  config?: RequestConfig
): Promise<IPayment> => {
  return ApiClient.post('/user/orders/create-payment', params, config).then(
    (data) => data.data
  );
};

export const searchUserPayments = (
  params: UserId,
  config?: RequestConfig
): Promise<any> => {
  return ApiClient.post('/user/orders/payments', params, config).then(
    (data) => data.data
  );
};

export const getUserPayments = (
  config?: RequestConfig
): Promise<IPayment[]> => {
  return handleResponse(ApiClient.get('/user/orders/payments/:_id'));
};
