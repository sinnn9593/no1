import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const Sample = () => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="container mx-auto px-6 py-12 min-h-screen overflow-y-auto"
    >
      <h1 className="text-4xl font-bold text-center mb-8">Samples</h1>

      {/* ゲーム＆電卓一覧 */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Pac-Man */}
        <div className="bg-yellow-100 shadow-md rounded-lg p-10 text-center min-h-[500px]">
          <img src="src/assets/models1/pac-man.png" alt="pac-man" className="mx-auto w-40 h-40 object-cover mb-4" />
          <h2 className="text-2xl font-semibold">🕹️ Pac-Man</h2>
          <p className="text-lg text-gray-700 mt-2">クラシックな迷路ゲーム。</p>
          <h3 className="mt-4 text-xl font-bold">🎮 遊び方</h3>
          <p className="text-base">Pac-Manは、矢印キーを使って上下左右に移動できます。迷路内に散らばるドットをすべて食べると、ステージクリアとなります。敵のゴーストたちに捕まるとミスになりますが、迷路内にあるパワーエサを食べると一定時間無敵になり、ゴーストを捕まえて倒すことができます。</p>
          <h3 className="mt-4 text-xl font-bold">🧩 豆知識</h3>
          <p className="text-base">ゲームの敵キャラにはそれぞれ異なるAIパターンがあり、特定のルートで動きます。これを覚えると攻略しやすくなります！</p>
        </div>

        {/* Snake Game */}
        <div className="bg-green-100 shadow-md rounded-lg p-10 text-center min-h-[500px]">
          <img src="src/assets/models1/snake.png" alt="Snake Game" className="mx-auto w-40 h-40 object-cover mb-4" />
          <h2 className="text-2xl font-semibold">🐍 Snake Game</h2>
          <p className="text-lg text-gray-700 mt-2">ヘビを操作してスコアを伸ばそう！</p>
          <h3 className="mt-4 text-xl font-bold">🎮 遊び方</h3>
          <p className="text-base">Snake Gameでは、矢印キーを使ってヘビを操作します。果物を食べるとヘビが成長し、スコアが上がります。しかし、壁や自分の体にぶつかるとゲームオーバーになるため、慎重に操作することが重要です。</p>
          <h3 className="mt-4 text-xl font-bold">🧩 豆知識</h3>
          <p className="text-base">ヘビの成長が進むと移動スペースが狭くなり、難易度が上がります。次の動きを計画しながらプレイすると高得点を狙いやすくなります！</p>
        </div>

        {/* Custom Calculator */}
        <div className="bg-blue-100 shadow-md rounded-lg p-10 text-center min-h-[500px]">
          <img src="src/assets/models1/calculator.png" alt="Calculator" className="mx-auto w-40 h-40 object-cover mb-4" />
          <h2 className="text-2xl font-semibold">🔢 カスタム電卓</h2>
          <p className="text-lg text-gray-700 mt-2">Reactで作った電卓アプリ。</p>
          <h3 className="mt-4 text-xl font-bold">🛠️ 使い方</h3>
          <p className="text-base">カスタム電卓は基本的な四則演算（加算、減算、乗算、除算）に加え、特定の数学的機能を備えています。ボタンをクリックするだけで計算でき、直感的に操作できます。</p>
          <h3 className="mt-4 text-xl font-bold">📝 特徴</h3>
          <p className="text-base">この電卓はカスタマイズ可能で、新しい計算機能を追加することができます。例えば、絶対値計算や三角関数など、ニーズに応じて拡張が可能です。</p>
        </div>
      </div>

      {/* 戻るボタン */}
      <div className="text-center mt-12">
        <Link to="/service">
          <button className="px-6 py-3 bg-gray-500 text-white text-lg rounded-md hover:bg-gray-600 transition">More</button>
        </Link>
        <Link to="/" className="px-6 py-3 bg-gray-500 text-white text-lg rounded-md hover:bg-gray-600 transition ml-4">
          back
        </Link>
      </div>
    </motion.div>
  );
};

export default Sample;
