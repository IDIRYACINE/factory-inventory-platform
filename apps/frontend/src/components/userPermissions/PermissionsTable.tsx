"use client";

import type { ColumnsType } from 'antd/es/table';
import Table from 'antd/es/table';
import useTranslation from 'next-translate/useTranslation';
import clsx from 'clsx';
import { Doc } from '@convex/_generated/dataModel';
import { useReadUserPermissions, useSelectPermission } from '@/hooks/useUser';


type DataType = Doc<'affectationPermisions'> & { key: string };

export default function PermissionTable(props: React.ComponentPropsWithoutRef<"div">) {
  const { t } = useTranslation()

  const className = clsx(props.className)


  const rawColumns = ["affectationCode"]

  const columns: ColumnsType<DataType> = rawColumns.map((rawCol) => ({
    title: t(rawCol),
    dataIndex: rawCol,
    key: `permission-header-${rawCol}`,
  }))


  const permissions = useReadUserPermissions()

  const data: DataType[] = permissions.map((permissions) => ({
    ...permissions,
    key: permissions._id,
  }))

  const { selectPermission, unSelectPermission } = useSelectPermission()
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      if (selectedRows.length === 0) {
        unSelectPermission()
      }

      selectPermission(selectedRows[0])
    },
    getCheckboxProps: (record: DataType) => ({
      disabled: false,
      name: record._id,
    }),
  };

  return (
    <Table rowSelection={{
      type: 'radio',
      ...rowSelection,
    }} className={className} columns={columns} dataSource={data} />
  )

}
