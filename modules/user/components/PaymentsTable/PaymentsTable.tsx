import React, { useEffect, useMemo } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useMutation } from 'react-query';
import { useUser } from '../../../../hooks/security/useUser';
import { UserId } from '../../../../types/common.types';
import { searchUserPayments } from '../../services/user-api';

import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { format } from '../../../../utils';
import { IPayment } from '../../../../interfaces';
import { NextMuiLink } from '../../../../components/ui/Link/NextMuiLink';
import moment from 'moment';
import { renderSkeletonTable } from './constants/table';
import { Reload } from '../../../../components/ui/Reload';

export const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'No.',
    width: 90,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: '_id',
    headerName: 'Order ID',
    width: 387,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'numberOfItems',
    headerName: 'Number of Items',
    width: 150,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'total',
    headerName: 'Total',
    width: 200,
    align: 'center',
    headerAlign: 'center',
    valueGetter: (params: GridValueGetterParams) => format(params.row.total),
  },
  {
    field: 'createdAt',
    headerName: 'Created',
    type: 'date',
    width: 250,
    align: 'center',
    headerAlign: 'center',
    valueGetter: (params: GridValueGetterParams) =>
      moment(new Date(params.row.createdAt)).format('MMMM Do YY   (HH:mm:ss)'),
  },
  {
    field: 'payment',
    headerName: 'Action',
    width: 200,
    sortable: false,
    align: 'center',
    headerAlign: 'center',
    renderCell: (params: GridValueGetterParams) => {
      return (
        <NextMuiLink
          underline="always"
          sx={{ color: 'blue' }}
          href={`/auth/order/payments/${params.row._id}`}
        >
          See order
        </NextMuiLink>
      );
    },
  },
];

const PaymentsTable = () => {
  const { user } = useUser();
  const {
    mutate: getPaymentsMutation,
    data,
    isLoading,
    isError,
  } = useMutation('userOrders', (id: UserId) => searchUserPayments(id));

  const rows = useMemo(() => {
    return data?.map((item: IPayment, idx: number) => {
      return { ...item, id: idx + 1 };
    });
  }, [data]);

  const bigTotal = useMemo(() => {
    let price: number = 0;
    if (data) {
      data?.forEach((item: IPayment) => {
        price += item.total;
      });
    }
    return price;
  }, [data]);

  console.log({ rows });

  useEffect(() => {
    if (user) {
      getPaymentsMutation({ userId: user._id });
    }
  }, [getPaymentsMutation, user]);

  if (isLoading) {
    return renderSkeletonTable();
  }

  if (isError) {
    return <Reload />;
  }

  return (
    <Stack sx={{ height: '500px', mt: 2 }}>
      {rows && (
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          getRowId={(row) => row._id}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        />
      )}

      {bigTotal > 0 && (
        <Box display={'flex'} justifyContent={'flex-end'} mt={5}>
          <Typography sx={{ mr: 2, fontSize: 32 }} variant="h1">
            Big total:
          </Typography>
          <Typography sx={{ mr: 2, fontSize: 32 }} variant="h1">
            {format(bigTotal)}
          </Typography>
        </Box>
      )}
    </Stack>
  );
};

export default PaymentsTable;
