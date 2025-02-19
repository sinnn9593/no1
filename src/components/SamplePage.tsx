import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SamplePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="container mx-auto px-6 py-12"
    >
      <h1 className="text-3xl font-bold text-center mb-8">Samples</h1>

      {/* ゲーム＆電卓一覧 */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Pac-Man */}
        <div className="bg-white shadow-md rounded-lg p-4 text-center">
          <img src="/assets/images/pacman.png" alt="Pac-Man" className="mx-auto w-40 h-40 object-cover mb-4" />
          <h2 className="text-xl font-semibold">🕹️ Pac-Man</h2>
          <p className="text-gray-700 mt-2">クラシックな迷路ゲーム。</p>
        </div>

        {/* Snake Game */}
        <div className="bg-white shadow-md rounded-lg p-4 text-center">
          <img src="/assets/images/snakegame.png" alt="Snake Game" className="mx-auto w-40 h-40 object-cover mb-4" />
          <h2 className="text-xl font-semibold">🐍 Snake Game</h2>
          <p className="text-gray-700 mt-2">ヘビを操作してスコアを伸ばそう！</p>
        </div>

        {/* Custom Calculator */}
        <div className="bg-white shadow-md rounded-lg p-4 text-center">
          <img src="/assets/images/calculator.png" alt="Calculator" className="mx-auto w-40 h-40 object-cover mb-4" />
          <h2 className="text-xl font-semibold">🔢 カスタム電卓</h2>
          <p className="text-gray-700 mt-2">React で作った電卓アプリ。</p>
        </div>
      </div>

      {/* 戻るボタン */}
      <div className="text-center mt-12">
        <Link to="/" className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition">
          戻る
        </Link>
      </div>
    </motion.div>
  );
};

export default SamplePage;
