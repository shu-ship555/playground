# Claude Code 学習プロジェクト

このディレクトリは Claude Code の機能を学ぶための実験環境です。

## ディレクトリ構成

```
.claude/
├── CLAUDE.md           # このファイル（プロジェクト設定・メモ）
├── skills/             # カスタムスラッシュコマンド（各ディレクトリに SKILL.md）
│   ├── hello/          # サンプルスキル
│   ├── summarize/      # 要約スキル
│   ├── review/         # コードレビュースキル
│   ├── explain/        # コード解説スキル
│   ├── commit/         # コミットスキル
│   └── new-dir/        # 新規ディレクトリ作成スキル
├── hooks/              # フック設定の実験メモ
│   └── README.md
├── examples/           # 実際に試したコードや会話例
│   └── README.md
└── worktrees/          # git worktree の作業ブランチ（自動生成）
```

## 学習トピック

- [ ] スキル（カスタムスラッシュコマンド）の作り方
- [ ] CLAUDE.md によるプロジェクト設定
- [ ] フック（hooks）の活用
- [ ] MCP サーバーの設定
- [ ] メモリシステムの使い方
- [ ] TodoWrite / Plan / Explore エージェントの活用

## メモ

### CLAUDE.md とは
- プロジェクトのルートや任意のディレクトリに置くマークダウンファイル
- Claude Code が起動時に自動で読み込む
- チームのコーディング規約、よく使うコマンド、注意事項などを書く

### スキルとは
- `~/.claude/skills/` または `.claude/skills/` にディレクトリを作り、その中に `SKILL.md` を置く
- `/スキル名` でスラッシュコマンドとして呼び出せる
- プロンプトテンプレートとして機能する

### worktrees とは
- `git worktree` を使って同一リポジトリを複数のディレクトリで同時にチェックアウトする仕組み
- Claude Code がエージェントを `isolation: "worktree"` モードで実行すると、一時的な worktree が自動作成される
- エージェントがファイルを変更しなかった場合は自動でクリーンアップされる
- 変更があった場合は worktree のパスとブランチ名が返される
- メインの作業ブランチを汚さずにサブエージェントに独立した環境を与えられる

```
# worktree の手動操作（参考）
git worktree list              # 一覧表示
git worktree add ../branch-name feature/branch   # 追加
git worktree remove ../branch-name               # 削除
```
