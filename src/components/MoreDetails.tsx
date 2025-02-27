import { motion } from "framer-motion";

const ServicePage = () => {
  const homeURL = import.meta.env.BASE_URL || '/';
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="container mx-auto px-6 py-12"
    >
      <h1 className="text-3xl font-bold text-center mb-8">Portfolio Site Overview</h1>
      {/* GitHubリンクのセクション */}
      <div className="text-center mt-12">
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
        <p className="text-gray-700">
          本ポートフォリオは、インタラクティブなデザインと技術的な挑戦を重視して構築されました。
          フロントエンドのモダン技術を採用し、拡張性とメンテナンス性を考慮した設計をしています。
        </p>
      </section>

      {/* 使用技術 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">🛠 技術スタック</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li><strong>フロントエンド:</strong> React (TypeScript), Vite</li>
          <li><strong>UI スタイリング:</strong> TailwindCSS, Framer Motion</li>
          <li><strong>3D モデリング:</strong> Three.js, React Three Fiber</li>
          <li><strong>ルーティング:</strong> React Router</li>
          <li><strong>デプロイ環境:</strong> Github Pages</li>
        </ul>
      </section>

      {/* 課題と解決策 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">⚡ 課題と解決策</h2>
        <p className="text-gray-700">開発時に直面した問題と、それに対する解決策を紹介します。</p>
        <ul className="list-disc pl-6 text-gray-700 mt-4">
          <li><strong>ビルド時間の最適化:</strong> Vite を利用し、HMR（ホットリロード）を活用</li>
          <li><strong>3D モデルの負荷軽減:</strong> GLTF ファイルの最適化と lazy loading</li>
          <li><strong>レスポンシブデザイン:</strong> TailwindCSS のユーティリティクラスで適用</li>
        </ul>
      </section>

      {/* パフォーマンス最適化 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">🚀 パフォーマンス最適化</h2>
        <p className="text-gray-700">
          ページの高速化と軽量化を実現するために、以下の技術を適用しました。
        </p>
        <ul className="list-disc pl-6 text-gray-700 mt-4">
          <li>SPAによるページ遷移の高速化</li>
          <li>Framer Motion による最適なアニメーション</li>
          <li>Code Splitting による初回ロードの負担軽減</li>
        </ul>
      </section>

      {/* 今後の展望 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">🔮 今後の展望</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>カスタム電卓のiosでの起動を可能にする</li>
          <li>カスタムフックを活用したコードの整理</li>
          <li>snake gameとpacmanの拡張</li>
          <li>カスタムフックを活用したコードの整理</li>
        </ul>
      </section>

      {/* 戻るボタン */}
      <div className="text-center mt-12">
        <a href={homeURL} className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
          back
        </a>
      </div>
    </motion.div>
  );
};

export default ServicePage;
