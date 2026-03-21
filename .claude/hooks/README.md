# フック（Hooks）の学習メモ

フックは Claude Code がツールを呼び出す前後に実行されるシェルコマンドです。
設定は `settings.json` または `settings.local.json` で行います。

## 設定場所

- グローバル: `~/.claude/settings.json`
- プロジェクト: `.claude/settings.json`
- ローカル（git管理外）: `.claude/settings.local.json`

## フックの種類

| フック名 | タイミング |
|---|---|
| `PreToolUse` | ツール実行前 |
| `PostToolUse` | ツール実行後 |
| `Notification` | Claude から通知があったとき |
| `Stop` | Claude がタスクを完了したとき |

## 設定例

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit",
        "hooks": [
          {
            "type": "command",
            "command": "echo 'ファイルが編集されました'"
          }
        ]
      }
    ],
    "Stop": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "say 'Claude finished'"
          }
        ]
      }
    ]
  }
}
```

## 試してみること

- [ ] ファイル編集後に自動でフォーマットを実行する
- [ ] タスク完了時に通知音を鳴らす
- [ ] 特定のコマンド実行前に確認ログを残す
