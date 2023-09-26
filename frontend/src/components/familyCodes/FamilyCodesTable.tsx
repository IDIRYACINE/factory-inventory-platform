import type { ColumnsType } from 'antd/es/table';
import Table from 'antd/es/table';
import useTranslation from 'next-translate/useTranslation';
import clsx from 'clsx';
import { Doc } from '@convex/_generated/dataModel';


type DataType = Doc<'familyCode'> & { key: string };

export default function FamilyCodeTable(props:React.ComponentPropsWithoutRef<"div">) {
  const { t } = useTranslation()

  const className= clsx(props.className)
  
  const rawColumns = ["code","name"]

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