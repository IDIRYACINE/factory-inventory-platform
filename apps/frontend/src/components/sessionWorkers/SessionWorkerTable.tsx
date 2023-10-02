

import type { ColumnsType } from 'antd/es/table/interface';
import { Table } from "antd"; import useTranslation from 'next-translate/useTranslation';
import clsx from 'clsx';
import { Doc } from '@convex/_generated/dataModel';
import { useReadSessionWorkers } from '@/hooks/useSesionWorker';


type DataType = Doc<'sessionWorkers'> & { key: string };

export default function SessionGroupTable(props: React.ComponentPropsWithoutRef<"div">) {
  const { t } = useTranslation()

  const className = clsx(props.className)
  const rawColumns = ["username", "password"]

  const columns: ColumnsType<DataType> = rawColumns.map((rawCol) => ({
    title: t(rawCol),
    dataIndex: rawCol,
    key: `sessionW-header-${rawCol}`,
  }))


  const storeData = useReadSessionWorkers()
  const data: DataType[] = storeData.map((el) => ({
    ...el,
    key: el._id,
  }))

  return (
    <Table className={className} columns={columns} dataSource={data} />
  )

}
