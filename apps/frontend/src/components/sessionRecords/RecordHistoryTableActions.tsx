

import { useHistoryNavigation } from "@/hooks/useNavigation"
import { Button } from "antd"
import clsx from "clsx"
import { useTranslations } from 'next-intl';


const HistoryTableActions = (props: React.ComponentPropsWithoutRef<"div">) => {
  const t = useTranslations()
  const className = clsx(props.className, "flex flex-row justify-end items-center")
  const { navigateToNewHistory } = useHistoryNavigation()


  return (
    <div className={className}>
      <Button onClick={navigateToNewHistory} type="primary">
        {t('add')}
      </Button>

    </div>
  )
}

export default HistoryTableActions