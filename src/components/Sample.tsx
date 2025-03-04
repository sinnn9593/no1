import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Sample = () => {
  const snakeUrl = `${import.meta.env.VITE_BASE_URL || "/"}assets/models1/snake.png`;
  const packmanUrl = `${import.meta.env.VITE_BASE_URL || "/"}assets/models1/pac-man.png`;
  const calculatorUrl = `${import.meta.env.VITE_BASE_URL || "/"}assets/models1/calculator.png`;
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="container mx-auto px-6 py-12 min-h-screen overflow-y-auto"
    >
      <h1 className="text-4xl font-bold text-center mb-45">Samples</h1>

      {/* ゲーム＆電卓一覧 */}
      <div className="grid md:grid-cols-3 gap-8 mb-45">
        {/* Pac-Man */}
        <div className="bg-yellow-100 shadow-md rounded-lg p-10 text-center min-h-[500px]">
          <img
            src = {packmanUrl}
            alt="pac-man"
            className="mx-auto w-40 h-40 object-cover mb-4"
          />
          <h2 className="text-2xl font-semibold">🕹️ Pac-Man</h2>
          <p className="text-lg text-gray-700 mt-2">クラシックな迷路ゲーム。</p>
          <h3 className="mt-4 text-xl font-bold">🎮 遊び方</h3>
          <p className="text-base">
            Pac-Manは、矢印キーを使って上下左右に移動できます。迷路内に散らばるドットをすべて食べると、ステージクリアとなります。
          </p>
          <h3 className="mt-4 text-xl font-bold">📅 予定</h3>
          <p className="text-base">
            このゲームでは、自動迷路生成アルゴリズムを実装しているため、ステージの通路が一方通行になりがちです。そのためワープ機能の追加や、敵キャラの行動パターンの改善を予定しています。
          </p>
          <h3 className="mt-4 text-xl font-bold">🧩 Tips</h3>
          <p className="text-base">
            ゲームの敵キャラにはそれぞれ異なる行動パターンがあり、特定のルートで動きます。これを覚えると攻略しやすくなります
          </p>
        </div>

        {/* Snake Game */}
        <div className="bg-green-100 shadow-md rounded-lg p-10 text-center min-h-[500px]">
          <img
            src={snakeUrl}
            alt="Snake Game"
            className="mx-auto w-40 h-40 object-cover mb-4"
          />
          <h2 className="text-2xl font-semibold">🐍 Snake Game</h2>
          <p className="text-lg text-gray-700 mt-2">
            ヘビを操作してスコアを伸ばそう！
          </p>
          <h3 className="mt-4 text-xl font-bold">🎮 遊び方</h3>
          <p className="text-base">
            Snake
            Gameでは、矢印キーを使ってヘビを操作します。果物を食べるとヘビが成長し、スコアが上がります。しかし、壁や自分の体にぶつかるとゲームオーバーになるため、慎重に操作することが重要です。
          </p>
          <h3 className="mt-4 text-xl font-bold">📅 予定</h3>
          <p className="text-base">
            このゲームは、スコアボードや難易度設定などの機能を追加する予定です。また拡張機能として、ヘビの色や背景色を変更できるようにする予定です。
          </p>
          <h3 className="mt-4 text-xl font-bold">🧩 Tips</h3>
          <p className="text-base">
            ヘビの成長が進むと移動スペースが狭くなり、難易度が上がります。次の動きを計画しながらプレイすると高得点を狙いやすくなります！
          </p>
        </div>

        {/* Custom Calculator */}
        <div className="bg-blue-100 shadow-md rounded-lg p-10 text-center min-h-[500px]">
          <img
            src= {calculatorUrl}
            alt="Calculator"
            className="mx-auto w-40 h-40 object-cover mb-4"
          />
          <h2 className="text-2xl font-semibold">🔢 カスタム電卓</h2>
          <p className="text-lg text-gray-700 mt-2">
            Pythonで作った電卓アプリ。
          </p>
          <h3 className="mt-4 text-xl font-bold">🛠️ 説明</h3>
          <p className="text-base">
            カスタム電卓は、２つの数字の差を出することに特化したデスクトップアプリです。特にお釣りの計算などに便利です。数字を入力し、ボタンを押すとお釣りが自動的に出力されます。
          </p>
          <h3 className="mt-4 text-xl font-bold">📅 予定</h3>
          <p className="text-base">
            この電卓は、IOSなどのPC以外でも使えるように拡張する予定です。
          </p>
          <h3 className="mt-4 text-xl font-bold">🧩 Tips</h3>
          <p className="text-base">
            この電卓は、急にお釣りを計算しないといけないときに便利です。通常の電卓であれば、四則演算やそのほかにも小数点を含む計算やルートなど多岐にわたりますが、このデスクトップアプリは、差を取ることだけに特化しているので、思わぬボタンの打ち間違いなどをふせぐことができます。また上下の数字を入力する欄の数字を反転させても、絶対値を返すので、問題なく求めていた結果を返します。
          </p>
        </div>
      </div>

      {/* 戻るボタン */}
      <div className="text-center mt-12">
        <Link to="/service">
          <button className="px-6 py-3 bg-gray-500 text-white text-lg rounded-md hover:bg-gray-600 transition">
            More
          </button>
        </Link>
        <Link
          to="/"
          className="px-6 py-3 bg-gray-500 text-white text-lg rounded-md hover:bg-gray-600 transition ml-4"
        >
          back
        </Link>
      </div>
    </motion.div>
  );
};

export default Sample;
