import type { ColumnsType } from 'antd/es/table';
import Table from 'antd/es/table';
import useTranslation from 'next-translate/useTranslation';
import clsx from 'clsx';
import { Doc } from '@convex/_generated/dataModel';
import { useReadActiveSessionRecords } from '@/hooks/useSession';


type DataType = Doc<'sessionRecord'> & { key: string };

export default function SessionRecordTable(props: React.ComponentPropsWithoutRef<"div">) {
  const { t } = useTranslation()

  const className = clsx(props.className)

  const rawColumns = ["code","name","worker"]

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
    <Table className={className} columns={columns} dataSource={data} />
  )

}
