# 部署与维护说明（DEPLOYMENT.md）

> 读者：接管本项目的 AI 或工程师。读完即可独立完成「改代码 → 上线」与排障。状态截至 2026-10-21。

## 1. 架构一句话

Gatsby 3 静态个人网站，线上 https://nanomsj.github.io。
**本机这个项目目录不是 git 仓库**（没有 .git），改动通过一个临时克隆仓库同步推送。
GitHub 仓库 `nanomsj/nanomsj.github.io` 采用双分支结构：`source`（源码 + CI，推它即自动构建部署）、`main`（构建产物存档）。

## 2. 仓库分支

| 分支 | 内容 | 说明 |
|---|---|---|
| `source` | 完整源码（orphan 孤儿分支）+ `.github/workflows/build-and-deploy.yml` + 本文档 | **改完代码推这里 = 自动上线** |
| `main` | 构建产物（`public/` 内容）+ README + LICENSE | 历史上是 Pages 部署源；2026-10-21 起不再部署（其 deploy.yml 已删，见 §8） |
| `master` | 旧历史产物 | 忽略，别动 |
| `ci-logs` | CI 每次运行自动 force-push 的 `build.log` | 诊断用日志通道 |

⚠️ GitHub 对 `source` 会显示"两万行 diff、建议开 PR"——正常现象（orphan 分支与 main 无共同历史）。**不要开 PR、不要合并，直接 dismiss 提示。**

## 3. GitHub 侧前提（已配好，排障先查这里）

- Settings → Pages → Source = **GitHub Actions**
- Settings → Environments → `github-pages` → 分支策略 = 自定义，允许 **main / master / source**
  - **历史根因**：此前只允许 main/master，导致 `source` 的 deploy job 启动 1 秒即被拒，而 build 全绿极具迷惑性。报错藏在 check-run annotation 里：
    `Branch "source" is not allowed to deploy to github-pages due to environment protection rules.`
  - 若再遇「build 全绿、deploy 秒失败」，先查：
    `gh api repos/nanomsj/nanomsj.github.io/environments/github-pages/deployment-branch-policies`
  - 新增允许分支用 **POST**（不是 PUT）：
    `gh api -X POST repos/nanomsj/nanomsj.github.io/environments/github-pages/deployment-branch-policies -f name=分支名`
- 本机 `gh` CLI 已登录（账号 nanomsj），git push 走 gh 凭据助手。

## 4. 日常流程：改代码 → 上线

1. 直接编辑本机项目目录的源码。
2. 完成本地测试（§5，全绿再推）。
3. 同步到 `source` 分支并推送（本机目录无 .git，用临时克隆）：

```powershell
$repo = "$env:TEMP\opencode\deploy-repo"
# 首次才需要 clone：
# git clone https://github.com/nanomsj/nanomsj.github.io.git $repo
& git -C $repo fetch origin
& git -C $repo checkout source
& git -C $repo reset --hard origin/source

$src = 'D:\a-msj\learn_in_practice\personal-page\nanomsj.github.io-main-simplefolio'
# 目录用 robocopy 镜像
foreach ($d in '.github','src','static') {
  robocopy (Join-Path $src $d) (Join-Path $repo $d) /MIR /NFL /NDL /NJH /NJS /NP /R:2 /W:1 | Out-Null
}
# 单个文件必须用 Copy-Item（robocopy 拷"单文件→尚不存在的目标"会误判成目录而失败，且不报错给你看）
foreach ($f in '.eslintrc','.gitignore','.prettierignore','.prettierrc','gatsby-browser.js','gatsby-config.js','gatsby-ssr.js','LICENSE','package.json','package-lock.json','README.md','DEPLOYMENT.md') {
  Copy-Item -Force (Join-Path $src $f) (Join-Path $repo $f)
}
& git -C $repo add -A
& git -C $repo commit -m "改动描述"

# 推送（本机到 github 直连不稳，用重试循环）
for ($i=1; $i -le 10; $i++) {
  & git -C $repo push origin source
  if ($LASTEXITCODE -eq 0) { 'pushed OK'; break }
  Start-Sleep 15
}
```

4. 推送后 Actions 自动跑（约 3 分钟）：

```powershell
& gh run watch ((& gh run list -w 'Build and Deploy to GitHub Pages' -L 1 --json databaseId --jq '.[0].databaseId'))
```

5. 线上生效：https://nanomsj.github.io（部署完成后再确认一次，可能有几分钟缓存）。

## 5. 本地测试清单（推送前必做）

```powershell
# ① lint（用 bin 直调，绕过 husky 执行策略问题），期望 exit 0
& '.\node_modules\.bin\eslint.cmd' src

# ② 构建，期望 exit 0
& npm.cmd run build

# ③ 产物抽查
$h = (Get-Content -Raw public\index.html) -replace '<!-- -->',''
$h -match '<title[^>]*>Shijia Min'        # True
$h -match '<img src="/static/me-'          # True（头像为普通 img，无 gatsby-image 模糊占位）
$h.Contains('Double Major in Business')    # True（学位行）
(Get-ChildItem public\styles*.css).Count   # 1（多于 1 说明有陈旧构建残留，先 npx gatsby clean）
Test-Path public\solutions\index.html      # True
```

安装注意：**必须带 `--legacy-peer-deps`**（react-reveal / react-tilt 与 React 17 的 peer 冲突，npm 11 会直接失败）。
CI 同款安装命令（云端已验证通过）：

```
npm ci --no-audit --no-fund --legacy-peer-deps --registry=https://registry.npmjs.org --replace-registry-host=always
```

（lockfile 的 resolved 指向 npmmirror 镜像，CI 用 `--replace-registry-host=always` 强制回官方源。）

## 6. source 分支同步文件清单

`.github/` `src/` `static/` `.eslintrc` `.gitignore` `.prettierignore` `.prettierrc`
`gatsby-browser.js` `gatsby-config.js` `gatsby-ssr.js` `LICENSE` `package.json`
`package-lock.json` `README.md` `DEPLOYMENT.md`

新增根目录文件时记得同步加进 §4 的拷贝清单。

## 7. CI 工作流说明（source 分支 `.github/workflows/build-and-deploy.yml`）

触发：push `source`，或 Actions 页手动 workflow_dispatch。
权限：`contents: write`（推 ci-logs）、`pages: write`、`id-token: write`。
并发：group `pages`（与 main 旧 workflow 同组，防并发部署互相覆盖）。

- **build job**（9 步）：
  1. checkout → 2. setup-node@v4（node 24 + npm 缓存）→ 3. 打印版本 →
  4. npm ci（§5 参数）→ 5. sharp 自检（`node -e "require('sharp')"`）→
  6. `npm run build | tee /tmp/build.log` →
  7. **Publish build log**（`if: always()`：把 build.log force-push 到 `ci-logs` 分支）→
  8. `actions/configure-pages@v5` → 9. `actions/upload-pages-artifact@v3`（path: `public`）
- **deploy job**（needs build）：environment `github-pages` → `actions/deploy-pages@v4`

构建日志免登录查看：`https://raw.githubusercontent.com/nanomsj/nanomsj.github.io/ci-logs/build.log`

## 8. 旧流程（备选，保留但默认不用）

`static/.github/workflows/deploy.yml`（on push main，upload path `.`）会随构建进入 `public/.github/`。
若需回退旧模式：把 `public/*` 拷到 `main` 根目录（保留 README.md、LICENSE）并推送 → workflow 文件随之回到 main → 自动部署。
**2026-10-21 从 main 删除该文件的原因**：main 上任何推送（比如网页改 README）都会用仓库里的旧产物重新部署，可能覆盖新 CI 刚部署的正确版本。源码里的 `static/.github` 副本保留，仅供回退时使用。

## 9. 已知坑（务必看）

- **PowerShell 5.1**：没有三元运算符；`npm`/`npx`/`eslint` 要写 `npm.cmd` 等可执行形式；`"$i: ..."` 会解析失败需 `"$($i): ..."`；`git show x > file` 重定向会产生 UTF-16（比对哈希前先 `Out-File -Encoding utf8` 或直接管道）；中文经命令行输出会乱码。
- **robocopy 单文件坑**：`robocopy src\file.txt dst\file.txt` 当目标文件不存在时会被当成目录复制并报"目录路径无效"（exit 16），输出被吞掉后表现为"文件根本没拷进去"。单文件一律 `Copy-Item -Force`，robocopy 只用于目录（见 §4）。
- **fetch refspec 被窄化**：若 `git config remote.origin.fetch` 只剩 `+refs/heads/main:...`，fetch 就不会更新 `origin/source`，`reset --hard origin/source` 会报 `unknown revision`。修复：`git config remote.origin.fetch "+refs/heads/*:refs/remotes/origin/*"`。
- **网络**：本机到 github.com 直连间歇 reset（push 用 §4 重试循环）；api.github.com 匿名 60 次/时（共享出口 IP 会 403）→ 一律用已登录 `gh`（5000 次/时）；Actions 日志网页可能被墙 → 用 `gh run view --log-failed`。
- **GITHUB_TOKEN 推的提交不触发其他 workflow**（防递归）——ci-logs 分支更新不产生额外 run，正常。
- React SSR 产物含 `<!-- -->` 注释占位，字符串断言前先替换。
- 改 `static/` 里的图片/图标必须重建；改完图标确认 `public/favicon.png`、`public/apple-touch-icon.png` 存在。
- 构建前若产物杂乱先 `& npx.cmd gatsby clean`。

## 10. 接手第一天（只读检查）

```powershell
& gh auth status                      # 应显示 nanomsj；否则 gh auth login（HTTPS + 浏览器）
& gh run list -L 5                    # 最新 "Build and Deploy to GitHub Pages" 应为 success
```

打开 https://nanomsj.github.io 检查：首页无 Hero 大图区、学位两行齐全、头像清晰无模糊占位、`/solutions/` 可打开。
排障：`gh run view <id> --log-failed`；若报 `log not found`（偶发），改看 jobs/annotations：

```powershell
$j = (& gh api repos/nanomsj/nanomsj.github.io/actions/runs/<id>/jobs | Out-String | ConvertFrom-Json)
$j.jobs | ForEach-Object { $_.name + ' -> ' + $_.conclusion }
& gh api repos/nanomsj/nanomsj.github.io/check-runs/<deploy_job_id>/annotations
```

## 11. 状态快照（2026-10-21）

- 本地测试：eslint 0 错；`npm run build` ✓；CI 同参模拟（全新检出 source → npm ci → build）产物 `index.html` SHA256 与线上发布版**完全一致** ✓；workflow YAML 校验 ✓（build 9 步 + deploy）。
- CI 二分：install ✓、build ✓、upload artifact ✓、deploy ✗ → 根因 = github-pages 环境缺 source 分支策略（§3，已用 POST 补上）。
- **端到端验证通过**：source 推送 `dacb806` → run `39610953641` build 9 步 + deploy 全绿；Pages `status=built`（build_type=workflow）；线上首页与 `/solutions/` 均 200。
- main 已删除旧 `deploy.yml`（提交 `c78dd68`，基于你在网页上改的 README `ac6662f`）；源码里的 `static/.github` 副本保留供回退。至此日常发布 = 改源码 → 同步 source → push，自动上线。
- 网站内容近期变更：删除 Hero、学位行（B.S. Biostatistics + 双学位 Business Administration）、Education 卡片间距/Experience 外链图标修复、返回首页跳过入场动画、`/solutions/` 页、标题 Shijia Min、favicon、README 致谢 bchiang7/v4 配色（MIT）。
