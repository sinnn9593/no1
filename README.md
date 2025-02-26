###プロジェクト名: No1 ポートフォリオサイト

#概要
このプロジェクトは、いくつかのゲーム（パックマンやスネーク）やDockerとPyQt5を使って開発したカスタム電卓などを紹介する、個人のポートフォリオサイトです。サイトには使用した技術の紹介や今後の機能追加のためのプラットフォームも含まれています。

## 主な機能:
- **ランディングページ**: ポートフォリオの紹介、異なるプロジェクトのハイライト。
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

#プロジェクトをローカルで実行するには:

1. リポジトリをクローンする:
   git clone https://github.com/username/no1.git
2.依存関係をインストールする:
   cd no1
   npm install
3.開発サーバーを起動する:
   npm run dev
   サイトは http://localhost:3000 でアクセスできます。
#使用方法
  ランディングページ: サイトを開くと、ポートフォリオの紹介とプロジェクトの概要が表示されます。
  ゲーム: ホームページやナビゲーションメニューからパックマンやスネークのゲームにアクセスできます。
  電卓: カスタム電卓は基本的な数学的演算が可能で、将来的に新しい機能が追加される予定です。
#使用技術
 React: ユーザーインターフェースを作成するためのフロントエンドライブラリ。
 Vite: React用の高速ビルドツールおよび開発サーバー。
 Docker: カスタム電卓のためのDocker環境構築。
 PyQt5: GUIアプリケーション開発に使用。
##プロジェクト構成
///////////////////////////////////////////////////////////////////////////////////////////////////

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

/////////////////////////////////////////////////////////////////////////////////////////////////////
##UML図
 #クラス図

classDiagram
  class App {
    +basename: string
    +App()
  }
  
  class Home {
    +ThreeModel: ThreeModel
  }
  
  class About
  class Service
  class Contact
  class MoreDetails
  class Sample

  App --> Home
  App --> About
  App --> Service
  App --> Contact
  App --> MoreDetails
  App --> Sample
  Home --> ThreeModel
  MoreDetails --> Sample
//////////////////////////////////////////////////////////////////////////////////////////////////////////

