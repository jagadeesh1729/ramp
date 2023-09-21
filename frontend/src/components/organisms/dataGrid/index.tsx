/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Box, styled } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridInputRowSelectionModel,
} from "@mui/x-data-grid";
import theme from '../../../theme';

interface Props{
    columns:GridColDef[] ,
    rows:any[],
    checkbox:boolean,
    autoHeight?:boolean,
    selectedRows?: GridInputRowSelectionModel;
    setSelectedRows?: any;
}

const MuiDataGrid = styled(DataGrid)(({
  "&.MuiDataGrid-root":{
    border:"none",
    "& .MuiDataGrid-columnHeaderCheckbox .MuiDataGrid-columnHeaderTitleContainer": {
        display: "none"
      }
  },  
  '.css-1iyq7zh-MuiDataGrid-columnHeaders':{
    borderTop:`1px solid ${theme.palette.stroke[50]}`

  },
  '.MuiDataGrid-columnSeparator': {
    display: 'none',
  },
  '&.MuiDataGrid-root .MuiDataGrid-row.Mui-selected':{
    backgroundColor:'transparent'
  },
  '&.MuiDataGrid-root .MuiDataGrid-row:hover':{
    backgroundColor:'transparent'
  },
  '.css-i4bv87-MuiSvgIcon-root':{
    fontSize:'20px'
  },
  '.custom-header': {
    color: theme.palette.highEmphasis.main,
  },
}));

const Table = ({checkbox,columns,rows,autoHeight,selectedRows,setSelectedRows}:Props) => {
  columns.forEach((column:any) => {
    column.sortable = false;
    column.flex = 1;
    column.headerClassName = 'custom-header';
  });
  return (
    <Box>
        <MuiDataGrid
        rows={rows}
        columns={columns}
        disableRowSelectionOnClick
        checkboxSelection={checkbox}
        disableColumnMenu
        rowHeight={60}
        autoHeight={autoHeight}
        hideFooter
        onRowSelectionModelChange={(newSelectionModel) => {
          setSelectedRows(newSelectionModel); 
        }}
        rowSelectionModel={selectedRows}
      />
      </Box>
  );
}

export default Table;