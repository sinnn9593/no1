const SvgDiagram = () => (
  <div className="flex justify-center my-8">
    <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
      {/* ゲーム全体の状態 */}
      <rect
        x="100"
        y="20"
        width="200"
        height="50"
        fill="#f0f0f0"
        stroke="#333"
      />
      <text x="200" y="50" textAnchor="middle" fontSize="14" fill="#333">
        ゲーム全体の状態
      </text>

      {/* 子要素（Pac-Man） */}
      <rect
        x="50"
        y="100"
        width="100"
        height="50"
        fill="#e6f7ff"
        stroke="#333"
      />
      <text x="100" y="130" textAnchor="middle" fontSize="12" fill="#333">
        Pac-Man
      </text>

      {/* 子要素（ゴースト） */}
      <rect
        x="160"
        y="100"
        width="100"
        height="50"
        fill="#ffebcc"
        stroke="#333"
      />
      <text x="210" y="130" textAnchor="middle" fontSize="12" fill="#333">
        ゴースト
      </text>

      {/* 子要素（ステージ） */}
      <rect
        x="270"
        y="100"
        width="100"
        height="50"
        fill="#d9f7be"
        stroke="#333"
      />
      <text x="320" y="130" textAnchor="middle" fontSize="12" fill="#333">
        ステージ
      </text>

      {/* 矢印（ゲーム全体→Pac-Man） */}
      <line x1="200" y1="70" x2="100" y2="100" stroke="#333" />
      {/* 矢印（ゲーム全体→ゴースト） */}
      <line x1="200" y1="70" x2="210" y2="100" stroke="#333" />
      {/* 矢印（ゲーム全体→ステージ） */}
      <line x1="200" y1="70" x2="320" y2="100" stroke="#333" />
    </svg>
  </div>
);

export default SvgDiagram;
