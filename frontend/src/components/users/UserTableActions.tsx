'use client';

import { useUserNavigation } from "@/hooks/useNavigation"
import Button from "antd/es/button"
import clsx from "clsx"
import useTranslation from "next-translate/useTranslation"


 const UserTableActions = (props:React.ComponentPropsWithoutRef<"div">) => {
    const { t } = useTranslation('common')
    const className= clsx(props.className, "flex flex-row justify-end items-center")
    const { navigateToNewUser } = useUserNavigation()
  
  
    return (
      <div className={className}>
        <Button onClick={navigateToNewUser} type="primary">
          {t('add')}
        </Button>
  
      </div>
    )
  }

  export default UserTableActions