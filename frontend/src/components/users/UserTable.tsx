"use client";

import type { ColumnsType } from 'antd/es/table';
import Table from 'antd/es/table';
import useTranslation from 'next-translate/useTranslation';
import clsx from 'clsx';
import { Doc } from '@convex/_generated/dataModel';
import { useAppSelector } from '@/stores/hooks';
import { selectUsers } from '@/stores/users/selectors';


type DataType = Doc<'user'> & { key: string };

export default function UserTable(props:React.ComponentPropsWithoutRef<"div">) {
  const { t } = useTranslation()

  const className= clsx(props.className)

  
  const rawColumns = ["role","name"]

  const columns: ColumnsType<DataType> = rawColumns.map((rawCol) => ({
    title: t(rawCol),
    dataIndex: rawCol,
    key: `user-header-${rawCol}`,
  }))


  const codes = useAppSelector(selectUsers)

  const data: DataType[] = codes.map((code) => ({
    ...code,
    key: code._id,
  }))

  return (
    <Table className={className} columns={columns} dataSource={data} />
  )

}
