"use client";
import React from "react";
import { switchLocaleAction } from "../actions/switch-locale";
import { useTranslation } from "../i18n/client";
import { useLocale } from "@/hooks/locale-provider";

// We removed the `locale` prop because we can get it from the hook
export default function ChangeLocale() {
  // const { i18n, t } = useTranslation("common");
  const locale = useLocale();

  return (
    <div>
      <select
        onChange={(e) => switchLocaleAction(e.target.value)}
        value={locale}
      >
        <option value="en">🇺🇸 English</option>
        <option value="vi">🇻🇳 Tiếng Việt</option>
      </select>
    </div>
  );
}
