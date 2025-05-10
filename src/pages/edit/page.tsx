import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select.tsx'
import { setLanguage } from '@/i18n'
import { EditHeader } from '@/pages/edit/sections/edit-header.tsx'
import { PanelConfig } from '@/pages/edit/sections/panel-config.tsx'
import { PanelDnd } from '@/pages/edit/sections/panel-dnd.tsx'
import { PanelMaterials } from '@/pages/edit/sections/panel-materials.tsx'
import { useTranslation } from 'react-i18next'

const PageEdit = () => {
  const { i18n } = useTranslation()
  return (
    <div className="h-[100vh]">
      <EditHeader />
      <div className="flex h-[calc(100%-52px)]">
        {/* left materials panel */}
        <div className="scroll-thin flex h-full w-[200px] shrink-0 flex-col justify-between overflow-y-auto border-r">
          <PanelMaterials />
          <div className="p-4">
            <Select
              onValueChange={setLanguage}
              defaultValue={i18n.language}
            >
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">
                  <span>🇺🇸</span>English
                </SelectItem>
                <SelectItem value="zh">
                  <span>🇨🇳</span>中文
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        {/* center dnd panel */}
        <div className="flex grow justify-center bg-zinc-50 p-4">
          <PanelDnd />
        </div>
        {/* right config panel */}
        <div className="scroll-thin h-full w-[292px] shrink-0 overflow-y-auto border-l 2xl:w-[332px]">
          <PanelConfig />
        </div>
      </div>
    </div>
  )
}

export { PageEdit }
