<<<<<<< HEAD
import { atom } from "recoil";
import { SiderTheme } from "antd/lib/layout/Sider";
const theme_store = atom<SiderTheme | string>({
  key: "theme", // unique ID (with respect to other atoms/selectors)
  default: "light", // default value (aka initial value)
});
export { theme_store };
=======
import { atom } from "recoil";
import { SiderTheme } from "antd/lib/layout/Sider";
const theme_store = atom<SiderTheme | string>({
  key: "theme", // unique ID (with respect to other atoms/selectors)
  default: "light", // default value (aka initial value)
});
export { theme_store };
>>>>>>> e351d025d9b6cb08cd80bc569f2ae03000f61cde
