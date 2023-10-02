
import useTranslation from 'next-translate/useTranslation';
import clsx from 'clsx';
import { Doc } from '@convex/_generated/dataModel';
import { useAppSelector } from '@/stores/hooks';
import { selectAffectations, selectAffectationsPaginated } from '@/stores/affectations/selectors';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table/interface';


type DataType = Doc<'affectations'> & { key: string };

export default function AffectationTable(props: React.ComponentPropsWithoutRef<"div">) {
  const { t } = useTranslation()

  const className = clsx(props.className)


  const rawColumns = ["affectationCode", "affectationName"]

  const columns: ColumnsType<DataType> = rawColumns.map((rawCol) => ({
    title: t(rawCol),
    dataIndex: rawCol,
    key: `affectation-header-${rawCol}`,
  }))


  const affectations = useAppSelector(selectAffectations)

  const data: DataType[] = affectations.map((affectation) => ({
    ...affectation,
    key: affectation._id,
  }))

  return (
    <Table pagination={{ defaultPageSize: 8 }} className={className} columns={columns} dataSource={data} />
  )

}
