'use client';

import { usePermissionsNavigation } from "@/hooks/useNavigation"
import Button from "antd/es/button"
import clsx from "clsx"
import useTranslation from "next-translate/useTranslation"


 const PermissionsTableActions = (props:React.ComponentPropsWithoutRef<"div">) => {
    const { t } = useTranslation('common')
    const className= clsx(props.className, "flex flex-row justify-end items-center")
    const { navigateHome } = usePermissionsNavigation()
  
  
    return (
      <div className={className}>
        <Button type="primary">
          {t('add')}
        </Button>
  
      </div>
    )
  }

  export default PermissionsTableActions