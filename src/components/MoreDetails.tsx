import { motion } from "framer-motion";

const ServicePage = () => {
  const homeURL = import.meta.env.VITE_BASE_URL || "/";
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="container mx-auto px-6 py-12"
    >
      <h1 className="text-3xl font-bold text-center mb-10">
        Portfolio Site Overview
      </h1>
      {/* GitHubリンクのセクション */}
      <div className="text-center mt-12 mb-20">
        <a
          href="https://github.com/sinnn9593/no1" // 実際のGitHubリポジトリのURLをここに挿入
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-6 py-3 bg-blue-500 text-white text-lg rounded-md hover:bg-blue-600 transition">
            View on GitHub
          </button>
        </a>
      </div>

      {/* 設計思想 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">🎯 設計思想</h2>
        <p className="text-lg text-gray-700">
          本ポートフォリオは、インタラクティブなデザイン,ページ遷移の高速化を重視して構築されました。
          フロントエンドのモダン技術を採用し、拡張性、コンポーネント分割とルーティング設定によるメンテナンス性そして可読性を考慮した設計をしています。
        </p>
      </section>

      {/* 使用技術 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">🛠 技術スタック</h2>
        <ul className="text-lg list-disc pl-6 text-gray-700 space-y-4">
          <li>
            <strong>フロントエンド:</strong> React (TypeScript), Vite
          </li>
          <li>
            <strong>UI スタイリング:</strong> TailwindCSS, Framer Motion
          </li>
          <li>
            <strong>3D モデリング:</strong> Three.js, React Three Fiber
          </li>
          <li>
            <strong>ルーティング:</strong> React Router
          </li>
          <li>
            <strong>デプロイ環境:</strong> Github Pages
          </li>
          <li>
            <strong>バックエンド(コンタクトページ):</strong> Email.js
          </li>
        </ul>
        <p>etc.....</p>
      </section>
      {/* ファイル構成セクション */}
      <h3 className="text-xl font-semibold mb-2">サイトマップ（Sitemap） 📂</h3>
      <pre className="bg-gray-100 p-4 rounded-md mb-6">
        <code>
          {`Home
├── About Me
│      └── Home
├── Service
│      └── Home
├── Contact
│      └── Home
├── Sample Page
│      ├── Home
│      └── Service
├── More Detail
     └── Home

    `}
        </code>
      </pre>
      {/* 課題と解決策 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">📓 課題と解決策</h2>
        <p className="text-lg text-gray-700">
          開発時に直面した問題と、それに対する解決策を紹介します。
        </p>
        <ul className="text-lg list-disc pl-6 text-gray-700 mt-4 space-y-4">
          <li>
            <strong>ビルド時間の最適化:</strong> 決められた時間内で、できる限り開発を進めるため、効率性を考慮し、Vite
            によるホットリロードを活用。ローカルサーバーでの開発をスムーズに行う。
          </li>
          <li>
            <strong>3D モデルの負荷軽減:</strong> GLTF ファイルの最適化と lazy
            loadingを活用。Three.jsを用いたプロジェクト箇所のみコンポーネント分割をし、Suspenseタグで遅延読み込みを実装。
          </li>
          <li>
            <strong>可読性の向上とメンテナンス重視:</strong>
            TailwindCSSを適用し、各コンポーネントやページに関するプロジェクトファイルの量を減少。
          </li>
          <li>
            <strong>あらゆるデバイスからのサイトへのアクセスを予想・準備:</strong>
            レスポンシブデザインを適用し、スマートフォン、タブレット、デスクトップなど、あらゆるデバイスでの閲覧を想定。
            Reactによるコンポーネント設計により、デバイスごとのレイアウトを柔軟に変更可能。(※Home Page以外適用済み)
          </li>
        </ul>
      </section>

      {/* パフォーマンス最適化 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          🚀 パフォーマンスの最適化と3Dオブジェクトによる動的なデザイン
        </h2>
        <p className="text-lg text-gray-700">
          ページの高速化と可読性の向上を実現するために、以下の技術を適用しました。
        </p>
        <ul className="text-lg list-disc pl-6 text-gray-700 mt-4 mb-8">
          <li>SPAによるページ遷移の高速化</li>
          <li>Framer Motion による最適なアニメーション</li>
          <li>コード分割による初回ロードの負担軽減</li>
        </ul>
        <p className="text-lg gray-700">
          Three.js と React Three Fiber を活用し、3D
          オブジェクトを用いたダイナミックなデザインを実現しました。
        </p>
      </section>

      {/* 今後の展望 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">今後の展望</h2>
        <ul className="text-lg list-disc pl-6 text-gray-700 space-y-4">
          <li>ブログ機能の追加</li>
          <li>カスタムフックを活用したコードの整理</li>
          <li>ページ内容の充実</li>
        </ul>
      </section>

      {/* 戻るボタン */}
      <div className="text-center mt-12">
        <a
          href={homeURL}
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          back
        </a>
      </div>
    </motion.div>
  );
};

export default ServicePage;
