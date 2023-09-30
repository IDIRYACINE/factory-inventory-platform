"use client";

import type { ColumnsType } from 'antd/es/table';
import Table from 'antd/es/table';
import useTranslation from 'next-translate/useTranslation';
import clsx from 'clsx';
import { Doc } from '@convex/_generated/dataModel';
import { useReadUsers, useSelectUser } from '@/hooks/useUser';


type DataType = Doc<'user'> & { key: string };

export default function UserTable(props:React.ComponentPropsWithoutRef<"div">) {
  const { t } = useTranslation()

  const className= clsx(props.className)
  const {selectUser,unSelectUser} = useSelectUser()

  
  const rawColumns = ["role","name"]

  const columns: ColumnsType<DataType> = rawColumns.map((rawCol) => ({
    title: t(rawCol),
    dataIndex: rawCol,
    key: `user-header-${rawCol}`,
  }))

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      if(selectedRows.length === 0) {
        unSelectUser()
      }

      selectUser(selectedRows[0])
    },
    getCheckboxProps: (record: DataType) => ({
      disabled: record.name === 'Disabled',
      name: record.name,
    }),
  };

  const users = useReadUsers()

  const data: DataType[] = users.map((user) => ({
    ...user,
    key: user._id,
  }))

  return (
    <Table rowSelection={{
      type: 'radio',
      ...rowSelection,
    }}
    className={className} columns={columns} dataSource={data} />
  )

}
