

import { useInventoryNavigation } from "@/hooks/useNavigation"
import { Button } from "antd"
import clsx from "clsx"
import { useTranslations } from 'next-intl';


const InventoryTableActions = (props: React.ComponentPropsWithoutRef<"div">) => {
  const t = useTranslations()
  const className = clsx(props.className, "flex flex-row justify-end items-center")
  const { navigateToNewInventory } = useInventoryNavigation()


  return (
    <div className={className}>
      <Button onClick={navigateToNewInventory} type="primary">
        {t('add')}
      </Button>

    </div>
  )
}

export default InventoryTableActions