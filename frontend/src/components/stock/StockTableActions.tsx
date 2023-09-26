'use client';

import { useStockNavigation } from "@/hooks/useNavigation"
import Button from "antd/es/button"
import clsx from "clsx"
import useTranslation from "next-translate/useTranslation"


const StockTableActions = (props: React.ComponentPropsWithoutRef<"div">) => {
  const { t } = useTranslation('common')
  const className = clsx(props.className, "flex flex-row justify-end items-center")
  const { navigateToNewStock } = useStockNavigation()


  return (
    <div className={className}>
      <Button onClick={navigateToNewStock} type="primary">
        {t('add')}
      </Button>

    </div>
  )
}

export default StockTableActions