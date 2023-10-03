
import type { ColumnsType } from 'antd/es/table/interface';
import { Table } from "antd";
import { useTranslation } from 'next-i18next'
  ;
import clsx from 'clsx';
import { Doc } from '@convex/_generated/dataModel';
import { selectFamilyCodes, selectFamilyCodesPaginated } from '@/stores/productFamily/selectors';
import { useAppSelector } from '@/stores/hooks';


type DataType = Doc<'familyCode'> & { key: string };

export default function FamilyCodeTable(props: React.ComponentPropsWithoutRef<"div">) {
  const { t } = useTranslation('common')

  const className = clsx(props.className)


  const rawColumns = ["code", "name"]

  const columns: ColumnsType<DataType> = rawColumns.map((rawCol) => ({
    title: t(rawCol),
    dataIndex: rawCol,
    key: `family-header-${rawCol}`,
  }))


  const codes = useAppSelector(selectFamilyCodes)

  const data: DataType[] = codes.map((code) => ({
    ...code,
    key: code._id,
  }))

  return (
    <Table pagination={{ defaultPageSize: 7 }} className={className} columns={columns} dataSource={data} />
  )

}
