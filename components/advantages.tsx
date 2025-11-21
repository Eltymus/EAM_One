import {
  TbFlag,
  TbTopologyStar3,
  TbDeviceTablet,
  TbArchive,
  TbSettings,
} from "react-icons/tb";
import { useTranslation } from "next-i18next";
import { TagText } from "./tagText";

export function Advantages() {
  const { t } = useTranslation();

  return (
    <div className="m-10 flex flex-col md:flex-row">
      <div className="content-center items-center pr-5 text-center">
        <p className="m-5 text-2xl font-bold">{t("home.advantages.title")}</p>
        <p className="m-5">{t("home.advantages.description")}</p>
      </div>
      <div className="m-5 grid gap-10 sm:grid-cols-1 md:grid-cols-2">
        <TagText description={t("home.benefit_icon.0")} Icon={TbFlag} />
        <TagText
          description={t("home.benefit_icon.1")}
          Icon={TbTopologyStar3}
        />
        <TagText description={t("home.benefit_icon.2")} Icon={TbDeviceTablet} />
        <TagText description={t("home.benefit_icon.3")} Icon={TbArchive} />
        <TagText description={t("home.benefit_icon.4")} Icon={TbSettings} />
      </div>
    </div>
  );
}
