// src/pages/About.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';  // useNavigateをインポート


const About = () => {
  const navigate = useNavigate();  // useNavigateフックを使用してナビゲーション関数を取得

  const goHome = () => {
    navigate('/');  // ホームページ（'/'）に遷移
  };


  return (
    <div className="about-page bg-gradient-to-r from-blue-100 via-indigo-200 to-purple-300 text-gray-900 py-16 px-4">
      <div className="container mx-auto max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
  About Me
</h1>




        <div className="my-12 bg-white p-8 rounded-xl shadow-lg shadow-gray-400/30">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">はじめまして、[あなたの名前]です</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            私は、技術と創造力を駆使して、より良い未来を作りたいと考えているエンジニアです。子供の頃から、何かを作り出すことに興味を持ち、ゲームやテクノロジーの世界に夢中になっていました。その好奇心は今も変わらず、毎日新しい挑戦を楽しんでいます。私にとって、プログラミングは単なる仕事ではなく、問題解決やアイデアを形にする手段です。
          </p>
        </div>

        <div className="my-12 bg-white p-8 rounded-xl shadow-lg shadow-gray-400/30">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">どうしてプログラマーになったのか</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            最初にコンピュータに触れたのは中学生の時でした。その時、プログラミングを学ぶことで、思っていた通りの結果を得られる感動を味わいました。少しずつコードを書き進めていくうちに、プログラムが現実世界の問題を解決する力を持つことに気付きました。それからは、プログラミングが私の情熱の中心となり、複雑な問題に挑戦することが私のライフワークとなりました。
          </p>
        </div>

        <div className="my-12 bg-white p-8 rounded-xl shadow-lg shadow-gray-400/30">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">私が目指すエンジニア像</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            私は「技術を使って人々の生活をより豊かにする」ことを目標にしています。技術的なスキルはもちろん重要ですが、それ以上にユーザーの視点を持ち、使いやすさや利便性を考慮することが大切だと考えています。エンジニアリングにおける技術的な深さと、人々が直感的に使える製品を作り出すための工夫、そのバランスを追求しています。
          </p>
        </div>

        <div className="my-12 bg-white p-8 rounded-xl shadow-lg shadow-gray-400/30">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">私の強みとこだわり</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            私の強みは、問題解決能力と継続的な学習です。私は常に最新の技術を追い求め、自分を進化させ続けています。その姿勢を仕事に反映させることができ、プロジェクトで直面するどんな課題も、地道に解決策を見つけることができます。また、チームでの協力を大切にし、異なる視点や意見を取り入れることで、より良い成果を生み出すことができると信じています。
          </p>
        </div>

        <div className="my-12 bg-white p-8 rounded-xl shadow-lg shadow-gray-400/30">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">どんな仕事をしたいのか</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            私がこれから挑戦していきたいことは、社会的な影響力を持つ技術の開発です。テクノロジーは日々進化していますが、その進化を社会全体にどれだけ有益に活かせるかが重要だと思っています。例えば、AIや機械学習を用いたプロジェクトなど、未来を切り拓く技術に積極的に関わり、私の仕事が多くの人々の生活を向上させる手助けとなるように努めていきたいです。
          </p>
        </div>

        <div className="my-12 bg-white p-8 rounded-xl shadow-lg shadow-gray-400/30">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">私が大切にしていること</h2>
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
