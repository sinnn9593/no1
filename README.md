### プロジェクト名: No1 ポートフォリオサイト

## 概要

このプロジェクトは、いくつかのゲーム（パックマンやスネーク）やDockerとPyQt5を使って開発したカスタム電卓などを紹介する、個人のポートフォリオサイトです。

## 主な機能

- **ランディングページ**: ポートフォリオの紹介、異なるプロジェクトの内容や概略。3Dオブジェクトによるアニメーション。
- **Aboutページ**: 制作者の紹介、過去のプロジェクトや競技プログラミングの成果。
- **Servicesページ**: 提供するサービスの紹介（現在制作中）。
- **Contactフォーム**: ユーザーが制作者に連絡できるフォーム。
- **ゲームセクション**: パックマンやスネークなどのゲーム。
- **電卓**: 絶対値計算機能を搭載したカスタム電卓。

## 目次

1. [インストール](#インストール)
2. [使用方法](#使用方法)
3. [使用技術](#使用技術)
4. [プロジェクト構成](#プロジェクト構成)
5. [貢献方法](#貢献方法)
6. [ライセンス](#ライセンス)
7. [UML図](#uml図)

## インストール

### プロジェクトをローカルで実行するには

1. リポジトリをクローンする:
   ```bash
   git clone https://github.com/sinnn9593/no1.git
   ```
2. 依存関係をインストールする:
   ```bash
   cd no1
   npm install
   ```
3. 開発サーバーを起動する:
   ```bash
   npm run dev
   ```

## 使用方法

- **ランディングページ**: サイトを開くと、ポートフォリオの紹介とプロジェクトの概要が表示されます。
- **ゲーム**: ホームページやナビゲーションメニューからパックマンやスネークのゲームにアクセスできます。
- **電卓**: カスタム電卓は基本的な数学的演算が可能で、将来的に新しい機能が追加される予定です。

## 使用技術

- **React**: ユーザーインターフェースを作成するためのフロントエンドライブラリ。
- **Vite**: React用の高速ビルドツール
- **Framer MotionやThree.js** : 3dのアニメーションUI
- **pygame** : コードの簡略化とpygameによる高機能なUX
- **Docker**: カスタム電卓のためのDocker環境構築。
- **PyQt5**: GUIアプリケーション開発に使用。
  etc...
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

## プロジェクト構成

```
/src
  /components
    HomePage.tsx
    AboutPage.tsx
    ServicesPage.tsx
    ContactForm.tsx
    ThreeModel.tsx
  /assets
    /models1
      scene.gltf
  /styles
    main.css
public/index.html
vite.config.ts
package.json
```

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


###ページ遷移図

```text

[Home]
 ├→ [About Me]
 ├→ [Service]
 ├→ [Contact]
 ├→ [Sample]
 └→ [More Detail]

[About Me]
 └→ [Home]

[Service]
 └→ [Home]

[Contact]
 └→ [Home]

[Sample]
 └→ [Service]  （SampleからServiceへ行ける）

[More Detail]
 └→ [Home]
```



### UIフロー

```text
[Home]
 ├ ボタン「About Me」 → [About Me]
 ├ ボタン「Service」 → [Service]
 ├ ボタン「Contact」 → [Contact]
 ├ ボタン「Sample」 → [Sample]
 └ ボタン「More Detail」 → [More Detail]

[About Me]
 └ ボタン「back」 → [Home]

[Service]
 └ ボタン「back」 → [Home]

[Contact]
 └ ボタン「back」 → [Home]

[More Detail]
 └ ボタン「back」 → [Home]

[Sample]
 ├ ボタン「Back」 → [Home]
 └ ボタン「More」 → [Service]

```




