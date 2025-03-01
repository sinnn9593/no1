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
            Mapの最短経路や、配達員と店と注文者との組み合わせによるマッチング最適化などアルゴリズムが使われていて気づきも多かったです。){" "}
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
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">最後に</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
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
