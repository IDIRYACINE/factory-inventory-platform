"use client";

import type { ColumnsType } from 'antd/es/table';
import Table from 'antd/es/table';
import useTranslation from 'next-translate/useTranslation';
import clsx from 'clsx';
import { Doc } from '@convex/_generated/dataModel';
import { useAppSelector } from '@/stores/hooks';
import { selectAffectations } from '@/stores/affectations/selectors';


type DataType = Doc<'affectations'> & { key: string };

export default function AffectationTable(props:React.ComponentPropsWithoutRef<"div">) {
  const { t } = useTranslation()

  const className= clsx(props.className)

  
  const rawColumns = ["affectationCode","affectationName"]

  const columns: ColumnsType<DataType> = rawColumns.map((rawCol) => ({
    title: t(rawCol),
    dataIndex: rawCol,
    key: `affectation-header-${rawCol}`,
  }))


  const codes = useAppSelector(selectAffectations)

  const data: DataType[] = codes.map((code) => ({
    ...code,
    key: code._id,
  }))

  return (
    <Table className={className} columns={columns} dataSource={data} />
  )

}
