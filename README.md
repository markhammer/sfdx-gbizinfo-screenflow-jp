# 法人番号を検索する画面フロー

https://qiita.com/shunkosa/items/6eab319282a64c414d1f

## 開発者向け情報

### パッケージの作成 (初回のみ)

```
sfdx force:package:create --name "法人番号を検索する画面フロー" --packagetype Unlocked --path "force-app"
```

### パッケージバージョンの作成

```
sfdx force:package:version:create --path "force-app" --installationkeybypass --wait 10 --codecoverage
```
