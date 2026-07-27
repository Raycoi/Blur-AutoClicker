type DynamicRule = {
  pattern: RegExp;
  replace: (match: RegExpMatchArray) => string;
};

const TEXT_TRANSLATIONS: Record<string, string> = {
  About: "关于",
  "Accent Color": "强调色",
  "Active Icon": "激活图标",
  "Add Current Position": "添加当前位置",
  Advanced: "高级",
  "Advanced Page": "高级页面",
  "All Pages": "所有页面",
  "Always on Top": "窗口置顶",
  Appearance: "外观",
  "Appearance Mode": "外观模式",
  "Applied to all pages.": "应用到所有页面。",
  Apply: "应用",
  Auto: "自动",
  "Average CPU Usage": "平均 CPU 使用率",
  "Background Image": "背景图片",
  "Background Image Opacity": "背景图片透明度",
  "Background Opacity": "背景透明度",
  Behavior: "行为",
  "Behavior when the app opens.": "应用启动时的行为。",
  "Blocked by Alt+Tab": "因 Alt+Tab 被阻止",
  "Blocked by process list": "因进程列表被阻止",
  Browse: "浏览",
  Cancel: "取消",
  "Check failed": "检查失败",
  "Check for Update": "检查更新",
  "Checking...": "检查中...",
  "Choose between dark and light mode.": "在深色和浅色模式之间选择。",
  "Clear hotkey": "清除热键",
  "Clear key": "清除按键",
  "Click Points": "点击点",
  "Click Points Defaults": "点击点默认值",
  "Click Points Page": "点击点页面",
  "Click Speed": "点击速度",
  "Click limit reached": "已达到点击次数限制",
  "Clicking Sessions": "点击会话",
  "Clicking statistics for all sessions (only stored locally).":
    "所有会话的点击统计（仅本地存储）。",
  Clicks: "点击次数",
  "Clicks Per": "每单位点击次数",
  Close: "关闭",
  Confirm: "确认",
  "Corner failsafe": "角落安全停止",
  "Custom stop zone failsafe": "自定义停止区域安全停止",
  Dark: "深色",
  "Default Clicks": "默认点击次数",
  "Default Radius": "默认半径",
  Delete: "删除",
  Diagnostics: "诊断",
  Disabled: "已禁用",
  "Disable Always on Top": "关闭窗口置顶",
  "Double Click": "双击",
  Duration: "间隔",
  "Edge failsafe": "边缘安全停止",
  Enable: "启用",
  "Enable Always on Top": "开启窗口置顶",
  "Enable extended click speed limit?": "启用扩展点击速度限制？",
  Enabled: "已启用",
  "Export preset": "导出预设",
  "Failed to establish sub-millisecond Windows timer resolution.":
    "无法建立亚毫秒级 Windows 计时器精度。",
  Footer: "底栏",
  General: "常规",
  Global: "全局",
  "Go to presets": "前往预设",
  "Hide Changes": "隐藏变更",
  Hold: "按住",
  "Icon Color": "图标颜色",
  "Icon Theme": "图标主题",
  Import: "导入",
  Info: "信息",
  Keyboard: "键盘",
  "Keyboard mode requires a key to be selected": "键盘模式需要选择一个按键",
  Keybinds: "快捷键",
  Left: "左键",
  Light: "浅色",
  Maintenance: "维护",
  Middle: "中键",
  Minimize: "最小化",
  "Minimize to Tray": "最小化到系统托盘",
  Mode: "模式",
  Mouse: "鼠标",
  "No preset active": "未启用预设",
  "No session data yet.": "暂无会话数据。",
  "No update found": "未发现更新",
  Off: "关",
  On: "开",
  "Page Style": "页面样式",
  "Panel Blur": "面板模糊",
  "Panel Opacity": "面板透明度",
  "Path or URL to a background image.": "背景图片的路径或 URL。",
  Paused: "已暂停",
  "Preset name": "预设名称",
  Presets: "预设",
  "Process List": "进程列表",
  Rate: "频率",
  Remove: "移除",
  "Remember Window Position": "记住窗口位置",
  Rename: "重命名",
  Reset: "重置",
  "Reset All Settings": "重置所有设置",
  "Reset Usage Data": "重置使用数据",
  "Reset all settings": "重置所有设置",
  "Reset usage data": "重置使用数据",
  Right: "右键",
  "Run on Startup": "开机自启",
  Save: "保存",
  "Save New Preset": "保存新预设",
  Settings: "设置",
  "Settings Page": "设置页面",
  "Show Changes": "显示变更",
  Simple: "简洁",
  "Simple Page": "简洁页面",
  "Speed Randomization": "速度随机化",
  "Status Bar": "状态栏",
  "Stop Hitbox Overlay": "停止区域叠加层",
  "Stop Reason Alert": "停止原因提醒",
  "Stop on Alt+Tab": "Alt+Tab 时停止",
  Stopped: "已停止",
  "Stopped from UI": "从界面停止",
  "Stopped from hotkey": "通过热键停止",
  "Stopped from hold hotkey": "松开按住热键后停止",
  "Stopped from toggle": "通过切换停止",
  "Support Me": "支持我",
  "Taskbar Icon": "任务栏图标",
  "The primary accent color.": "主要强调色。",
  Theme: "主题",
  "Theme & Accent": "主题与强调色",
  "Time Limit": "时间限制",
  Toggle: "切换",
  "Toggle keyboard key case": "切换键盘按键大小写",
  "Top-left corner failsafe": "左上角安全停止",
  "Top-right corner failsafe": "右上角安全停止",
  "Bottom-left corner failsafe": "左下角安全停止",
  "Bottom-right corner failsafe": "右下角安全停止",
  "Top edge failsafe": "顶部边缘安全停止",
  "Right edge failsafe": "右侧边缘安全停止",
  "Bottom edge failsafe": "底部边缘安全停止",
  "Left edge failsafe": "左侧边缘安全停止",
  "Total Clicking Time": "总点击时长",
  "Total Clicks": "总点击次数",
  "Transparency of the app window background.": "应用窗口背景透明度。",
  "Transparency of the background image.": "背景图片透明度。",
  "Transparency of the panel.": "面板透明度。",
  "Update found!": "发现更新！",
  Usage: "使用统计",
  "Use one style for all pages, or customize each page individually.":
    "为所有页面使用同一套样式，或分别自定义每个页面。",
  Version: "版本",
  "Version and project links.": "版本与项目链接。",
  "Whitelist mode has no entries selected": "白名单模式没有选择任何条目",
  "Working...": "处理中...",
  "Your logs & crash reports": "你的日志与崩溃报告",
  dark: "深色",
  light: "浅色",
  theme: "跟随主题",
  default: "默认",
  auto: "自动",
  whitelist: "白名单",
  blacklist: "黑名单",
};

const PLACEHOLDER_TRANSLATIONS: Record<string, string> = {
  "https://example.com/image.png": "https://example.com/image.png",
  "Preset name": "预设名称",
};

const DYNAMIC_RULES: DynamicRule[] = [
  {
    pattern: /^Show all \((\d+) more versions?\)$/,
    replace: ([, count]) => `显示全部（还有 ${count} 个版本）`,
  },
  {
    pattern: /^search in (\d+) applications$/,
    replace: ([, count]) => `在 ${count} 个应用中搜索`,
  },
  {
    pattern: /^Pt (\d+)\/(\d+)$/,
    replace: ([, current, total]) => `点位 ${current}/${total}`,
  },
  {
    pattern: /^(\d+) clicks$/,
    replace: ([, count]) => `${count} 次点击`,
  },
  {
    pattern: /^(\d+) \/ (\d+) clicks$/,
    replace: ([, count, limit]) => `${count} / ${limit} 次点击`,
  },
  {
    pattern: /^Click limit reached \((.+)\)$/,
    replace: ([, count]) => `已达到点击次数限制（${count}）`,
  },
  {
    pattern: /^Time limit reached \((.+)\)$/,
    replace: ([, time]) => `已达到时间限制（${time}）`,
  },
  {
    pattern: /^Unknown keyboard key: '(.+)'$/,
    replace: ([, key]) => `未知键盘按键：“${key}”`,
  },
  {
    pattern: /^Windows API error code: (.+)$/,
    replace: ([, code]) => `Windows API 错误代码：${code}`,
  },
];

const ATTRIBUTES_TO_LOCALIZE = [
  "aria-label",
  "placeholder",
  "title",
  "alt",
] as const;

const SKIPPED_TAGS = new Set([
  "CODE",
  "KBD",
  "NOSCRIPT",
  "PRE",
  "SAMP",
  "SCRIPT",
  "STYLE",
  "TEXTAREA",
]);

function preserveOuterWhitespace(source: string, translated: string): string {
  const leading = source.match(/^\s*/)?.[0] ?? "";
  const trailing = source.match(/\s*$/)?.[0] ?? "";
  return `${leading}${translated}${trailing}`;
}

function translateSegment(segment: string): string {
  const direct =
    TEXT_TRANSLATIONS[segment] ?? PLACEHOLDER_TRANSLATIONS[segment];
  if (direct) {
    return direct;
  }

  for (const rule of DYNAMIC_RULES) {
    const match = segment.match(rule.pattern);
    if (match) {
      return rule.replace(match);
    }
  }

  return segment;
}

function translateText(value: string): string {
  const trimmed = value.trim();
  if (!trimmed) {
    return value;
  }

  const warningMatch = trimmed.match(/^⚠\s*(.+)$/);
  if (warningMatch) {
    const translatedWarning = translateText(warningMatch[1]);
    return preserveOuterWhitespace(value, `⚠ ${translatedWarning.trim()}`);
  }

  const bulletParts = trimmed.split(/(\u00A0\u00A0•\u00A0\u00A0| • )/);
  if (bulletParts.length > 1) {
    const translated = bulletParts
      .map((part) =>
        part.includes("•") ? part : translateSegment(part.trim()),
      )
      .join("");
    return preserveOuterWhitespace(value, translated);
  }

  const translated = translateSegment(trimmed);
  return translated === trimmed
    ? value
    : preserveOuterWhitespace(value, translated);
}

function localizeTextNode(node: Text): void {
  const translated = translateText(node.data);
  if (translated !== node.data) {
    node.data = translated;
  }
}

function localizeAttributes(element: Element): void {
  for (const attribute of ATTRIBUTES_TO_LOCALIZE) {
    const value = element.getAttribute(attribute);
    if (!value) {
      continue;
    }

    const translated = translateText(value);
    if (translated !== value) {
      element.setAttribute(attribute, translated);
    }
  }
}

function localizeTree(root: Node): void {
  if (root.nodeType === Node.TEXT_NODE) {
    localizeTextNode(root as Text);
    return;
  }

  if (
    root.nodeType !== Node.ELEMENT_NODE &&
    root.nodeType !== Node.DOCUMENT_NODE
  ) {
    return;
  }

  const element = root as Element;
  if (element.nodeType === Node.ELEMENT_NODE) {
    if (SKIPPED_TAGS.has(element.tagName)) {
      return;
    }
    localizeAttributes(element);
  }

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let current = walker.nextNode();
  while (current) {
    const parent = current.parentElement;
    if (!parent || !SKIPPED_TAGS.has(parent.tagName)) {
      localizeTextNode(current as Text);
    }
    current = walker.nextNode();
  }

  if (root instanceof Element) {
    root.querySelectorAll("*").forEach(localizeAttributes);
  }
}

export function installZhCNLocalization(): void {
  document.documentElement.lang = "zh-CN";

  const run = () => localizeTree(document.body);

  if (document.body) {
    run();
  } else {
    document.addEventListener("DOMContentLoaded", run, { once: true });
  }

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === "characterData") {
        localizeTextNode(mutation.target as Text);
        continue;
      }

      if (mutation.type === "attributes") {
        localizeAttributes(mutation.target as Element);
        continue;
      }

      mutation.addedNodes.forEach(localizeTree);
    }
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: [...ATTRIBUTES_TO_LOCALIZE],
    characterData: true,
    childList: true,
    subtree: true,
  });
}
