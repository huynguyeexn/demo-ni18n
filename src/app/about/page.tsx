import { createTranslation } from "../../i18n/server";

export default async function AboutPage() {
  // const { t } = await createTranslation("about");
  const { t } = await createTranslation("about/index");

  return (
    <div>
      <h1>{t("about")}</h1>
    </div>
  );
}
