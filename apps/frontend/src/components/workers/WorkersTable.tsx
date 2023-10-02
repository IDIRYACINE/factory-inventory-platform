
import type { ColumnsType } from 'antd/es/table/interface';
import { Table } from "antd"; import useTranslation from 'next-translate/useTranslation';
import clsx from 'clsx';
import { selectWorkers } from '@/stores/workers/selectors';
import { useAppDispatch, useAppSelector } from '@/stores/hooks';
import { Doc } from '@convex/_generated/dataModel';
import { selectWorker } from '@/stores/workers/slice';

type DataType = Doc<"workers"> & { key: string; }

export default function WorkersTable(props: React.ComponentPropsWithoutRef<"div">) {
  const { t } = useTranslation("common")

  const className = clsx(props.className)

  const dispatch = useAppDispatch()

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      if (selectedRows.length === 0) return

      dispatch(selectWorker(selectedRows[0]))
    },
    getCheckboxProps: (record: DataType) => ({
      disabled: record.name === 'Disabled User',
      name: record.name,
    }),
  };

  const columns: ColumnsType<DataType> = [
    {
      title: t('name'),
      dataIndex: 'name',
      key: 'worker-header-name',
    },
    {
      title: t('phone'),
      dataIndex: 'phone',
      key: 'worker-header-phone',
    }
  ]

  const storeData = useAppSelector(selectWorkers)
  const data: DataType[] = storeData.map((el) => ({
    ...el,
    key: el._id,
  }))

  return (
    <Table rowSelection={{
      type: 'radio',
      ...rowSelection,
    }}
      className={className} columns={columns} dataSource={data} />
  )

}
