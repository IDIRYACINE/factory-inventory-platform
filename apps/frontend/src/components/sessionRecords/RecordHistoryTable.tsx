import type { ColumnsType } from 'antd/es/table/interface';
import { Table } from "antd"; import useTranslation from 'next-translate/useTranslation';
import clsx from 'clsx';
import { Doc } from '@convex/_generated/dataModel';


type DataType = Doc<'sessionRecord'> & { key: string };

export default function HistoryTable(props: React.ComponentPropsWithoutRef<"div">) {
  const { t } = useTranslation("common")

  const className = clsx(props.className)

  const rawColumns = [""]

  const columns: ColumnsType<DataType> = rawColumns.map((rawCol) => ({
    title: t(rawCol),
    dataIndex: rawCol,
    key: `record-header-${rawCol}`,
  }))

  const data: DataType[] = [

  ]

  return (
    <Table className={className} columns={columns} dataSource={data} />
  )

}
