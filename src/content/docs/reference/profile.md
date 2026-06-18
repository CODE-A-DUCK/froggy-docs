---
title: 主頁查詢
description: 使用 Froggy 快速查詢 Steam、YouTube 和 HOI4 玩家/頻道主頁
---

Froggy 提供三種主頁查詢功能，讓你可以在 Discord 直接查看 Steam、YouTube 和 Hearts of Iron IV 的詳細資訊

---

## 1. Steam 主頁查詢
用戶可以在 Discord 文字頻道輸入 `/steam steamid` 指令查詢指定 Steam 玩家的主頁資訊，當中包括玩家的昵稱、頭像、頭像框、Steam64 ID、展示徽章、游戲庫等資訊。

請注意，Steam 主頁查詢功能需要玩家的 Steam 個人資料設置為公開才能正常使用。

同時，玩家需要輸入正確的 Steam64 ID、自定義網址名稱或完整網址（非檔案名稱/profile name）。

### 支援的輸入方式
- Steam64 ID（17 位數字）
- 自定義網址名稱（`id/` 後面的名稱）
- 完整 Steam 個人檔案網址

### 可查詢的資訊
- 玩家暱稱、頭像、頭像框
- Steam64 ID、帳號建立時間
- 展示徽章、徽章總數
- 擁有遊戲數量、總遊玩時數
- 最近遊玩與最常玩的遊戲

![Steam 主頁查詢範例](/src/content/img/steam1.jpg)

> `/steam` 指令示例（以開發者帳號為例）

> Steam 個人資料必須設為**公開**，否則無法查詢到資訊。
---

## 2. YouTube 主頁查詢
透過在文字頻道輸入 `/youtube channel` 指令，用戶可以查詢指定 YouTube 頻道的主頁資訊，包括頻道名稱、頭像、訂閲數目、觀看總數、影片數量等等。

當中 `channel` 參數可以是頻道 ID、頻道名稱（@）或頻道完整網址。

### 支援的輸入方式
- `@handle`（例如 `@mrbeast`）
- 頻道 ID
- 完整 YouTube 頻道網址

### 可查詢的資訊
- 頻道名稱、頭像
- 訂閱者數量
- 觀看總數、影片數量
- 頻道簡介
- 最新上傳的 3 部影片縮圖

![YouTube 主頁查詢範例](/src/content/img/youtube1.jpg)

> `/youtube` 指令示例
---

## 3. Hearts of Iron IV 主頁查詢

透過在文字頻道輸入 `/hoi4profile steamid` 指令，用戶可以查詢指定 HOI4(鋼鐵雄心4) 的玩家主頁資訊，包括玩家名稱、頭像、Steam ID、成就數、總游玩時數等等。

### 支援的輸入方式
- Steam64 ID
- Steam 自定義網址名稱
- 完整 Steam 個人檔案網址

### 可查詢的資訊
- 玩家名稱、頭像
- Steam ID
- 成就數量
- 總遊玩時數
- 其他 HOI4 相關統計

![HOI4 主頁查詢範例](/src/content/img/hoi1.jpg)

> `/hoi4profile` 指令示例
---

## 總結

| 指令            | 平台                  | 主要查詢內容                     
|-----------------|-----------------------|--------------------------------
| `/steam`        | Steam                 | 玩家檔案、遊戲時數、徽章         
| `/youtube`      | YouTube               | 頻道訂閱數、觀看數、最新影片    
| `/hoi4profile`  | Hearts of Iron IV     | 成就、遊玩時數                 

---
