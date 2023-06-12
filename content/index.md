---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
---

<script type="text/javascript">
import { inBrowser } from 'vitepress';

if (inBrowser) {
  const userLangWhole = navigator.language || navigator.userLanguage || "unknown"; 
  const userLang = userLangWhole.split('-')[0];
  if (userLang === 'zh') 
    window.location.href = "/zh/";
  else
    window.location.href = "/en/";
}
</script>
