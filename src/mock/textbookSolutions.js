// ---------------------------------------------------------------------------
// Textbook Solutions 数据源（对应页面 /solutions/，src/pages/solutions.js）
//
// 【以后要加一份新资料，只需两步】
//   1. 把文件（PDF 等）传到 GitHub 仓库 nanomsj/msj-in-PKU，
//      建议按学期/课程存放，例如 26Fall/Probability/ch1-solutions.pdf
//      注意：该仓库必须保持 public，否则访客点开是 404。
//   2. 在下面 textbookSolutions 数组里加一行：
//
//        {
//          title: 'Chapter 1 — Exercises 1.1–1.5',
//          file: '26Fall/Probability/ch1-solutions.pdf',
//        },
//
// 【字段说明】
//   title : 页面上显示的名字，随便写得干净漂亮即可（仓库里的真实文件名不用管）
//   file  : 文件在 msj-in-PKU 仓库中的路径，相对仓库根目录，
//           就是你在仓库首页点进去能看到的那条路径
//   顺序   : 数组顺序 = 页面显示顺序，想置顶就放数组最前面
//   key   : 用 file 作为 key（见 solutions.js），同一 file 只能出现一次
//
// 【改完如何生效】
//   npm run build        # 重新构建
//   然后把 public/ 里的产物推到 nanomsj.github.io 仓库的 main 分支
//
// 【将来想改页面文案】
//   页面标题、AI 声明、空列表提示都在 src/pages/solutions.js 里改。
// ---------------------------------------------------------------------------

export const REPO_RAW_BASE =
  'https://raw.githubusercontent.com/nanomsj/msj-in-PKU/main/';

// 现在资料还没整理好，先留空：页面会显示顶部 AI 声明 + "Materials will be added soon."
export const textbookSolutions = [];
