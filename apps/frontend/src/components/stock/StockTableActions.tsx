

import { useStockNavigation } from "@/hooks/useNavigation"
import { Button } from "antd"
import clsx from "clsx"
import { useTranslations } from 'next-intl';


const StockTableActions = (props: React.ComponentPropsWithoutRef<"div">) => {
  const t = useTranslations()
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