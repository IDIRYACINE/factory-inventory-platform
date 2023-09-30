'use client';

import { usePermissionsNavigation } from "@/hooks/useNavigation"
import { useLoadUserPermissions, useRevokePermission } from "@/hooks/useUser";
import Button from "antd/es/button"
import clsx from "clsx"
import useTranslation from "next-translate/useTranslation"


 const PermissionsTableActions = (props:React.ComponentPropsWithoutRef<"div">) => {
    const { t } = useTranslation('common')
    const className= clsx(props.className, "flex flex-row justify-end items-center")
    const { navigateUsers,navigateGrantPermission } = usePermissionsNavigation()

    useLoadUserPermissions()

    const revoke = useRevokePermission()

  
    return (
      <div className={className}>
        <Button type="primary" onClick={navigateUsers}>
          {t('back')}
        </Button>
        <Button type="primary" onClick={revoke}>
          {t('revoke')}
        </Button>
        <Button type="primary" onClick={navigateGrantPermission}>
          {t('add')}
        </Button>
  
      </div>
    )
  }

  export default PermissionsTableActions