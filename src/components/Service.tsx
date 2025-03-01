import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SvgDiagram from "./SvgDiagram";

const Service = () => {
  const snakeUrl = `${import.meta.env.VITE_BASE_URL || "/src/"}assets/models1/snake.png`;
  const packmanUrl = `${import.meta.env.VITE_BASE_URL || "/src/"}assets/models1/pac-man.png`;
  const calculatorUrl = `${import.meta.env.VITE_BASE_URL || "/src/"}assets/models1/calculator.png`;
  const PacmanPage = () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        Pac-Manの状態管理型アーキテクチャ
      </h2>
      <SvgDiagram />
    </div>
  );
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
        <h2 className="text-3xl font-semibold mb-4">
          🐍 Snake Game - 技術解説
        </h2>

        <h3 className="text-xl font-semibold mb-2">アーキテクチャ</h3>
        <p className="text-lg text-gray-700 mb-6">
          本作のSnake
          Gameは、Pygameをベースに構築されたシンプルながら拡張性の高い構成になっています。
          <br />
          ゲームループを軸に、毎フレームごとに「入力の取得」「ゲーム状態の更新」「画面の描画」という3つの処理を順番に実行することでゲームを制御しています。
          <br />
          ヘビの移動や果物の生成、衝突判定といった各ロジックは独立した関数に分け、責務が分離された設計です。
        </p>

        <h3 className="text-xl font-semibold mb-2">技術スタック</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>
            <strong>Python + Pygame:</strong>
            グラフィック描画、イベント処理、フレームレート制御など、Pygameの機能をフル活用。ヘビや果物、スコア表示など、すべての描画はPygameのSurfaceに直接描画します。
          </li>
          <li>
            <strong>オブジェクト指向設計:</strong>
            ヘビや果物はそれぞれ独立したデータ構造として管理され、座標やサイズなどの状態を持ちます。ゲーム進行に合わせて、各オブジェクトの状態が更新される仕組みです。
          </li>
          <li>
            <strong>イベント駆動＋ループベース:</strong>
            プレイヤーのキーボード操作はイベントとして処理し、各フレームごとにヘビの移動方向が更新されます。状態更新と描画が毎フレーム実行されるため、スムーズな操作感を実現しています。
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">
          ゲームロジックとデータ管理
        </h3>
        <p className="text-lg text-gray-700 mb-6">
          ヘビの身体は座標のリスト（配列）として管理されています。
          <br />
          移動するごとに新しい頭の座標がリストに追加され、尻尾側の座標が削除されることで、ヘビの伸縮を表現しています。
          <br />
          果物はランダムな座標に生成され、ヘビが果物を食べるとスコアが加算され、ヘビの長さが1マス分伸びる仕組みです。
          <br />
          ゲームオーバー判定は「壁への衝突」「自身の身体への衝突」によって行われ、ゲーム終了時にはスコアが表示されるようになっています。
        </p>

        <h3 className="text-xl font-semibold mb-2">速度調整と難易度設計</h3>
        <p className="text-lg text-gray-700 mb-6">
          ゲーム進行に合わせて、フレームレート（ヘビの移動速度）を徐々に引き上げることで、段階的に難易度が上昇する仕組みになっています。
          <br />
          ヘビの体が長くなるほど、移動スペースが限られ、戦略的な操作が求められるよう設計されています。
          <br />
          また、果物の生成位置は毎回ランダムに設定されるため、プレイごとに異なる配置・展開が楽しめるようになっています。
        </p>

        <h3 className="text-xl font-semibold mb-2">
          Pygameによる描画と画面遷移
        </h3>
        <p className="text-lg text-gray-700 mb-6">
          画面描画はPygameのSurfaceに対して、毎フレーム全体を再描画する方式を採用しています。
          <br />
          これにより、ヘビの動きや果物の位置変化、スコアのカウントアップなどが即座に反映されます。
          <br />
          ゲームオーバー時には、画面全体に「Game
          Over」のメッセージを表示し、リスタートを促す設計です。
        </p>

        <div className="text-center mb-6">
          <img
            src={snakeUrl}
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
          Pac-Manは、エンティティ駆動型および状態遷移型アーキテクチャを採用しており、ゲーム内のすべての要素（Pac-Man本体、ゴースト、エサ、壁など）がそれぞれ独自の状態と振る舞いを持ちます。
          <br />
          各エンティティは独立したオブジェクトとして管理され、ゲームループ内で毎フレームごとに状態が更新されます。またPygameを採用しているので、Surfaceに直接描画しています。
          <br />
          特にでは、「ターゲット座標の設定」「最短経路探索」「ランダム移動」「ステージの自動生成」など複数のロジックが組み合わさることで、単純な追跡行動に終わらず、多様な動きを実現しています。
          <br />
          この構造により、ステージ設計やゴーストの行動パターンをパラメータ化し、ゲームバランスを細かく調整できる設計になっています。
        </p>

        <h3 className="text-xl font-semibold mb-2">技術スタック</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>
            <strong>Python (3.x):</strong>
            <br />
            ゲーム全体のロジックからグラフィック描画、キャラクターの動作制御、衝突判定、スコア管理に至るまで、すべてPythonで実装しています。特にPygameライブラリを採用しており、ゲームウィンドウの生成、イベントハンドリング（キー入力）、タイマー管理、音声再生などの基本機能をフル活用しています。Pythonのオブジェクト指向を活かし、Pac-Man、ゴースト、エサ、壁といった各要素を個別のクラスに分離することで、可読性と拡張性を確保しています。
            また、AIアルゴリズム（追跡、逃避、ランダム移動など）は、それぞれ専用のメソッドとして実装し、ゴーストごとに異なる性格を持たせることが可能になっています。これにより、パラメーター調整のみで難易度を柔軟に変更できる設計になっています。
            エンティティの状態管理や衝突判定、スコア計算などの各種ロジックをフレーム単位（毎秒30回）で更新する、**ゲームループ型の構成**です。
          </li>

          <li>
            <strong>Pygame (2.x):</strong>
            <br />
            迷路やキャラクター、エサ、ゴーストなど、すべてのグラフィック要素はPygameのSurface（サーフェス）に直接描画しています。スプライトシートを活用し、キャラクターのアニメーション（移動時のパックマンの口の開閉やゴーストの目の動きなど）を簡潔に管理。Pygameの「blit()」メソッドを駆使して、描画負荷を抑えつつ、毎フレームごとに最新の状態を反映しています。
            また、Pygameの**イベントハンドリング機能**により、プレイヤーからのキー入力（矢印キーによる移動）をリアルタイムに取得し、即座にPac-Manの動作に反映。これにより、「イベント駆動型プログラム」としての構造を持ちながら、ゲームの流れをシンプルに保つ工夫をしています。
          </li>

          <li>
            <strong>サウンド管理:</strong>
            <br />
            ゲーム中の効果音（エサを食べたとき、ゴーストにやられたとき、クリア時のファンファーレなど）は、Pygame.mixerモジュールで制御。特に、複数サウンドの同時再生や、BGMと効果音のミキシングには、Pygame.mixerの**チャンネル管理機能**を活用しています。
            音声ファイルはWAV形式で管理し、ファイルサイズと音質のバランスを考慮した設計です。
          </li>

          <li>
            <strong>UI表示（スコア・メッセージ表示）:</strong>
            <br />
            スコア表示や「GAME
            OVER」「READY!」といったメッセージ表示は、Pygameのフォント描画機能（pygame.font）を使用して実現。ゲームエリアに直接描画することで、Canvasライクな描画手法を採用しています。
            文字色や位置はパラメーター化されており、フォントサイズや色の変更にも柔軟に対応できる構造です。
            画面全体のレイアウトは、「ゲームエリア（迷路）」「ステータス表示エリア（スコア・残機）」を分離し、可読性を確保。これにより、スコアを常に確認できるユーザーフレンドリーな画面構成にしています。
          </li>

          <li>
            <strong>マップデータ管理:</strong>
            <br />
            迷路デザイン（壁やエサの配置）については、**外部ファイル化**することで、ステージごとのデザイン変更にも対応。CSVやテキスト形式でマップデータを保存し、ゲーム起動時に読み込む仕組みを採用しています。
            これにより、プログラムを書き換えずに、新しいステージを追加可能な拡張性を実現しています。ステージデータには、「壁の種類」「エサの位置」「ゴーストの初期配置」などの情報が含まれており、ゲーム進行に応じてエサの消失状態も記録・更新されます。
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">
          ゲームロジックとアルゴリズム
        </h3>
        <p className="text-lg text-gray-700 mb-6">
          Pac-Manにおける最大の特徴は、3体のゴーストがそれぞれ異なるを持ち、プレイヤーに対して異なるプレッシャーを与える点です。
          <br />
          例えば：
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>
            <strong>赤（Blinky）:</strong>{" "}
            最短ルートでPac-Manを直接追跡する「チェイサー」タイプ。
          </li>
          <li>
            <strong>青（Inky）:</strong>{" "}
            不規則な動きをする「トリックスター」タイプ。
          </li>
          <li>
            <strong>オレンジ（Clyde）:</strong>{" "}
            近距離では逃げるが、遠距離では追いかける「臆病者」タイプ。
          </li>
        </ul>
        <p className="text-lg text-gray-700 mb-6">
          これらの複雑なゴーストAIは、<strong>マンハッタン距離</strong>
          を基準にしたターゲット座標の設定、および<strong>深さ優先探索</strong>
          に基づく最短経路探索によって実現されています。
          <br />
          またパックマンのマップについて、毎回プレイごとに異なるマップをランダムに生成することを可能にしました。深さ優先探索を用いて、スタックに初めの座標を挿入することで、そこから、通路を構築することでマップの生成をしています。
        </p>

        <h3 className="text-xl font-semibold mb-2">
          設計パターンとユーザーインタラクション
        </h3>
        <p className="text-lg text-gray-700 mb-6">
          ユーザー操作（矢印キー）によるイベントをもとにPac-Manが移動します。またGame
          RoopによりRoopが回るたびに状況が変わっていきます。
          <br />
          矢印キーが押されると、イベントハンドラーがそれを読み取りパックマンが動く仕組みです。またパックマンの位置に応じて、ある種類のGhostの動きも変化します。またステージの自動生成により、プレイするごとに新鮮感をもたせることができます。
        </p>

        <PacmanPage />
        <p className="text-lg text-gray-700 mb-6">
          {" "}
          上のSVG図は、ゲーム内のエンティティ（Pac-Man、ゴースト、エサなど）がそれぞれ自分の「状態」を持ち、毎フレームごとに更新される仕組みを表したものです。
          <br />{" "}
          プレイヤーの操作やゴーストの動きに応じて、それぞれの状態が変化し、ゲーム全体が進行していきます。
          <br />{" "}
          このように個別の状態を管理することで、複雑な動きやイベントにも対応しやすくなっています。{" "}
        </p>

        <div className="text-center mb-6">
          <img
            src={packmanUrl}
            alt="Pac-Man"
            className="mx-auto w-60 h-60 object-cover mb-4"
          />
        </div>

        {/* Pac-ManのGitHubリンク */}
        <div className="text-center">
          <a
            href="https://github.com/sinnn9593/pacman"
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
        <h2 className="text-3xl font-semibold mb-4">
          🧮 Custom Calculator - 技術解説
        </h2>

        <h3 className="text-xl font-semibold mb-2">アーキテクチャ</h3>
        <p className="text-lg text-gray-700 mb-6">
          Custom
          Calculatorは、**状態管理型アーキテクチャ**を採用しています。ユーザーの入力に応じて、計算結果がリアルタイムで更新される仕組みです。Reactのコンポーネントを活用して、UIとロジックが効率的に連携するよう設計されています。入力された数値や演算子は状態として管理され、計算が完了するたびに結果が画面に表示されます。
        </p>

        <h3 className="text-xl font-semibold mb-2">技術スタック</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>
            <strong>React:</strong>{" "}
            UIの描画と状態管理にReactを使用しています。状態の変更に応じてコンポーネントが再レンダリングされ、計算結果が即座に反映されます。
          </li>
          <li>
            <strong>JavaScript (ES6+):</strong>{" "}
            計算ロジックは、最新のJavaScriptで実装されています。非同期処理やイベントハンドリングを使用し、ユーザーの入力に即座に反応します。
          </li>
          <li>
            <strong>CSS:</strong>{" "}
            ボタンのデザインやレイアウトにはCSSを使用し、シンプルで直感的なインターフェースを提供します。
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">
          ゲームロジックと設計パターン
        </h3>
        <p className="text-lg text-gray-700 mb-6">
          計算機のロジックは、**状態管理**に基づいています。ユーザーが入力する数値や演算子は状態として管理され、計算ボタンを押すたびに、計算が実行され、結果が表示されます。計算の履歴は、ボタンの押下ごとに更新され、計算結果が画面に反映されます。状態遷移は、入力された数値や演算子によって変更され、最終的な結果が表示されます。
        </p>

        <h3 className="text-xl font-semibold mb-2">
          設計パターンとアルゴリズム
        </h3>
        <p className="text-lg text-gray-700 mb-6">
          Custom
          Calculatorの設計では、**状態遷移パターン**を活用しています。各ボタンが押されるごとに状態が遷移し、計算が行われます。また、計算のアルゴリズムは、演算子の優先順位や括弧によるグループ化を適切に処理するように設計されています。これにより、複雑な計算式も正しく計算されるようになっています。
        </p>

        <h3 className="text-xl font-semibold mb-2">UI/UXデザイン</h3>
        <p className="text-lg text-gray-700 mb-6">
          UIデザインは、**直感的な操作**を重視しています。ボタンは大きく配置され、ユーザーが簡単にクリックできるようになっています。色使いやレイアウトもシンプルで、誰でもすぐに操作できるように設計されています。結果が即座に反映されることで、ユーザーのフィードバックが素早く得られ、快適な使用感を提供します。
        </p>

        <div className="text-center mb-6">
          <img
            src={calculatorUrl} // 電卓の画像を適宜変更
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
