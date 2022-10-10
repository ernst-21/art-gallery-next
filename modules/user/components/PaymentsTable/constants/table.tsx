import React from 'react';
import { GridColDef, GridValueGetterParams, DataGrid } from '@mui/x-data-grid';
import { format } from '../../../../../utils';
import { Skeleton, Stack } from '@mui/material';

export const skeletonColumns: GridColDef[] = [
  {
    field: 'xId',
    headerName: 'No.',
    width: 90,
    align: 'center',
    headerAlign: 'center',
    renderCell: (params: GridValueGetterParams) => {
      return <Skeleton variant="rectangular" width={'80%'} height={35} />;
    },
  },
  {
    field: 'x_id',
    headerName: 'Order ID',
    width: 387,
    align: 'center',
    headerAlign: 'center',
    renderCell: (params: GridValueGetterParams) => {
      return <Skeleton variant="rectangular" width={'80%'} height={35} />;
    },
  },
  {
    field: 'xNumberOfItems',
    headerName: 'Number of Items',
    width: 150,
    align: 'center',
    headerAlign: 'center',
    renderCell: (params: GridValueGetterParams) => {
      return <Skeleton variant="rectangular" width={'80%'} height={35} />;
    },
  },
  {
    field: 'xTotal',
    headerName: 'Total',
    width: 200,
    align: 'center',
    headerAlign: 'center',
    valueGetter: (params: GridValueGetterParams) => format(params.row.total),
    renderCell: (params: GridValueGetterParams) => {
      return <Skeleton variant="rectangular" width={'80%'} height={35} />;
    },
  },
  {
    field: 'xCreatedAt',
    headerName: 'Created',
    type: 'date',
    width: 250,
    align: 'center',
    headerAlign: 'center',
    renderCell: (params: GridValueGetterParams) => {
      return <Skeleton variant="rectangular" width={'80%'} height={35} />;
    },
  },
  {
    field: 'payment',
    headerName: 'Action',
    width: 200,
    sortable: false,
    align: 'center',
    headerAlign: 'center',
    renderCell: (params: GridValueGetterParams) => {
      return <Skeleton variant="rectangular" width={'80%'} height={35} />;
    },
  },
];

export const skeletonRows = [
  {
    x_id: '1',
    xNumberOfItems: 2,
    xTotal: 5200,
    xCreatedAt: '2022-10-09T00:17:14.410Z',
    xId: 1,
  },
  {
    x_id: '2',
    xNumberOfItems: 2,
    xTotal: 5200,
    xCreatedAt: '2022-10-09T00:17:14.410Z',
    xId: 2,
  },
  {
    x_id: '3',
    xNumberOfItems: 2,
    xTotal: 5200,
    xCreatedAt: '2022-10-09T00:17:14.410Z',
    xId: 3,
  },
  {
    x_id: '4',
    xNumberOfItems: 2,
    xTotal: 5200,
    xCreatedAt: '2022-10-09T00:17:14.410Z',
    xId: 4,
  },
  {
    x_id: '5',
    xNumberOfItems: 2,
    xTotal: 5200,
    xCreatedAt: '2022-10-09T00:17:14.410Z',
    xId: 5,
  },
];

export const renderSkeletonTable = () => {
  return (
    <Stack sx={{ height: '500px', mt: 2 }}>
      <DataGrid
        rows={skeletonRows}
        columns={skeletonColumns}
        pageSize={5}
        getRowId={(row) => row.x_id}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </Stack>
  );
};
