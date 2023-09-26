import type { ColumnsType } from 'antd/es/table';
import Table from 'antd/es/table';
import useTranslation from 'next-translate/useTranslation';
import clsx from 'clsx';

interface DataType {
  key: string;
  name: string;
  username: string;
  phone: string;
}

export default function WorkersTable(props:React.ComponentPropsWithoutRef<"div">) {
  const { t } = useTranslation()

  const className= clsx(props.className)

  const columns: ColumnsType<DataType> = [
    {
      title: t('name'),
      dataIndex: 'name',
      key: 'worker-header-name',
    },
    {
      title: t('username'),
      dataIndex: 'username',
      key: 'worker-header-username',
    },
    {
      title: t('phone'),
      dataIndex: 'phone',
      key: 'worker-header-phone',
    }
  ]

  const data: DataType[] = [

  ]

  return (
    <Table className={className} columns={columns} dataSource={data} />
  )

}
