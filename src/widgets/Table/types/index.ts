export type TCellValue = string | string[] | number | boolean;
export type TTransformFunc = (value: any) => TCellValue;
export type TRenderFunc = (value: any) => React.ReactNode;

export type ITableCell = {
  value: TCellValue;
  transformValue?: TTransformFunc;
  render?: TRenderFunc;
};

export type ITableRow = {
  id?: string;
  data: ITableCell[];
  onClick?: () => void;
};

export type ITableData = {
  header: ITableRow;
  rows: ITableRow[];
};
