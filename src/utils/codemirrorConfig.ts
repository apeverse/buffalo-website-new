import CodeMirror from 'codemirror'

// codemirror 相关依赖：样式、模式、插件
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/xq-light.css'
import 'codemirror/theme/darcula.css'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/markdown/markdown'
import 'codemirror/addon/edit/closebrackets'
import 'codemirror/addon/edit/matchbrackets'
import 'codemirror/addon/selection/active-line'
import 'codemirror/addon/hint/show-hint'
import 'codemirror/addon/hint/css-hint'
import 'codemirror/addon/search/search' // 搜索功能
import 'codemirror/addon/search/searchcursor'
import 'codemirror/addon/dialog/dialog' // 搜索替换功能
import 'codemirror/addon/dialog/dialog.css'

export default CodeMirror
