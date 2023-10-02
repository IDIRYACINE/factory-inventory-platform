import type { ColumnsType } from 'antd/es/table/interface';
import { Table } from "antd"; import useTranslation from 'next-translate/useTranslation';
import clsx from 'clsx';
import { Doc } from '@convex/_generated/dataModel';
import { useReadActiveSessionRecords } from '@/hooks/useSession';


type DataType = Doc<'sessionRecord'> & { key: string };

export default function SessionRecordTable(props: React.ComponentPropsWithoutRef<"div">) {
  const { t } = useTranslation()

  const className = clsx(props.className)

  const rawColumns = ["articleCode", "articleName", "workerName"]

  const columns: ColumnsType<DataType> = rawColumns.map((rawCol) => ({
    title: t(rawCol),
    dataIndex: rawCol,
    key: `session-header-${rawCol}`,
  }))

  const storeData = useReadActiveSessionRecords()
  const data: DataType[] = storeData.map((el) => ({
    ...el,
    key: el._id,
  }))

  return (
    <Table pagination={{ defaultPageSize: 8 }} className={className} columns={columns} dataSource={data} />
  )

}
