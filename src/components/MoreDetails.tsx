import { motion } from "framer-motion";

const MoreDetails = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="container mx-auto px-6 py-12"
    >
      <h1 className="text-3xl font-bold text-center mb-8">Project Details</h1>

      {/* 概要 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">📌 概要</h2>
        <p className="text-gray-700">
          このプロジェクトは、React を使用して構築したポートフォリオサイトです。
          ゲーム開発、カスタム電卓、競技プログラミングなどの成果を紹介し、
          インタラクティブなデザインを採用しています。
        </p>
      </section>

      {/* 使用技術 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">🛠 使用技術</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li><strong>フロントエンド:</strong> React, TypeScript</li>
          <li><strong>スタイリング:</strong> TailwindCSS, Framer Motion</li>
          <li><strong>3D モデル:</strong> Three.js, React Three Fiber</li>
          <li><strong>ルーティング:</strong> React Router</li>
          <li><strong>ビルド:</strong> Vite</li>
        </ul>
      </section>

      {/* 機能 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">✨ 機能</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>ホームページ: サイト全体の概要を表示</li>
          <li>More Details ページ: 各プロジェクトの詳細を紹介</li>
          <li>3D モデル表示: Three.js による 3D オブジェクトのレンダリング</li>
          <li>カスタム電卓: React を使用した動的な計算機能</li>
        </ul>
      </section>

      {/* セットアップ手順 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">⚙️ セットアップ</h2>
        <div className="bg-gray-100 p-4 rounded-md text-sm">
          <p><strong>1. リポジトリをクローン</strong></p>
          <pre className="bg-gray-200 p-2 rounded-md">
            git clone https://github.com/your-username/your-repo.git
            cd your-repo
          </pre>
          <p className="mt-2"><strong>2. 依存関係をインストール</strong></p>
          <pre className="bg-gray-200 p-2 rounded-md">npm install</pre>
          <p className="mt-2"><strong>3. 開発サーバーを起動</strong></p>
          <pre className="bg-gray-200 p-2 rounded-md">npm run dev</pre>
          <p>ローカル環境で <strong>http://localhost:5173</strong> を開いて確認できます。</p>
        </div>
      </section>

      {/* フォルダ構成 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">📂 フォルダ構成</h2>
        <pre className="bg-gray-100 p-4 rounded-md text-sm">
{`
/src
 ├── components
 │   ├── HomePage.tsx
 │   ├── MoreDetails.tsx
 │   ├── ThreeModel.tsx
 ├── assets
 │   ├── models1
 │   │   ├── scene.gltf
 ├── App.tsx
 ├── main.tsx
`}
        </pre>
      </section>

      {/* 今後の予定 */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">🚀 今後の予定</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>3D モデルのアニメーション強化</li>
          <li>カスタム電卓の履歴機能追加</li>
          <li>競技プログラミングの解説記事の追加</li>
        </ul>
      </section>

      {/* 戻るボタン */}
      <div className="text-center mt-12">
        <a href="/" className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
          戻る
        </a>
      </div>
    </motion.div>
  );
};

export default MoreDetails;
