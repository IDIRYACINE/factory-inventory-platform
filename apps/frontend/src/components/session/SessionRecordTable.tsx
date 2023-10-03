import type { ColumnsType } from 'antd/es/table/interface';
import { PaginationProps, Table } from "antd"; import { useTranslation } from 'next-i18next'
  ;
import clsx from 'clsx';
import { Doc } from '@convex/_generated/dataModel';
import { useLoadScannedRecordsPaginated, useReadActiveSessionRecords } from '@/hooks/useSession';
import { useMemo } from 'react';


type DataType = Doc<'sessionRecord'> & { key: string };

export default function SessionRecordTable(props: React.ComponentPropsWithoutRef<"div">) {
  const { t } = useTranslation('common')

  const className = clsx(props.className)

  const rawColumns = ["articleCode", "articleName", "workerName"]

  const columns: ColumnsType<DataType> = rawColumns.map((rawCol) => ({
    title: t(rawCol),
    dataIndex: rawCol,
    key: `session-header-${rawCol}`,
  }))

  const { results: storeData, loadMore, status } = useLoadScannedRecordsPaginated()
  console.log(storeData)

  const data: DataType[] = useMemo(() => {
    return storeData.map((el) => ({
      ...el,
      key: el._id,
    }))
  }, [storeData])

  const onChange: PaginationProps['onChange'] = (page) => {
    const lastPage = Math.ceil(data.length / 7)
    const canLoadMore = (status === 'CanLoadMore') && (page === lastPage)

    if (canLoadMore) {
      loadMore(50)
    }

  };

  return (
    <Table pagination={{ defaultPageSize: 7, onChange }} className={className} columns={columns} dataSource={data} />
  )

}
