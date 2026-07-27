type DynamicRule = {
  pattern: RegExp;
  replace: (match: RegExpMatchArray) => string;
};

const TEXT_TRANSLATIONS: Record<string, string> = {
  About: "关于",
  "Accent Color": "强调色",
  "Active Icon": "激活图标",
  Active: "当前",
  "Add Current Position": "添加当前位置",
  "Add Zone": "添加区域",
  Advanced: "高级",
  "Advanced Page": "高级页面",
  "All Pages": "所有页面",
  "Always on Top": "窗口置顶",
  "Allow click speeds up to 1000 CPS (may affect performance).":
    "允许点击速度最高达到 1000 CPS（可能影响性能）。",
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
  Blacklist: "黑名单",
  "Blocked by Alt+Tab": "因 Alt+Tab 被阻止",
  "Blocked by process list": "因进程列表被阻止",
  Browse: "浏览",
  "Blur effect behind the panel.": "面板后方的模糊效果。",
  "Buy Me a Coffee at ko-fi.com": "在 ko-fi.com 请我喝杯咖啡",
  Cancel: "取消",
  "Check failed": "检查失败",
  "Check for Update": "检查更新",
  "Checking...": "检查中...",
  "Choose between dark and light mode.": "在深色和浅色模式之间选择。",
  "Change how the auto clicker runs.": "更改自动点击器的运行方式。",
  "Changes how fast the autoclicker clicks.": "更改自动点击器的点击速度。",
  Click: "点击",
  "Click speed is disabled in Hold mode": "按住模式下无法设置点击速度",
  "Clicker Type": "点击器类型",
  "Clear hotkey": "清除热键",
  "Clear key": "清除按键",
  "Clear all session statistics and usage history.":
    "清除所有会话统计和使用历史。",
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
  "Clicks per point for new entries.": "新条目的每点点击次数。",
  Close: "关闭",
  "Confirm?": "确认？",
  "Control how the taskbar and tray icon looks.":
    "控制任务栏和托盘图标的外观。",
  "Corner Stop": "角落停止",
  Confirm: "确认",
  "Corner failsafe": "角落安全停止",
  "Custom stop zone failsafe": "自定义停止区域安全停止",
  "Custom Stop Zones": "自定义停止区域",
  Dark: "深色",
  Day: "天",
  "Default values for newly picked click points.": "新拾取点击点的默认值。",
  "Default Clicks": "默认点击次数",
  "Default Radius": "默认半径",
  Delete: "删除",
  Diagnostics: "诊断",
  Disabled: "已禁用",
  "Disabled while clicking": "点击运行时不可用",
  "Disable Always on Top": "关闭窗口置顶",
  "Double Click": "双击",
  Draw: "绘制",
  Duplicate: "复制",
  Duration: "间隔",
  "Duty Cycle": "按下占空比",
  Edit: "编辑",
  "Edit Hotkey": "编辑热键",
  "Edge failsafe": "边缘安全停止",
  "Edge Stop": "边缘停止",
  Enable: "启用",
  "Enable Corner Stop to edit the corner failsafe hitboxes.":
    "启用角落停止后可编辑角落安全区域。",
  "Enable Edge Stop to edit the edge failsafe hitboxes.":
    "启用边缘停止后可编辑边缘安全区域。",
  "Enable Process List to manage application rules.":
    "启用进程列表后可管理应用规则。",
  "Enable Speed Randomization to edit how much the app randomizes your click timing.":
    "启用速度随机化后可调整点击时间的随机程度。",
  "Enable Always on Top": "开启窗口置顶",
  "Enable extended click speed limit?": "启用扩展点击速度限制？",
  Enabled: "已启用",
  "Export preset": "导出预设",
  "Extended Click Speed Limit": "扩展点击速度限制",
  "Failed to establish sub-millisecond Windows timer resolution.":
    "无法建立亚毫秒级 Windows 计时器精度。",
  Footer: "底栏",
  General: "常规",
  Global: "全局",
  "Go to presets": "前往预设",
  "Hide Changes": "隐藏变更",
  Hit: "点击",
  Hold: "按住",
  "hold duration": "按下时长",
  Hotkey: "热键",
  Hour: "小时",
  "Icon Color": "图标颜色",
  "Icon Theme": "图标主题",
  Import: "导入",
  Individual: "单独设置",
  Info: "信息",
  Interval: "间隔",
  Keyboard: "键盘",
  "Keyboard mode requires a key to be selected": "键盘模式需要选择一个按键",
  Keybinds: "快捷键",
  "Keep the window above others.": "让窗口保持在其他窗口上方。",
  Left: "左键",
  Light: "浅色",
  Limits: "限制",
  Maintenance: "维护",
  Middle: "中键",
  Minimize: "最小化",
  "Minimize to Tray": "最小化到系统托盘",
  "Minimize to the system tray instead of the taskbar.":
    "最小化到系统托盘，而不是任务栏。",
  Minute: "分钟",
  Mode: "模式",
  Modified: "已修改",
  Mouse: "鼠标",
  "No click points yet": "还没有点击点",
  "No preset active": "未启用预设",
  "No session data yet.": "暂无会话数据。",
  "No processes found. Click Refresh.": "未找到进程。请点击刷新。",
  "No saved presets.": "没有已保存的预设。",
  "No update found": "未发现更新",
  "No zones yet": "还没有区域",
  Off: "关",
  On: "开",
  "Open Folder": "打开文件夹",
  "Open the window at its last position on startup.":
    "启动时在上次的位置打开窗口。",
  "Page Style": "页面样式",
  "Panel Blur": "面板模糊",
  "Panel Opacity": "面板透明度",
  "Path or URL to a background image.": "背景图片的路径或 URL。",
  Pause: "暂停",
  Paused: "已暂停",
  "Per Click": "每次点击",
  "Preset name": "预设名称",
  Presets: "预设",
  "Process List": "进程列表",
  Quit: "退出",
  Rate: "频率",
  "Randomization radius for new entries.": "新条目的随机半径。",
  "Randomizes your click speed by the given percentage.":
    "按给定百分比随机化点击速度。",
  Refreshing: "刷新中",
  "Refreshing...": "刷新中...",
  Remove: "移除",
  "Require exact modifier keys for hotkeys.": "热键需要精确匹配修饰键。",
  "Remember Window Position": "记住窗口位置",
  Rename: "重命名",
  Reset: "重置",
  "Reset All Settings": "重置所有设置",
  "Reset Usage Data": "重置使用数据",
  "Reset all settings or usage data.": "重置所有设置或使用数据。",
  "Reset all settings": "重置所有设置",
  "Reset all settings to their defaults.": "将所有设置恢复为默认值。",
  "Reset usage data": "重置使用数据",
  "Restart to Apply Update": "重启以应用更新",
  Right: "右键",
  "Run on Startup": "开机自启",
  Save: "保存",
  "Save and load presets.": "保存和加载预设。",
  "Save and restore to quickly switch configurations.":
    "保存并恢复配置，以便快速切换。",
  "Save New Preset": "保存新预设",
  Second: "秒",
  "Select the mouse button or keyboard key the autoclicker clicks.":
    "选择自动点击器要点击的鼠标按键或键盘按键。",
  "Set a keyboard shortcut for each page. Press the key you want to bind.":
    "为每个页面设置快捷键。按下你想绑定的按键。",
  Settings: "设置",
  "Settings Page": "设置页面",
  "Show a notification when the auto clicker stops.":
    "自动点击器停止时显示通知。",
  "Show Changes": "显示变更",
  "Show different icon when clicker is active.": "点击器激活时显示不同图标。",
  "Show the status bar at the bottom of the window.": "在窗口底部显示状态栏。",
  "Show the stop zone boundaries.": "显示停止区域边界。",
  "Shows active preset, version, and stop reasons.":
    "显示当前预设、版本和停止原因。",
  Simple: "简洁",
  "Simple Page": "简洁页面",
  "Something went wrong": "出错了",
  "Speed Randomization": "速度随机化",
  Start: "启动",
  "Start clicking when the app opens.": "应用启动时开始点击。",
  "Start Picking": "开始拾取",
  Startup: "启动",
  Stop: "停止",
  "Stop automatically after a set number of clicks or time.":
    "达到设定点击次数或时间后自动停止。",
  "Stop clicking based on the active application.":
    "根据当前活动应用停止点击。",
  "Stop clicking when specific applications are in focus.":
    "当指定应用获得焦点时停止点击。",
  "Stop clicking when switching to another window.":
    "切换到其他窗口时停止点击。",
  "Stop when complete": "完成后停止",
  "Status Bar": "状态栏",
  "Stop Hitbox Overlay": "停止区域叠加层",
  "Stop Reason Alert": "停止原因提醒",
  "Stop on Alt+Tab": "Alt+Tab 时停止",
  Stopped: "已停止",
  "Strict Hotkey Modifiers": "严格热键修饰键",
  "Stopped from UI": "从界面停止",
  "Stopped from hotkey": "通过热键停止",
  "Stopped from hold hotkey": "松开按住热键后停止",
  "Stopped from toggle": "通过切换停止",
  "Support Me": "支持我",
  "Support me on Ko-fi": "在 Ko-fi 上支持我",
  "Taskbar Icon": "任务栏图标",
  "The primary accent color.": "主要强调色。",
  Theme: "主题",
  "Theme & Accent": "主题与强调色",
  "Time Limit": "时间限制",
  "This will allow click speeds beyond the default limit. This may affect performance.":
    "这会允许超过默认限制的点击速度，可能会影响性能。",
  "This will clear all session statistics and usage history. This action cannot be undone.":
    "这会清除所有会话统计和使用历史。此操作无法撤销。",
  "This will reset all settings to their default values. This action cannot be undone.":
    "这会将所有设置重置为默认值。此操作无法撤销。",
  Time: "时间",
  to: "到",
  Toggle: "切换",
  "Try again": "重试",
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
  Update: "更新",
  "Up / Down": "上移/下移",
  "Use accent color or default icon colors.": "使用强调色或默认图标颜色。",
  "Use one style for all pages, or customize each page individually.":
    "为所有页面使用同一套样式，或分别自定义每个页面。",
  Version: "版本",
  "Version and project links.": "版本与项目链接。",
  "View or export your diagnostics.": "查看或导出诊断信息。",
  "When enabled, the clicker stops after one full pass through all click points. When disabled, it loops through the list endlessly.":
    "启用后，点击器完成所有点击点的一轮后停止。关闭后会不断循环列表。",
  "Whitelist mode has no entries selected": "白名单模式没有选择任何条目",
  Whitelist: "白名单",
  "Whitelist only allows checked apps. Blacklist blocks them.":
    "白名单仅允许勾选的应用；黑名单会阻止它们。",
  "Which themed icons to use. Auto follows app theme.":
    "选择要使用的主题图标。自动模式会跟随应用主题。",
  "Working...": "处理中...",
  "Your logs & crash reports": "你的日志与崩溃报告",
  Zones: "区域",
  "Zones Page": "区域页面",
  "above, then click": "上方，然后点击",
  "above, then right-click anywhere on screen to add a new click point.":
    "上方，然后在屏幕任意位置右键单击以添加新的点击点。",
  dark: "深色",
  light: "浅色",
  theme: "跟随主题",
  default: "默认",
  auto: "自动",
  whitelist: "白名单",
  blacklist: "黑名单",
  clicks: "次",
  "on a row to define its area on screen.": "所在行来定义它在屏幕上的区域。",
  "Draw zones on screen. The clicker stops, pauses, or starts whenever your cursor moves inside a zone.":
    "在屏幕上绘制区域。当光标进入区域时，点击器会停止、暂停或启动。",
  "Choose a list of spots on your screen to click one after another. Each spot will use the speed and settings you chose. Choose just one spot if you want to click the exact same place over and over.":
    "选择屏幕上的一组位置并依次点击。每个位置都会使用你选择的速度和设置。如果想反复点击同一个位置，只保留一个点即可。",
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
    pattern: /^(.+) Interval$/,
    replace: ([, value]) => `${value} 间隔`,
  },
  {
    pattern: /^(\d+) clicks per (second|minute|hour|day)$/,
    replace: ([, count, unit]) => {
      const unitText: Record<string, string> = {
        second: "秒",
        minute: "分钟",
        hour: "小时",
        day: "天",
      };
      return `每${unitText[unit]} ${count} 次`;
    },
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
  const normalized = segment.replace(/\s+/g, " ");
  const direct =
    TEXT_TRANSLATIONS[segment] ??
    PLACEHOLDER_TRANSLATIONS[segment] ??
    TEXT_TRANSLATIONS[normalized] ??
    PLACEHOLDER_TRANSLATIONS[normalized];
  if (direct) {
    return direct;
  }

  for (const rule of DYNAMIC_RULES) {
    const match = normalized.match(rule.pattern);
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
