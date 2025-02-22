import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="container mx-auto px-6 py-12 min-h-screen overflow-y-auto"
    >
      <h1 className="text-4xl font-bold text-center mb-8">Services</h1>

      {/* Snake Game Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">🐍 Snake Game - 技術解説</h2>

        <h3 className="text-xl font-semibold mb-2">アーキテクチャ</h3>
        <p className="text-lg text-gray-700 mb-6">
          Snake Gameは、**イベント駆動型アーキテクチャ**を採用しています。ゲーム内のすべてのアクション（ヘビの移動、果物の食べる、ゲームオーバー判定など）はユーザーの入力（キーボードの矢印キー）に基づいています。このため、ゲーム状態は各ユーザーアクションに応じて更新され、各フレームで描画が行われます。Reactのコンポーネントライフサイクルを活用し、**状態管理**を効率的に行います。
        </p>

        <h3 className="text-xl font-semibold mb-2">技術スタック</h3>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>HTML5 Canvas:</strong> ゲームの描画にはCanvas APIを使用します。ヘビの移動、果物の位置、スコアボードなど、全ての描画はCanvasで行われ、リアルタイムで更新されます。</li>
          <li><strong>JavaScript (ES6+):</strong> ゲームのロジックは、最新のJavaScript（ES6）を使用して非同期処理やイベント駆動型で実装されます。非同期処理は`setInterval`や`requestAnimationFrame`を使い、描画や状態更新を定期的に行います。</li>
          <li><strong>CSS:</strong> スタイルの基本的な部分はCSSを使用していますが、ゲーム本体における動的な描画処理はすべてCanvas上で行われます。</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">ゲームロジックと設計パターン</h3>
        <p className="text-lg text-gray-700 mb-6">
          ゲームのロジックは**状態管理**に基づいています。ヘビの各セグメントの位置、果物の位置、ゲームの進行状態（ゲームオーバー、スコアなど）をすべて管理することで、ゲームの状態遷移をスムーズに行います。**状態遷移**は、ヘビの移動や果物の摂取、衝突判定を反映する形で行われます。ヘビの移動は、**配列（リスト）を使った管理**により実現しています。ヘビの位置は配列として管理され、ヘビの頭が新たに食べ物を摂取するごとに配列に新しい座標が追加されます。
        </p>

        <h3 className="text-xl font-semibold mb-2">設計パターンとアルゴリズム</h3>
        <p className="text-lg text-gray-700 mb-6">
          ゲーム内で最も重要な設計パターンの一つは**コレクションパターン**です。ヘビの各セグメントはリスト（配列）として管理され、リストの先頭がヘビの頭となり、最後尾が尻尾です。これにより、ヘビの動きがリストの末尾に新しい座標を追加する形で簡単に管理できるようになっています。ゲームオーバー判定は、配列内で自身の位置を確認することで実装されています。また、ゲーム速度（スネークの移動速度）は、時間経過やゲームの進行度に応じて調整されます。これにより、ゲームが進むごとにプレイヤーの難易度が上がり、スリリングなプレイを提供します。
        </p>

        <h3 className="text-xl font-semibold mb-2">AIと難易度設定</h3>
        <p className="text-lg text-gray-700 mb-6">
          ゲーム内での**難易度設定**は、ヘビの成長速度やゲームスピードの調整によって行われます。また、ヘビが成長するごとに移動可能な空間が狭くなるため、次第にゲームの難易度が上がります。衝突判定や果物の位置の生成は、ランダムに行われることで、プレイヤーが戦略的に動けるように設定されています。難易度が上がるごとにプレイヤーはより慎重に操作する必要があり、スコアが伸びることで達成感を得ることができます。
        </p>

        <div className="text-center mb-6">
          <img
            src="/assets/models1/snake.png"
            alt="Snake Game"
            className="mx-auto w-60 h-60 object-cover mb-4"
          />
        </div>

         {/* Snake GameのGitHubリンク */}
        <div className="text-center">
           <a
              href="https://github.com/sinnn9593/snake_game" // 実際のGitHub URLをここに挿入
              target="_blank"
              rel="noopener noreferrer"
            >
           <button className="px-6 py-3 bg-blue-500 text-white text-lg rounded-md hover:bg-blue-600 transition">
               View on GitHub
           </button>
          </a>
        </div>
      </section>

      {/* Pac-Man Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">🕹️ Pac-Man - 技術解説</h2>

        <h3 className="text-xl font-semibold mb-2">アーキテクチャ</h3>
        <p className="text-lg text-gray-700 mb-6">
          Pac-Manは、**エンティティ駆動型**および**状態遷移型アーキテクチャ**に基づいています。ゲーム内のすべてのキャラクター（Pac-Man、ゴースト、エサなど）はそれぞれ独立した状態を持ち、ゲームが進行するにつれてその状態が遷移していきます。各キャラクターは自身のAIアルゴリズムに基づいて動き、プレイヤーの入力（矢印キー）に応じてPac-Manを移動させます。ゴーストたちは、基本的に**追跡アルゴリズム**を使用してPac-Manを追いかける動作を行います。
        </p>

        <h3 className="text-xl font-semibold mb-2">技術スタック</h3>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>HTML5 Canvas:</strong> Pac-Manの迷路、キャラクター、エサなどを描画するためにCanvas APIを使用します。リアルタイムで迷路を描きつつ、Pac-Manやゴーストの動きも描画します。</li>
          <li><strong>JavaScript (ES6+):</strong> ゲームロジック全体をJavaScriptで実装します。ユーザーの入力を処理し、ゲームの状態を管理します。</li>
          <li><strong>CSS:</strong> ゲーム画面の基本的なスタイル設定にCSSを使用しますが、動的な要素（キャラクターのアニメーション、エサの位置変更など）はすべてJavaScriptとCanvasで実装されています。</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">ゲームロジックとAIアルゴリズム</h3>
        <p className="text-lg text-gray-700 mb-6">
          Pac-Manでは、ゴーストの動きがプレイヤーにとって非常に重要な要素です。ゴーストたちは**距離ベースのAIアルゴリズム**を使用してPac-Manを追いかけます。特に、ゴーストたちの動きには、各キャラクターが異なるAIパターンを持っているため、プレイヤーはゴーストの動きに合わせて戦略を練る必要があります。例えば、赤いゴーストは単純にPac-Manを追いかけ、青いゴーストは予測的に動きます。パワーエサを食べると、ゴーストは無力化されてPac-Manを追いかけるのをやめます。これにより、ゲームの戦略性が大きく増し、プレイヤーはゴーストを避けながらステージをクリアしていきます。
        </p>

        <h3 className="text-xl font-semibold mb-2">設計パターンとユーザーインタラクション</h3>
        <p className="text-lg text-gray-700 mb-6">
          Pac-Manの設計では、**イベント駆動型プログラミング**が採用されており、プレイヤーが行う入力（矢印キー）に応じて、ゲームの状態（位置やスコア）を即座に更新します。ユーザーインタラクションとゲームの状態管理を分けることで、スムーズな動作が実現されます。また、各ゲームキャラクターが持つAIは、状態管理によりゲームの進行に影響を与えるため、戦略的なプレイが可能です。
        </p>

        <div className="text-center mb-6">
          <img
            src="src/assets/models1/pac-man.png"
            alt="Pac-Man"
            className="mx-auto w-60 h-60 object-cover mb-4"
          />
        </div>
             {/* Pac-ManのGitHubリンク */}
        <div className="text-center">
            <a
               href="https://github.com/sinnn9593/pacman" // 実際のGitHub URLをここに挿入
               target="_blank"
               rel="noopener noreferrer"
             >
               <button className="px-6 py-3 bg-blue-500 text-white text-lg rounded-md hover:bg-blue-600 transition">
                 View on GitHub
               </button>
            </a>
        </div>
      </section>
      {/* Custom Calculator Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">🧮 Custom Calculator - 技術解説</h2>

        <h3 className="text-xl font-semibold mb-2">アーキテクチャ</h3>
        <p className="text-lg text-gray-700 mb-6">
          Custom Calculatorは、**状態管理型アーキテクチャ**を採用しています。ユーザーの入力に応じて、計算結果がリアルタイムで更新される仕組みです。Reactのコンポーネントを活用して、UIとロジックが効率的に連携するよう設計されています。入力された数値や演算子は状態として管理され、計算が完了するたびに結果が画面に表示されます。
        </p>

        <h3 className="text-xl font-semibold mb-2">技術スタック</h3>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>React:</strong> UIの描画と状態管理にReactを使用しています。状態の変更に応じてコンポーネントが再レンダリングされ、計算結果が即座に反映されます。</li>
          <li><strong>JavaScript (ES6+):</strong> 計算ロジックは、最新のJavaScriptで実装されています。非同期処理やイベントハンドリングを使用し、ユーザーの入力に即座に反応します。</li>
          <li><strong>CSS:</strong> ボタンのデザインやレイアウトにはCSSを使用し、シンプルで直感的なインターフェースを提供します。</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">ゲームロジックと設計パターン</h3>
        <p className="text-lg text-gray-700 mb-6">
          計算機のロジックは、**状態管理**に基づいています。ユーザーが入力する数値や演算子は状態として管理され、計算ボタンを押すたびに、計算が実行され、結果が表示されます。計算の履歴は、ボタンの押下ごとに更新され、計算結果が画面に反映されます。状態遷移は、入力された数値や演算子によって変更され、最終的な結果が表示されます。
        </p>

        <h3 className="text-xl font-semibold mb-2">設計パターンとアルゴリズム</h3>
        <p className="text-lg text-gray-700 mb-6">
           Custom Calculatorの設計では、**状態遷移パターン**を活用しています。各ボタンが押されるごとに状態が遷移し、計算が行われます。また、計算のアルゴリズムは、演算子の優先順位や括弧によるグループ化を適切に処理するように設計されています。これにより、複雑な計算式も正しく計算されるようになっています。
        </p>

        <h3 className="text-xl font-semibold mb-2">UI/UXデザイン</h3>
        <p className="text-lg text-gray-700 mb-6">
          UIデザインは、**直感的な操作**を重視しています。ボタンは大きく配置され、ユーザーが簡単にクリックできるようになっています。色使いやレイアウトもシンプルで、誰でもすぐに操作できるように設計されています。結果が即座に反映されることで、ユーザーのフィードバックが素早く得られ、快適な使用感を提供します。
        </p>

        <div className="text-center mb-6">
          <img
           src="/assets/models1/calculator.png" // 電卓の画像を適宜変更
           alt="Custom Calculator"
           className="mx-auto w-60 h-60 object-cover mb-4"
          />
        </div>
    </section>
  {/* Custom CalculatorのGitHubリンク */}
        <div className="text-center mb-6">
           <div className="flex justify-center gap-6">
              <a
                href="https://github.com/sinnn9593/calculator-for-delivery/archive/refs/tags/v1.0.0.zip"
                target="_blank"
                rel="noopener noreferrer"
             >
                 <button className="px-6 py-3 bg-blue-500 text-white text-lg rounded-md hover:bg-blue-600 transition">
                  Download for Windows
                 </button>
              </a>

              <a
            href="https://github.com/sinnn9593/calculator-for-delivery/archive/refs/tags/v1.0.0.tar.gz"
            target="_blank"
            rel="noopener noreferrer"
              >
                <button className="px-6 py-3 bg-blue-500 text-white text-lg rounded-md hover:bg-blue-600 transition">
                   Download for MacOS/Linux
                </button>
           </a>
          </div>
        </div>



      {/* 戻るボタン */}
      <div className="text-center mt-12">
        <Link to="/">
          <button className="px-6 py-3 bg-gray-500 text-white text-lg rounded-md hover:bg-gray-600 transition">
            back
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Service;
