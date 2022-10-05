import React, { useEffect, useMemo } from 'react';
import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useMutation } from 'react-query';
import { useUser } from '../../../../hooks/security/useUser';
import { UserId } from '../../../../types/common.types';
import { searchUserOrders } from '../../services/user-api';

import { Chip } from '@mui/material';
import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { format } from '../../../../utils';
import { IOrder } from '../../../../interfaces';
import { NextMuiLink } from '../../../../components/ui/Link/NextMuiLink';

export const columns: GridColDef[] = [
  { field: 'id', headerName: 'No.', width: 90 },
  { field: '_id', headerName: 'Order ID', width: 287 },
  {
    field: 'numberOfItems',
    headerName: 'Number of Items',
    width: 150,
  },
  {
    field: 'total',
    headerName: 'Total',
    width: 200,
    valueGetter: (params: GridValueGetterParams) => format(params.row.total),
  },
  {
    field: 'isPaid',
    headerName: 'Paid',
    width: 250,
    renderCell: (params: GridValueGetterParams) => {
      return params.row.paid ? (
        <Chip color="success" label="Paid" variant="outlined" />
      ) : (
        <Chip color="error" label="Not paid" variant="outlined" />
      );
    },
  },
  {
    field: 'createdAt',
    headerName: 'Created',
    type: 'date',
    width: 250,
    valueGetter: (params: GridValueGetterParams) =>
      new Date(params.row.createdAt),
  },
  {
    field: 'order',
    headerName: 'Action',
    width: 200,
    sortable: false,
    renderCell: (params: GridValueGetterParams) => {
      return (
        <NextMuiLink
          underline="always"
          sx={{ color: 'blue' }}
          href={`/orders/${params.row.orderId}`}
        >
          See order
        </NextMuiLink>
      );
    },
  },
];

const OrdersTable = () => {
  const { user } = useUser();
  const {
    mutate: getOrdersMutation,
    data,
    isLoading,
    isError,
  } = useMutation('userOrders', (id: UserId) => searchUserOrders(id));

  const rows = useMemo(() => {
    if (data) {
      return data.map((item: IOrder, idx: number) => {
        return { ...item, id: idx + 1 };
      });
    }
  }, [data]);

  useEffect(() => {
    if (user) {
      getOrdersMutation({ userId: user._id });
    }
  }, [getOrdersMutation, user]);

  // TODO: create skeleton for table

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (!data || isError) {
    return <Typography>No data</Typography>;
  }

  return (
    <Box sx={{ height: '500px', mt: 2 }}>
      <DataGrid
        rows={rows!}
        columns={columns}
        pageSize={5}
        getRowId={(row) => row._id}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </Box>
  );
};

export default OrdersTable;
