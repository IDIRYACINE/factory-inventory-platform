"use client";

import type { ColumnsType } from 'antd/es/table';
import Table from 'antd/es/table';
import useTranslation from 'next-translate/useTranslation';
import clsx from 'clsx';
import { Doc } from '@convex/_generated/dataModel';
import { selectStocks, selectStocksPaginated } from '@/stores/stock/selectors';
import { useAppSelector } from '@/stores/hooks';


type DataType = Doc<'stock'> & { key: string };

export default function StockTable(props: React.ComponentPropsWithoutRef<"div">) {
  const { t } = useTranslation()

  const className = clsx(props.className)

  const rawColumns = ["articleCode", "articleName", "familyCode", "unit"]

  const columns: ColumnsType<DataType> = rawColumns.map((rawCol) => ({
    title: t(rawCol),
    dataIndex: rawCol,
    key: `stock-header-${rawCol}`,
  }))

  const storeData = useAppSelector(selectStocks)
  const data: DataType[] = storeData.map((el) => ({
    ...el,
    key: el._id,
  }))

  return (
    <Table pagination={{ defaultPageSize: 8 }} className={className} columns={columns} dataSource={data} />
  )

}
