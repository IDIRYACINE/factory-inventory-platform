"use client";

import type { ColumnsType } from 'antd/es/table';
import Table from 'antd/es/table';
import useTranslation from 'next-translate/useTranslation';
import clsx from 'clsx';
import { Doc } from '@convex/_generated/dataModel';
import { selectInventories } from '@/stores/inventory/selectors';
import { useAppSelector } from '@/stores/hooks';


type DataType = Doc<'inventory'> & { key: string };

export default function InventoryTable(props:React.ComponentPropsWithoutRef<"div">) {
  const { t } = useTranslation()

  const className= clsx(props.className)

  const rawColumns = [""]


  const columns: ColumnsType<DataType> = rawColumns.map((rawCol) => ({
    title: t(rawCol),
    dataIndex: rawCol,
    key: `inventory-header-${rawCol}`,
  }))

  const storeData = useAppSelector(selectInventories)
  const data: DataType[] = storeData.map((el) => ({
    ...el,
    key: el._id,
  }))

  return (
    <Table className={className} columns={columns} dataSource={data} />
  )

}
