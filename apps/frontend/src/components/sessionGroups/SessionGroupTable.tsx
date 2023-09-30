import type { ColumnsType } from 'antd/es/table';
import Table from 'antd/es/table';
import useTranslation from 'next-translate/useTranslation';
import clsx from 'clsx';
import { Doc } from '@convex/_generated/dataModel';
import { useReadSessionGroups } from '@/hooks/useSessionGroup';


type DataType = Doc<'sessionGroups'> & { key: string };

export default function SessionGroupTable(props:React.ComponentPropsWithoutRef<"div">) {
  const { t } = useTranslation()

  const className= clsx(props.className)
  const rawColumns = ["groupName"]

  const columns: ColumnsType<DataType> = rawColumns.map((rawCol) => ({
    title: t(rawCol),
    dataIndex: rawCol,
    key: `sessionG-header-${rawCol}`,
  }))


  const storeData = useReadSessionGroups()
  const data: DataType[] = storeData.map((el) => ({
    ...el,
    key: el._id,
  }))

  return (
    <Table className={className} columns={columns} dataSource={data} />
  )

}