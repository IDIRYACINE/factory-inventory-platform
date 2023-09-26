'use client';

import { useHistoryNavigation } from "@/hooks/useNavigation"
import Button from "antd/es/button"
import clsx from "clsx"
import useTranslation from "next-translate/useTranslation"


 const HistoryTableActions = (props:React.ComponentPropsWithoutRef<"div">) => {
    const { t } = useTranslation('common')
    const className= clsx(props.className, "flex flex-row justify-end items-center")
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