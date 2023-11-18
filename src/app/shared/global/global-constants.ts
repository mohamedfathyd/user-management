import { ar } from "../../../lang/ar";
import { en } from "../../../lang/en";


export class GlobalConstants {
  public static currentLanguage = localStorage.getItem("language") || "en";
  public static lang = GlobalConstants.currentLanguage == "ar" ? ar : en;

  public static toggleLanguage() {
    if (GlobalConstants.lang == en) {
      GlobalConstants.lang = ar;
      localStorage.setItem("language", "ar");
    } else {
      GlobalConstants.lang = en;
      localStorage.setItem("language", "en");
    }
    GlobalConstants.currentLanguage = localStorage.getItem("language") || "ar";
  }
  public static toggleLangToEnglish() {
    GlobalConstants.lang = en;
    localStorage.setItem("language", "en");
    GlobalConstants.currentLanguage = "en";
  }
  public static toggleLangToArabic() {
    GlobalConstants.lang = ar;
    localStorage.setItem("language", "ar");
    GlobalConstants.currentLanguage = "ar";
  }

}
