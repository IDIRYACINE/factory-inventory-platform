import type { ColumnsType } from 'antd/es/table';
import Table from 'antd/es/table';
import useTranslation from 'next-translate/useTranslation';
import clsx from 'clsx';
import { Doc } from '@convex/_generated/dataModel';


type DataType = Doc<'familyCode'> & { key: string };

export default function FamilyCodeTable(props:React.ComponentPropsWithoutRef<"div">) {
  const { t } = useTranslation()

  const className= clsx(props.className)

  const columns: ColumnsType<DataType> = [
    {
      title: t('code'),
      dataIndex: 'code',
      key: 'family-header-code',
    },
    {
      title: t('name'),
      dataIndex: 'name',
      key: 'family-header-name',
    },
   
  ]

  const data: DataType[] = [

  ]

  return (
    <Table className={className} columns={columns} dataSource={data} />
  )

}
