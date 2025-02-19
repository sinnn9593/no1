import React from 'react';

const About:React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Sample Page - 詳細情報</h1>
      <p className="mb-4">
        このページでは、ゲームや電卓などの機能についての詳細な説明を提供します。
      </p>

      <section>
        <h2 className="text-2xl font-semibold mt-6 mb-2">ゲーム開発</h2>
        <p>
          ゲーム開発にはReactとJavaScriptを使用しています。ゲームはインタラクティブな体験を提供し、
          プレイヤーがエンターテイメントを楽しむための工夫がされています。特に、パックマンとスネークゲームは、Reactのコンポーネントと状態管理を活用し、シンプルで楽しいゲームプレイを実現しました。
        </p>
        <img src="/images/game-screenshot.jpg" alt="Game Screenshot" className="mt-4 w-full max-w-md rounded-lg" />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-6 mb-2">カスタム電卓</h2>
        <p>
          カスタム電卓は、ReactとTailwindCSSを用いて開発された直感的なUIを持つ電卓です。ユーザーは簡単に計算を行うことができ、レスポンシブデザインを採用して、モバイル端末でも快適に使用できます。
        </p>
        <img src="/images/calculator-screenshot.jpg" alt="Calculator Screenshot" className="mt-4 w-full max-w-md rounded-lg" />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-6 mb-2">競技プログラミング</h2>
        <p>
          競技プログラミングでは、効率的なアルゴリズムを使って、さまざまな問題に挑戦しています。特に、高度なデータ構造とアルゴリズムを活用して問題を解決し、最適な結果を得ることを目指しています。毎日新しい問題に取り組んでスキルを向上させています。
        </p>
      </section>
    </div>
  );
};

export default About;
