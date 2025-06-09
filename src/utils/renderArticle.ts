import DEFAULT_CSS_CONTENT from '@/assets/example/theme-css.txt?raw'
import { codeBlockThemeOptions, colorOptions, fontFamilyOptions, fontSizeOptions, legendOptions, themeMap, themeOptions } from '@/config'
import DOMPurify from 'dompurify'
import { marked } from 'marked'
import { css2json, customCssWithTemplate, customizeTheme } from './'
import { initRenderer } from './renderer'

export interface title {
  url: string
  title: string
  level: number
}

// 文本字体
const theme = themeOptions[2].value
// 文本字体
const fontFamily = fontFamilyOptions[0].value
// 文本大小
const fontSize = fontSizeOptions[2].value
// 主色
const primaryColor = colorOptions[1].value

// 图注格式
const legend = legendOptions[3].value
// 是否开启段落首行缩进
const isUseIndent = false
// 是否统计字数和阅读时间
const isCountStatus = false
// 代码块主题
const codeBlockTheme = codeBlockThemeOptions[23].value
// 是否开启 Mac 代码块
const isMacCodeBlock = true

// 默认样式配置
const cssContentConfig = {
  active: `方案1`,
  tabs: [
    {
      title: `方案1`,
      name: `方案1`,
      // 兼容之前的方案
      content: DEFAULT_CSS_CONTENT,
    },
  ],
}

function getCurrentTab() {
  return cssContentConfig.tabs.find((tab) => {
    return tab.name === cssContentConfig.active
  })!
}

const renderer = initRenderer({
  theme: customCssWithTemplate(
    css2json(getCurrentTab().content),
    primaryColor,
    customizeTheme(themeMap[theme], {
      fontSize: Number(fontSize.replace(`px`, ``)),
      color: primaryColor,
    }),
  ),
  fonts: fontFamily,
  size: fontSize,
  isUseIndent: false,
})

export function codeThemeChange() {
  const cssUrl = codeBlockTheme
  const el = document.querySelector(`#hljs`)
  if (el) {
    el.setAttribute(`href`, cssUrl)
  }
  else {
    const link = document.createElement(`link`)
    link.setAttribute(`type`, `text/css`)
    link.setAttribute(`rel`, `stylesheet`)
    link.setAttribute(`href`, cssUrl)
    link.setAttribute(`id`, `hljs`)
    document.head.appendChild(link)
  }
}

export function renderArticle(mdContent: string) {
  // 确保在渲染前应用代码块主题
  codeThemeChange()
  renderer.reset({
    citeStatus: false,
    legend,
    isUseIndent,
    countStatus: isCountStatus,
  })

  const {
    markdownContent,
    readingTime: readingTimeResult,
  } = renderer.parseFrontMatterAndContent(mdContent)
  const readingTime = readingTimeResult
  let outputTemp = marked.parse(markdownContent) as string

  // 提取标题
  const div = document.createElement(`div`)
  div.innerHTML = outputTemp
  const list = div.querySelectorAll<HTMLElement>(`[data-heading]`)

  const titles = new Array<title>()
  let i = 0
  for (const item of list) {
    item.setAttribute(`id`, `${i}`)
    titles.push({
      url: `#${i}`,
      title: `${item.textContent}`,
      level: Number(item.tagName.slice(1)),
    })
    i++
  }

  outputTemp = div.innerHTML

  outputTemp = DOMPurify.sanitize(outputTemp, {
    ADD_TAGS: [`mp-common-profile`],
  })

  // 阅读时间及字数统计
  outputTemp = renderer.buildReadingTime(readingTimeResult) + outputTemp

  // 去除第一行的 margin-top
  outputTemp = outputTemp.replace(/(style=".*?)"/, `$1;margin-top: 0"`)
  // 引用脚注
  outputTemp += renderer.buildFootnotes()
  // 附加的一些 style
  outputTemp += renderer.buildAddition()

  if (isMacCodeBlock) {
    outputTemp += `
      <style>
        .hljs.code__pre > .mac-sign {
          display: flex;
        }
      </style>
    `
  }

  outputTemp += `
    <style>
      .code__pre {
        padding: 0 !important;
      }

      .hljs.code__pre code {
        display: -webkit-box;
        padding: 0.5em 1em 1em;
        overflow-x: auto;
        text-indent: 0;
      }

      h2 strong {
        color: inherit !important;
      }
    </style>
  `

  const output = renderer.createContainer(outputTemp)

  return { output, readingTime, titles }
}
