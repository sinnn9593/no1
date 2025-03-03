import { useNavigate } from "react-router-dom"; // useNavigateをインポート

const About = () => {
  const navigate = useNavigate(); // useNavigateフックを使用してナビゲーション関数を取得

  const goHome = () => {
    navigate("/"); // ホームページ（'/'）に遷移
  };

  return (
    <div className="about-page bg-gradient-to-r from-blue-100 via-indigo-200 to-purple-300 text-gray-900 py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          About Me
        </h1>

        <div className="my-12 bg-white p-8 rounded-xl shadow-lg shadow-gray-400/30">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            はじめまして、sinnn9593です
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            こんにちは。エンジニア志望のsinnn9593と申します。現在、私は新しい技術を学びつつ、プログラミング、開発、競技プログラミングなどに注力しています。このサイトでは、私の経歴やスキル、そしてこれからのキャリアについての概要を紹介しています。どうぞよろしくお願いいたします。
          </p>
        </div>

        <div className="my-12 bg-white p-8 rounded-xl shadow-lg shadow-gray-400/30">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            開発・スキル
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            私は広く浅く多くの技術に触れてきました。主に以下の分野で経験があります。
            1 : 競技プログラミング
            AtCoder、Codeforcesなどで活動しています。特にアルゴリズム、データ構造、そして計算量の見積もりと削減に少しだけ強みがあります。
            2 : ゲーム開発 snake
            gameやブロック崩しなどのゲームのc++での開発経験あり。(ライブラリー :
            SDL2,設計思想 : オブジェクト指向) 3 : Web開発 :
            Reactを用いた3Dオブジェクトを含むWebsiteの制作。(jQuery,Bootstrapm、HTML,CSSのみの開発も多少あり)
            4 : Github活用 このポートフォリオ関連の成果物をGithubで公開。(Github
            ActionsでCI/CDも導入) *画像が読み込まれないエラーあり
          </p>
        </div>

        <div className="my-12 bg-white p-8 rounded-xl shadow-lg shadow-gray-400/30">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">経歴</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            ・ゲストハウス勤務 :
            海外の方との交流を通じて、英語でのコミュニケーション力と多文化理解を向上。これにより、英語の技術ドキュメントを読む力や、グローバルな開発環境での適応力が身についた。(コードを読み理解する力,関数の変数名から機能の推測する力など。また、エンジニアという職業にに対する海外での評価や印象など)
            ・工場での勤務 :
            限られた時間で効率的に作業をこなす必要があり、最適な作業フローを考える習慣がついた。これがアルゴリズムの最適化や効率的なコードを書く意識につながっている。
            ・ 配達員 :
            配達ルートを考えたり、時間内に効率よく動く必要があるため、リアルタイムで最適な選択する力が身についた。これは、ゲームAIのアルゴリズム設計やデータをもとに動的に判断するプログラミングに応用できる。(Google
            Mapの最短経路や、配達員と店舗と注文者との組み合わせによるマッチング最適化などアルゴリズムが使われていて気づきも多かったです。){" "}
          </p>
        </div>

        <div className="my-12 bg-white p-8 rounded-xl shadow-lg shadow-gray-400/30">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            私の強みとこだわり
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            私の強みは、問題解決能力と継続的な学習です。私は常に最新の技術を追い求め、自分を進化させ続けています。その姿勢を仕事に反映させることができ、プロジェクトで直面するどんな課題も、地道に解決策を見つけることができます。また、チームでの協力を大切にし、異なる視点や意見を取り入れることで、より良い成果を生み出すことができると信じています。
          </p>
        </div>

        <div className="my-12 bg-white p-8 rounded-xl shadow-lg shadow-gray-400/30">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            どんな仕事をしたいのか
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            私がこれから挑戦していきたいことは、社会的な影響力を持つ技術の開発です。テクノロジーは日々進化していますが、その進化を社会全体にどれだけ有益に活かせるかが重要だと思っています。
          </p>
        </div>

        <div className="my-12 bg-white p-8 rounded-xl shadow-lg shadow-gray-400/30">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            私が大切にしていること
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            どんな仕事にも共通して大切にしているのは、情熱と誠実です。私は自分がやることに対して責任を持ち、常に誠実に取り組みます。情熱を持って仕事に取り組むことが、良い結果を生み出す源泉だと信じています。個人としての成長だけでなく、チームや組織、さらには社会にどれだけ貢献できるかを考えながら仕事を進めていきます。
          </p>
        </div>

        <div className="my-12 bg-white p-8 rounded-xl shadow-lg shadow-gray-400/30">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            過去の作品 - ブロック崩し
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            過去にC++を用いて、「ブロック崩し」ゲームを制作しました。
            <br />
            ゲーム全体の構成にはオブジェクト指向設計を採用し、ボール、パドル、ブロックといった各要素をクラスとして定義。
            <br />
            それぞれが自律的に振る舞うように実装することで、機能追加や仕様変更にも柔軟に対応できる設計を意識しました。
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            描画処理やイベント処理には「SDL2ライブラリ」を活用。
            <br />
            SDL2公式ドキュメントを参考にしながら、自ら必要な機能を読み解き、実装に組み込みました。
            <br />
            しかし、SDL2は日本語での解説や事例が非常に少なく、インターネット上にも実践的なサンプルコードがほとんど存在しませんでした。
            <br />
            そのため、ライブラリの仕様や使い方を英語の公式ドキュメントや海外の技術フォーラムから地道に調査・検証しながら完成させました。
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            初めてのSDL2を用いたC++作品として、単に動かすだけでなく、オブジェクト指向設計やライブラリ調査力を養う貴重な経験となりました。
            今後はこの経験を活かし、より複雑なゲームや、他ライブラリへの応用も積極的に行いたいと考えています。
          </p>

          {/* GitHubリンク */}
          <div className="mt-6">
            <a
              href="https://github.com/sskkkkkkkkk/game1-breakdown-"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-lg font-medium"
            >
              ➡️ GitHubリポジトリはこちら
            </a>
          </div>
        </div>
        {/* AtCoder戦績 */}
        <div className="my-12 bg-white p-8 rounded-xl shadow-lg shadow-gray-400/30">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            AtCoder 成績
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            AtCoderでは、様々なアルゴリズムやデータ構造に挑戦してきました。灰色上位に位置することができたのは、問題解決能力を磨く努力と、問題の解析を迅速に行う力を養ってきた証です。競技プログラミングの世界では、常に新たな挑戦が待っていますが、その中で培ったスキルは、現実世界の問題解決にも応用できると感じています。
          </p>

          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              レート分布
            </h3>
            <p className="text-xl text-gray-600">
              以下は、私のAtCoderでのレート分布です。レート別の色分けでは灰色でその中で上位の位置づけです。平均して毎回のコンテストでC問題までの問題を解くことができます。C問題あたりは、ほぼ全探索でで解ける問題が多く、DFS、BFS,尺取り法、bit全探索,再帰関数、順列全探索などの基礎的なアルゴリズムを問題文を読んで、考察をしたうえで使えるくらいの実力です。グラフや木の問題に関しても、少なめの考察の問題であれば解くことができます。競技プログラミングの本質である、計算量削減のアルゴリズムについては、浅く広い知識はありますが、考察ありきの応用した実装はもう少し経験が必要です。
              またデータ構造は、配列、スタック、キュー、優先度付きキューや、連想配列、ハッシュマップを使うことができます。
            </p>
            <img
              src="src/assets/atcoder3.png" // レート分布の画像URL
              alt="AtCoder レート分布"
              className="w-3/5 mt-4 rounded-md shadow-md"
            />
          </div>
        </div>

        <div className="my-12 bg-white p-8 rounded-xl shadow-lg shadow-gray-400/30">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">最後に</h2>
          <p className="text-x1 text-gray-700 leading-relaxed">
            私のキャリアはまだ始まったばかりですが、これからも新しい技術に挑戦し、成長し続けたいと思っています。そして、私の作ったものが、少しでも多くの人々の役に立つことができれば最高です。どんな小さなことでも、人々にインパクトを与えられるようなエンジニアでありたいと考えています。
          </p>
        </div>
        <div className="text-center mt-12">
          <button
            onClick={goHome}
            className="bg-teal-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-teal-600 transition duration-300"
          >
            back
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
